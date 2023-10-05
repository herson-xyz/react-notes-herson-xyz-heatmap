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


# def get_focus(filepath):
#     with open(filepath, "r") as f:
#         lines = f.readlines()
#     for line in lines:
#         if "focus" in line:
#             if 'three.js' in line:
#                 return 'three-js'
#             elif 'react-three-fiber' in line:
#                 return 'react-three-fiber'
#             elif 'react' in line:
#                 return 'react'
#             elif 'touchdesigner' in line:
#                 return 'touchdesigner'
#             elif 'livecoding' in line:
#                 return 'livecoding'
#             elif 'XR' in line:
#                 return 'XR'
#             elif 'geometry-nodes' in line:
#                 return 'geometry-nodes'
#             elif '3d-scanning' in line:
#                 return '3d-scanning'
#             elif 'glsl' in line:
#                 return 'glsl'
#     return 'no-focus'

def get_focus(filepath):
    with open(filepath, "r") as f:
        lines = f.readlines()
    for line in lines:
        if "focus" in line:
            if 'Developing a sound aesthetic' in line:
                return 'sound'
            elif 'Developing a visual aesthetic' in line:
                return 'visuals'
            elif 'Philosophy of Networks' in line:
                return 'av'
            elif 'Writing Assignments' in line:
                return 'writing'
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
                        '/Users/main/Documents/GitHub/Creative-Practice/Creative Practice Notes', 'https://notes.herson.xyz')
                    date = get_date(file)
                    files_list.append(
                        {"date": date, "focus": focus, "path": new_path})
    return files_list


result = scan_directory(
    '/Users/main/Documents/GitHub/Creative-Practice/Creative Practice Notes')

with open("/Users/main/Documents/GitHub/react-notes-herson-xyz-heatmap/src/data.json", "w") as f:
    json.dump(result, f)
