import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

import ftb_snbt_lib as snbt
from ftb_snbt_lib.tag import Compound, List, String

QUEST_PATH = Path('config/ftbquests/quests')

QUEST_LOCALIZED_PATH = Path('.github/localization/quests')
shutil.rmtree(QUEST_LOCALIZED_PATH, ignore_errors=True)
QUEST_LOCALIZED_PATH.mkdir()

LANG_FILE_PATH = Path('config/openloader/resources/quests/assets/gto/lang')
os.makedirs(LANG_FILE_PATH, exist_ok=True)
SOURCE_LANGUAGE = 'zh_cn'
TARGET_LANGUAGE = 'en_us'

PACK_SHORT_KEY = "gto"
SOURCE_KEYS = {}
TARGET_KEYS = {}

ESCAPE_SUBS = {
    r'%': r'%%',
    r'"': r'\"'
}

MODE = sys.argv[1] if len(sys.argv) > 1 else None
PUSH_BEFORE_COMMIT = sys.argv[2] if len(sys.argv) > 2 else None


def get_file_at_commit(file_path, commit_sha):
    """
        获取某次 commit 的 json 文件内容。
    """
    try:
        result = subprocess.run(
            ['git', 'show', f'{commit_sha}:{file_path}'],
            capture_output=True, text=True, check=True
        )
        return json.loads(result.stdout)
    except Exception as e:
        print(f"[ERROR] git show failed for {file_path} at {commit_sha}: {e}")
        return {}


def get_pr_base_commit_sha():
    # 获取 pr commit 的第一个 parent sha
    try:
        result = subprocess.run(['git', 'rev-list', '--parents', '-n', '1', 'HEAD'], capture_output=True, text=True)
        parts = result.stdout.strip().split()
        if len(parts) > 2:  # pr commit
            return parts[1]
        else:
            return None
    except Exception as e:
        print(f"[ERROR] get_pr_base_commit_sha failed: {e}")
        return None


def escape_string(text: str) -> str:
    for match, req in ESCAPE_SUBS.items():
        text = text.replace(match, req)
    return text


def text_filter(text: str) -> bool:
    if not text:
        return False
    if text.startswith("{") and text.endswith("}"):
        return False
    if text.startswith("[") and text.endswith("]"):
        return False
    return True


def convert(file_path: Path) -> Compound:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = snbt.load(f)

    chapter = file_path.stem

    _convert(data, f'{PACK_SHORT_KEY}.{chapter}')
    return data


def _convert(data: Compound, lang_key: str):
    for key in filter(lambda x: data[x], data):
        if isinstance(data[key], Compound):
            _convert(data[key], f'{lang_key}.{key}')
        elif isinstance(data[key], List) and issubclass(data[key].subtype, Compound):
            for index in range(len(data[key])):
                tag = data[key][index]
                if 'id' in tag:
                    lk = f'{key}.{tag["id"]}'
                else:
                    lk = f'{key}{index}'
                _convert(tag, f'{lang_key}.{lk}')
        elif key in ['title', 'subtitle', 'description']:
            if isinstance(data[key], String) and text_filter(data[key]):
                lk = f'{lang_key}.{key}'
                SOURCE_KEYS[lk] = escape_string(data[key])
                data[key] = snbt.String(f'{{{lk}}}')
            elif isinstance(data[key], List) and issubclass(data[key].subtype, String):
                for index, i in enumerate(filter(lambda x: text_filter(data[key][x]), range(len(data[key])))):
                    lk = f'{lang_key}.{key}{index}'
                    SOURCE_KEYS[lk] = escape_string(data[key][i])
                    data[key][i] = snbt.String(f'{{{lk}}}')


def sync_language_files_incremental(source_keys: dict, source_language: str, target_language: str):
    """
    增量更新 en_us.json：只更新发生变动的 key，其余内容不变。
    """
    zh_cn_path = str(LANG_FILE_PATH / f'{source_language}.json')
    en_us_path = str(LANG_FILE_PATH / f'{target_language}.json')

    # 加载新生成的中文文本
    with open(zh_cn_path, 'r', encoding='utf-8') as f:
        new_zh_cn = json.load(f)

    # 加载操作之前的中文文本
    if MODE == 'push':
        old_zh_cn = get_file_at_commit(zh_cn_path, PUSH_BEFORE_COMMIT) if PUSH_BEFORE_COMMIT else {}
    elif MODE == 'pr':
        base_commit = get_pr_base_commit_sha()
        old_zh_cn = get_file_at_commit(zh_cn_path, base_commit) if base_commit else {}
    else:
        old_zh_cn = {}

    # 加载 en_us.json
    try:
        with open(en_us_path, 'r', encoding='utf-8') as f:
            en_us = json.load(f)
    except Exception:
        en_us = {}

    # 增量更新
    if old_zh_cn and (MODE == 'push' or MODE == 'pr'):
        # 有旧文件，做严格增量
        changed_keys = {k for k in new_zh_cn if old_zh_cn.get(k) != new_zh_cn[k]}

        # 输出变动的 key 及其内容，便于审核
        print(f"[INFO] Changed keys: {len(changed_keys)}")
        for k in changed_keys:
            old_value = old_zh_cn.get(k, '<not present>')
            old_en_value = en_us.get(k, '<not present>')
            new_value = new_zh_cn[k]
            print(f'- {k}:')
            print(f'    Old cn: {old_value}')
            print(f'    Old en: {old_en_value}')
            print(f'    New cn: {new_value}')

        # 更新变动的 key
        for k in changed_keys:
            en_us[k] = new_zh_cn[k]

    else:
        # 保守模式，只填充新增 key ，不动已有翻译
        newly_added_keys = [k for k in new_zh_cn if k not in en_us]
        for k in newly_added_keys:
            en_us[k] = new_zh_cn[k]

        # 输出新增的 key 及其内容，便于审核
        print(f"[WARN] No old zh_cn found, only add {len(newly_added_keys)} new keys.")
        for k in newly_added_keys:
            print(f'- {k}: {new_zh_cn[k]}')

    # 移除已删除的 key
    for k in list(en_us.keys()):
        # 保留 key 以 a.comment 开头的键值对
        if k.startswith('a.comment'):
            continue
        if k not in new_zh_cn:
            del en_us[k]

    # 保存 en_us.json
    with open(en_us_path, 'w', encoding='utf-8') as f:
        json.dump(dict(sorted(en_us.items())), f, ensure_ascii=False, indent=4)


def main():
    for root, dirs, files in os.walk(QUEST_PATH):
        for file in files:
            if file.endswith('.snbt'):
                file_path = Path(root) / file
                localized_data = convert(file_path)
                relative_path = file_path.relative_to(QUEST_PATH)
                localized_path = QUEST_LOCALIZED_PATH / relative_path
                localized_path.parent.mkdir(parents=True, exist_ok=True)
                with open(localized_path, 'w', encoding='utf-8') as f:
                    snbt.dump(localized_data, f)

    with open(LANG_FILE_PATH / f'{SOURCE_LANGUAGE}.json', 'w', encoding='utf-8') as f:
        json.dump(dict(sorted(SOURCE_KEYS.items())), f, ensure_ascii=False, indent=4)

    sync_language_files_incremental(SOURCE_KEYS, SOURCE_LANGUAGE, TARGET_LANGUAGE)


if __name__ == '__main__':
    main()
