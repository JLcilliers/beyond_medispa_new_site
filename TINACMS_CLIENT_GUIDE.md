# TinaCMS Content Editing Guide

## Accessing the TinaCMS Admin

1. Navigate to: **https://your-site.vercel.app/admin**
2. Log in with your QA password: `BeyondMediSpa2025!`
3. You'll see the TinaCMS dashboard with all your content collections

## Editing Treatment Content

### Step 1: Navigate to Treatments
- Click on **"Treatments"** in the left sidebar
- You'll see a list of all treatment pages

### Step 2: Open a Treatment for Editing
- Find the treatment you want to edit (e.g., "Anti-Wrinkle Injections")
- Click the **three-dot menu** (⋮) on the right side of the row
- Select **"Edit in Admin"**

### Step 3: Edit Content Fields

The editor will show you these sections:

#### **Treatment Name**
- The main title used for the page

#### **Category**
- Choose from: Injectables, Facial Treatments, Body Treatments, or Chemical Peels

#### **Available Location**
- Choose: Both Locations, London Only, or Edinburgh Only

#### **Hero Section** (Click to expand)
- **Tagline**: Small text above the title
- **Title**: Main headline displayed on the page
- **Subtitle**: Text below the title
- **Description**: Rich text editor for the main description
- **Background Image**: Path to the hero image

#### **Treatment Information** (Click to expand)
- **Duration**: How long the treatment takes
- **Results**: When to expect results
- **Price**: Starting price
- **Benefits**: List of treatment benefits (click + to add more)

#### **Page Content** (Click to expand)
- Additional content sections for the treatment page

#### **Translations** (Click to expand)
- Chinese (Simplified), Chinese (Traditional), and Arabic translations

### Step 4: Save Your Changes
- Click the **"Save"** button at the bottom
- You'll see a green "Document updated!" notification
- Changes are immediately saved to the content files

## Important Notes

### Live Preview
- After saving, refresh the treatment page to see your changes live
- The TinaCMS-powered page for anti-wrinkle is at: `/procedures/injectables/anti-wrinkle-tina`

### Rich Text Editor
- The Description field supports formatting:
  - **Bold**, *Italic*, Underline
  - Links and images
  - Bullet points and numbered lists
  - Headings and quotes

### Images
- Images should be placed in the `frontend/public` folder
- Reference them with a path like: `/image-name.png`
- Current hero image: `/anti-wrinkle-hero-new.png`

### Best Practices
1. **Always save your work** - Click Save frequently
2. **Preview changes** - Refresh the live page to verify edits
3. **Keep text concise** - Hero sections work best with 1-3 sentences
4. **Use consistent formatting** - Match the style of existing content

## Collections Available

- **Treatments**: All treatment pages (injectables, facial, body, peels)
- **Team Members**: Doctor and practitioner profiles
- **Site Settings**: Global site configuration
- **Pages**: Other website pages
- **FAQs**: Frequently asked questions
- **Testimonials**: Client reviews and feedback

## Getting Help

If you encounter any issues:
1. Refresh the admin page
2. Check that you're logged in with the correct password
3. Verify your changes were saved (green notification appears)
4. Contact your developer if problems persist

## Technical Notes

- Content is stored in JSON files in `frontend/content/`
- Changes are automatically deployed to production
- TinaCMS runs in "local mode" for direct file editing
- All edits are version-controlled through Git
