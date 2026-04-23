import json
import os
from pathlib import Path
import opencc

INPUT_FILE_PATH = Path('config/openloader/resources/quests/assets/gto/lang/zh_cn.json')
OUTPUT_FILE_PATH = Path('config/openloader/resources/quests/assets/gto/lang/zh_tw.json')
CONVERTER = opencc.OpenCC('s2tw.json')
ZH_TW_FIXES = {
    '纔': '才',
    '瞭': '了',
    '怎么': '怎麼',
    '這么': '這麼',
    '那么': '那麼',
    '為什么': '為什麼',
    '什么': '什麼',
    '這里': '這裡',
    '那里': '那裡',
    '輸齣': '輸出',
    '排齣': '排出',
    '產齣': '產出',
    '併行': '並行',
    '併為': '並為',
    '開髮': '開發',
    '髮電': '發電',
    '髮生器': '發生器',
    '髮送': '發送',
    '髮現': '發現',
    '髮信': '發信',
    '啟懞': '啟蒙',
    '繫統': '系統',
    '繫外': '系外',
    '星繫': '星系',
    '關繫': '關係',
    '泛銀河繫': '泛銀河系',
    '這裏': '這裡',
    '那裏': '那裡',
    '倉庫裏': '倉庫裡',
    '高爐裏': '高爐裡',
    '鍋裏': '鍋裡',
    '裏程碑': '里程碑',
    '控製': '控制',
    '集糰': '集團',
    '准備': '準備',
    '標簽': '標籤',
    '范圍': '範圍',
    '精准': '精準',
    '后續': '後續',
    '家伙': '傢伙',
    '綵虹': '彩虹',
    '綵色': '彩色',
    '必鬚': '必須',
    '嚮連接': '向連接',
    '工業祭罈': '工業祭壇',
    '活石花葯台': '活石花藥台',
}

def fix_traditional_chinese(text):
    fixed = text
    for source, target in ZH_TW_FIXES.items():
        fixed = fixed.replace(source, target)
    return fixed


def convert(text):
    return fix_traditional_chinese(CONVERTER.convert(text))


def convert_json(input_file_path, output_file_path):
    with open(input_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    def recursive_convert(obj):
        if isinstance(obj, str):
            return convert(obj)
        elif isinstance(obj, list):
            return [recursive_convert(item) for item in obj]
        elif isinstance(obj, dict):
            return {key: recursive_convert(value) for key, value in obj.items()}
        else:
            return obj

    converted_data = recursive_convert(data)

    with open(output_file_path, 'w', encoding='utf-8') as file:
        json.dump(converted_data, file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    if not os.path.exists(os.path.dirname(OUTPUT_FILE_PATH)):
        os.makedirs(os.path.dirname(OUTPUT_FILE_PATH))

    convert_json(INPUT_FILE_PATH, OUTPUT_FILE_PATH)
