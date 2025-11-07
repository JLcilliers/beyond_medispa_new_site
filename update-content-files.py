#!/usr/bin/env python3
"""
Script to update all treatment Content.tsx files to use the generic TreatmentContent component with useTina hook
"""
import os
import glob

# Base directory
base_dir = r"C:\Users\johan\Desktop\Beyond MediSpa New Site\frontend\components\pages\procedures"

# Files to skip (already updated or template)
skip_files = {
    "TreatmentContent.tsx",
    "AntiWrinkleContent.tsx",  # Already has useTina
    "DermalFillerContent.tsx",  # Just updated manually
}

# Template for the new content
def get_new_content(component_name, relative_path_to_treatment_content):
    return f'''import TreatmentContent from "{relative_path_to_treatment_content}";

export default function {component_name}({{ data }}: any) {{
  return <TreatmentContent data={{data}} />;
}}
'''

def count_path_levels(file_path, base):
    """Count how many directory levels between file and base"""
    rel_path = os.path.relpath(file_path, base)
    return rel_path.count(os.sep)

def update_content_file(file_path):
    """Update a single Content.tsx file"""
    filename = os.path.basename(file_path)

    # Skip certain files
    if filename in skip_files:
        print(f"Skipping {filename}")
        return

    # Extract component name from filename (remove .tsx extension)
    component_name = filename.replace(".tsx", "")

    # Calculate relative path to TreatmentContent based on nesting level
    levels = count_path_levels(file_path, base_dir)
    relative_import = "../" * levels + "TreatmentContent"

    # Generate new content
    new_content = get_new_content(component_name, relative_import)

    # Write new content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"[OK] Updated {filename}")

def main():
    # Find all *Content.tsx files recursively
    pattern = os.path.join(base_dir, "**", "*Content.tsx")
    files = glob.glob(pattern, recursive=True)

    print(f"Found {len(files)} Content.tsx files")
    print("=" * 60)

    updated_count = 0
    for file_path in files:
        filename = os.path.basename(file_path)
        if filename not in skip_files:
            update_content_file(file_path)
            updated_count += 1

    print("=" * 60)
    print(f"[SUCCESS] Updated {updated_count} files successfully!")

if __name__ == "__main__":
    main()
