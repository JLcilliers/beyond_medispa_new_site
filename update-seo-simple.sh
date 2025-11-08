#!/bin/bash

# Simple script to add SEO to all treatment pages
# This iterates through all TinaPage files and manually updates them

PROCEDURES_BASE="frontend/components/pages/procedures"

# Function to get the correct import path based on file depth
get_import_path() {
  local file_path="$1"
  local category=$(echo "$file_path" | cut -d'/' -f1)
  echo "../../../../SEO/SEOHead"
}

# Function to get page path from file path
get_page_path() {
  local file_path="$1"

  # Extract just the folder name
  local folder=$(dirname "$file_path")
  local category=$(echo "$folder" | cut -d'/' -f1)
  local treatment_name=$(basename "$folder")

  # Convert to kebab-case URL
  echo "/procedures/${category}/${treatment_name}"
}

# Process each TinaPage file
find "$PROCEDURES_BASE" -name "*TinaPage.tsx" -type f | while read -r file; do
  # Skip if already has SEOHead
  if grep -q "SEOHead" "$file"; then
    echo "⏭️  Already updated: $(basename $file)"
    continue
  fi

  echo "Processing: $(basename $file)"

  # Get relative path from procedures base
  rel_path="${file#$PROCEDURES_BASE/}"
  page_path=$(get_page_path "$rel_path")

  # Create backup
  cp "$file" "$file.bak"

  # Add import after client import
  sed -i '/import.*client.*from/a import { SEOHead } from "../../../../SEO/SEOHead";' "$file"

  # Find the last closing brace before the final export
  # Add the SEOHead component and data extraction before the return statement

  # This is complex - let's just do it with a Python script instead
  echo "✅ Updated imports for: $(basename $file)"
done

echo "Done! Now run the Python script to finish the updates."
