import os
import random
from pathlib import Path

import ftb_snbt_lib as snbt
from ftb_snbt_lib.tag import Bool, Compound, List, String

QUEST_CHAPTERS_PATH = Path("config/ftbquests/quests/chapters")
QUEST_CHAPTERS_GROUPS_PATH = Path("config/ftbquests/quests/chapter_groups.snbt")

SKIP_CHAPTERS = ["main-stoneage", "steam", "ulv", "uev", "shop", "tips", "progress", "periodic-table", "food", "util"]

def collect_all_ids() -> set:
    """Collect all existing IDs from the entire quest system."""

    all_ids = set()
    # Collect IDs from all chapter files
    for root, _, files in os.walk(QUEST_CHAPTERS_PATH):
        for file in files:
            if not file.endswith(".snbt"):
                continue

            file_path = Path(root) / file
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    snbt_data = snbt.load(f)
            except Exception:
                continue

            # Chapter ID
            if snbt_data.get("id"):
                all_ids.add(str(snbt_data.get("id")))

            # Quest/Task/Reward IDs
            for quest in snbt_data.get("quests", []):
                if not isinstance(quest, Compound):
                    continue
                if quest.get("id"):
                    all_ids.add(str(quest.get("id")))
                for task in quest.get("tasks", []):
                    if isinstance(task, Compound) and task.get("id"):
                        all_ids.add(str(task.get("id")))
                for reward in quest.get("rewards", []):
                    if isinstance(reward, Compound) and reward.get("id"):
                        all_ids.add(str(reward.get("id")))

    # Collect chapter_group IDs
    if QUEST_CHAPTERS_GROUPS_PATH.exists():
        try:
            with open(QUEST_CHAPTERS_GROUPS_PATH, "r", encoding="utf-8") as f:
                data = snbt.load(f)
            for group in data.get("chapter_groups", []):
                if isinstance(group, Compound) and group.get("id"):
                    all_ids.add(str(group.get("id")))
        except Exception:
            pass

    return all_ids


def generate_unique_id(existing_ids: set) -> str:
    """Generate a random unique 16-character hex ID."""
    hex_chars = "0123456789ABCDEF"
    while True:
        candidate = "".join(random.choices(hex_chars, k=16))
        if candidate not in existing_ids:
            existing_ids.add(candidate)
            return candidate


def process_bucket(quest: Compound, existing_ids: set) -> bool:
    """
    Process quests that contain exactly one bucket task:
    1. Add a checkmark task
    2. Set quest icon to the bucket item
    3. Make the bucket task optional

    Returns:
        True if the quest was modified, False otherwise
    """
    tasks = quest.get("tasks")
    if not tasks or not isinstance(tasks, List):
        return False

    if len(tasks) != 1:
        return False

    task = tasks[0]
    if not isinstance(task, Compound):
        return False

    task_type = task.get("type")
    if task_type != String("item"):
        return False

    item = task.get("item")
    if not item or not isinstance(item, String):
        return False

    if "_bucket" not in str(item):
        return False

    quest_id = str(quest.get("id", "UNKNOWN"))
    task_id = str(task.get("id", "UNKNOWN"))

    if not quest.get("icon"):
        quest["icon"] = item
        print(f"  [Quest {quest_id}] Set icon to {item}")

    if "optional_task" not in task:
        task["optional_task"] = Bool(True)
        print(f"  [Quest {quest_id}] Task {task_id} ({item}) set to optional")

    new_checkmark = Compound()
    new_checkmark["id"] = String(generate_unique_id(existing_ids))
    new_checkmark["type"] = String("checkmark")
    tasks.append(new_checkmark)
    checkmark_id = str(new_checkmark["id"])
    print(f"  [Quest {quest_id}] Added checkmark task {checkmark_id}")

    return True


def sort_compound_in_place(compound: Compound):
    """Sort Compound keys alphabetically in place, recursing into nested Compounds."""
    sorted_items = [(key, compound[key]) for key in sorted(compound.keys())]
    for key in list(compound.keys()):
        del compound[key]
    for key, value in sorted_items:
        if isinstance(value, Compound):
            sort_compound_in_place(value)
        compound[key] = value


def sort_quest_in_place(quest: Compound):
    """Sort a single quest's keys alphabetically in place."""
    # Sort all task and reward Compound keys
    for list_key in ["tasks", "rewards"]:
        items = quest.get(list_key)
        if items and isinstance(items, List):
            for item in items:
                if isinstance(item, Compound):
                    sort_compound_in_place(item)

    # Sort quest top-level keys
    sort_compound_in_place(quest)


def main():
    # Collect all existing IDs from the entire quest system upfront
    print("Collecting all existing IDs from quest system...")
    existing_ids = collect_all_ids()
    print(f"Found {len(existing_ids)} existing IDs")

    for root, dirs, files in os.walk(QUEST_CHAPTERS_PATH):
        for file in files:
            if not file.endswith(".snbt"):
                continue

            # Skip specified chapters
            chapter_name = file.removesuffix(".snbt")
            if chapter_name in SKIP_CHAPTERS:
                # print(f"Skipped chapter: {chapter_name} (specified in skip list)")
                continue

            file_path = Path(root) / file
            with open(file_path, "r", encoding="utf-8") as file:
                snbt_data = snbt.load(file)

            modified = False

            quests = snbt_data.get("quests", [])
            if not isinstance(quests, List):
                print(f"Skipped: {file_path} (no quests found)")
                continue

            for quest in quests:
                if not isinstance(quest, Compound):
                    continue
                if process_bucket(quest, existing_ids):
                    modified = True
                    # Sort only the modified quest
                    sort_quest_in_place(quest)

            if modified:
                with open(file_path, "w", encoding="utf-8") as file:
                    snbt.dump(snbt_data, file)
                print(f"Updated: {file_path}")


if __name__ == "__main__":
    main()
