import json
import os
import ast
from pathlib import Path
import shutil

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
        return True
    return True


def convert(file_path: Path) -> Compound:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = snbt.load(f)

    chapter = file_path.stem

    _convert(data, f'{PACK_SHORT_KEY}.{chapter}')
    return data


def _convert(data: Compound, lang_key: str):
    for key in filter(lambda x: data[x], data):
        # print(key)
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
                    if data[key][i].startswith("[") and data[key][i].endswith("]"):
                        text = data[key][i].replace('true', 'True').replace('false', 'False')
                        parsed_list = ast.literal_eval(text)
                        for index_rich, j in enumerate(filter(lambda i: parsed_list[i] != '', range(len(parsed_list)))):
                            if isinstance(parsed_list[j], str):
                                lk = f'{lang_key}.{key}{index}.rich_text{index_rich}'
                                SOURCE_KEYS[lk] = escape_string(parsed_list[j])
                                parsed_list[j] = {'translate' : lk}
                            else:
                                lk = f'{lang_key}.{key}{index}.rich_text{index_rich}'
                                SOURCE_KEYS[lk] = escape_string(parsed_list[j].pop('text'))
                                parsed_list[j]['translate'] = lk
                        if parsed_list[0] != '':
                            parsed_list = [''] + parsed_list
                        data[key][i] = json.dumps(parsed_list, ensure_ascii=False)
                    else:     
                        lk = f'{lang_key}.{key}{index}'
                        SOURCE_KEYS[lk] = escape_string(data[key][i])
                        data[key][i] = snbt.String(f'{{{lk}}}')


def sync_language_files(source_keys: dict, target_keys: dict, target_language: str):
    target_file_path = LANG_FILE_PATH / f'{target_language}.json'
    if target_file_path.exists():
        with open(target_file_path, 'r', encoding='utf-8') as f:
            target_keys.update(json.load(f))

    for key, value in source_keys.items():
        if key not in target_keys:
            target_keys[key] = value
        elif contains_chinese(target_keys[key]):
            target_keys[key] = value

    for key in list(target_keys.keys()):
        if key not in source_keys:
            del target_keys[key]

    with open(target_file_path, 'w', encoding='utf-8') as f:
        json.dump(dict(sorted(target_keys.items())), f, ensure_ascii=False, indent=4)


def contains_chinese(text: str) -> bool:
    for char in text:
        if '\u4e00' <= char <= '\u9fff':
            return True
    return False


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

    sync_language_files(SOURCE_KEYS, TARGET_KEYS, TARGET_LANGUAGE)


if __name__ == '__main__':
    main()
