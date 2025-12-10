import os
from pathlib import Path

import ftb_snbt_lib as snbt
from ftb_snbt_lib.tag import Bool, Compound, List, String

QUEST_CHAPTERS_PATH = Path("config/ftbquests/quests/chapters")


def process_bucket(quest: Compound) -> bool:
    """
    Process quests with bucket items to standardize them:
    1. If only one bucket: Set icon to the bucket item
    2. Make all bucket items optional
    3. Add or set checkmark name to None

    Returns:
        True if the quest was modified, False otherwise
    """

    tasks = quest.get("tasks")
    if not tasks or not isinstance(tasks, List):
        return False

    modified = False
    bucket_tasks = []
    has_checkmark = False
    checkmark_task = None

    # Find all bucket items and checkmark
    for task in tasks:
        if not isinstance(task, Compound):
            continue

        task_type = task.get("type")
        if task_type == String("item"):
            item = task.get("item")
            if item and isinstance(item, String) and "_bucket" in str(item):
                bucket_tasks.append((str(item), task))
        elif task_type == String("checkmark"):
            has_checkmark = True
            checkmark_task = task

    if not bucket_tasks:
        return False

    if len(bucket_tasks) == 1:
        bucket_item = bucket_tasks[0][0]
        current_icon = quest.get("icon")
        if not current_icon:
            quest["icon"] = String(bucket_item)
            modified = True

    for bucket_item, bucket_task in bucket_tasks:
        if not bucket_task.get("optional_task"):
            bucket_task["optional_task"] = Bool(True)
            modified = True

    if has_checkmark and checkmark_task:
        current_title = checkmark_task.get("title")
        if current_title:
            del checkmark_task["title"]
            modified = True
    else:
        first_bucket_task = bucket_tasks[0][1]
        new_checkmark = Compound()
        new_checkmark["id"] = String(
            f"{first_bucket_task.get('id', 'GENERATED')}_CHECKMARK"
        )
        new_checkmark["type"] = String("checkmark")
        tasks.append(new_checkmark)
        modified = True

    return modified


def main():
    for root, dirs, files in os.walk(QUEST_CHAPTERS_PATH):
        for file in files:
            if file.endswith(".snbt"):
                file_path = Path(root) / file
                with open(file_path, "r", encoding="utf-8") as file:
                    snbt_data = snbt.load(file)

                modified = False

                quests = snbt_data.get("quests", [])
                if not isinstance(quests, List):
                    print(f"Skipped: {file_path} (no quests found)")
                    continue

                for quest in quests:
                    if isinstance(quest, Compound):
                        if process_bucket(quest):
                            modified = True

                if modified:
                    with open(file_path, "w", encoding="utf-8") as file:
                        snbt.dump(snbt_data, file)
                    print(f"Updated: {file_path}")


if __name__ == "__main__":
    main()
