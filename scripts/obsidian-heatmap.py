import os
import json
import re


def get_frontmatter(filepath):
    with open(filepath, "r") as f:
        lines = f.readlines()
    for line in lines:
        if "publish: true" in line:
            return True
    return False

def get_focus(filepath):
    with open(filepath, "r") as f:
        lines = f.readlines()
    for line in lines:
        if "focus" in line:
            if 'Prototype' in line:
                return 'prototype'
            elif 'Research' in line:
                return 'research'
    return 'no-focus'


def get_date(file):
    date_match = re.match(r"(\d{4})-(\d{2})-(\d{2})", file)
    if date_match:
        return file[:-3]
    return None


def scan_directory(dir_path):
    files_list = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith(".md"):
                full_path = os.path.join(root, file)
                if get_frontmatter(full_path):
                    focus = get_focus(full_path)
                    new_path = full_path.replace(
                        '/Users/hersonguerrerohuh/Snorlax/Obsidian/Home/Journal', 'https://notes.serfugaz.xyz')
                    date = get_date(file)
                    files_list.append(
                        {"date": date, "focus": focus, "path": new_path})
    return files_list


result = scan_directory(
    '/Users/hersonguerrerohuh/Snorlax/Obsidian/Home/Journal')

with open("/Users/hersonguerrerohuh/Development/react-notes-herson-xyz-heatmap/src/data.json", "w") as f:
    json.dump(result, f)
