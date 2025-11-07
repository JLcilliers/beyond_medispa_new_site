# Navigation Restructure - January 2025

## Changes Made

### 1. Font Size Updates (Navigation.tsx)
- Changed all `text-sm` (14px) to `text-base` (16px) throughout navigation
- Affected elements: dropdown buttons, featured items, category titles, category items, desktop links

### 2. Removed Obsolete Treatments (App.tsx)
- Removed imports: VanquishPage, CMSlimPage, UnisonPage
- Removed routes: `/procedures/body/vanquish`, `/procedures/body/cmslim`, `/procedures/body/unison`

### 3. Dropdown Styling Fix (Navigation.tsx)
- Removed label paragraphs (SPECIALITIES_LABEL, OTHER_OPTIONS_LABEL) for consistent styling

### 4. London Menu Restructure (Navigation.tsx, lines 50-91)
- **Categories reordered to**: [Body, Facial, Injectables]
- **Featured items** (7): Hydrafacial, LED Facial, Oxygen Facial, Microneedling, Exosome, Exilis, Hifu

### 5. Edinburgh Menu Restructure (Navigation.tsx, lines 93-137)
- **Categories reordered to**: [Body, Facial, Injectables]
- **Featured items** (8): Hydrafacial, LED Facial, Microneedling, Exosome, Exilis, **Hifu** (newly added), Cool Laser, Electrolysis

## Grid Layout
- Existing 4-column layout supports new structure: `grid-cols-[minmax(220px,260px)_repeat(3,minmax(170px,1fr))]`
- 1 wide specialities column + 3 category columns
- No rendering updates required

## Deployment
- Changes committed and pushed to main branch
- Auto-deploys to Vercel
