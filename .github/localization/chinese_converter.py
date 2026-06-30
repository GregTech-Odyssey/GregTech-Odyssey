import json
import os
from pathlib import Path
import opencc

INPUT_FILE_PATH = Path('config/openloader/resources/quests/assets/gto/lang/zh_cn.json')
OUTPUT_FILE_PATH = Path('config/openloader/resources/quests/assets/gto/lang/zh_tw.json')
CONVERTER = opencc.OpenCC('s2tw.json')
# 在opencc基础上上仍需要调整的词，与gtolib的调整同步
ZH_TW_FIXES = {
    "服務器": "伺服器",
    "鼠標": "滑鼠",
    "默認": "預設",
    "創建": "建立",
    "設置": "設定",
    "鏈接": "連結",
    "網絡": "網路",
    "信息": "資訊",
    "圖標": "圖示",
    "文件": "檔案",
    "激活": "啟用",
    "空閒": "閒置",
    "導出": "匯出",
    "導入": "匯入",
    "概率": "機率",
    "界面": "介面",

    "硅巖": "矽岩",
    "處理器集羣": "處理器叢集",
    "處理器超級計算機": "處理器超級電腦",
    "瞭": "了",
    "硅": "矽",
    "杆": "桿",
    "臺": "台",
    "巖": "岩",
    "併行": "並行",
    "併為": "並為",
    "超淨間": "無塵室",
    "超淨": "無塵",
    "纳米": "奈米",
    "末地": "終界",
    "下界合金": "獄髓",
    "下界": "地獄",
    "信標": "烽火台",
    "末影人": "終界使者",
    "末影": "終界",
    "烈焰人": "烈焰使者",
    "凋靈": "凋零",
    "納米": "奈米"
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
