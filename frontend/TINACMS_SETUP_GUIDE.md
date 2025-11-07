# TinaCMS Setup & Usage Guide for Beyond MediSpa

## What is TinaCMS?

TinaCMS is a **visual content editor** that allows you to edit your website content through a user-friendly interface **without touching any code**. All changes you make will automatically be saved to GitHub and deployed to your live website.

---

## 🚀 ONE-TIME SETUP (For Developer)

### Step 1: Create a Tina Cloud Account

1. Go to https://app.tina.io
2. Click **"Sign Up"**
3. Sign up with your **GitHub account** (the one that has access to this repository)
4. Click **"Authorize TinaCMS"** when prompted

### Step 2: Create a New Project

1. Once logged in, click **"Create a New Project"**
2. Choose **"Existing Site"**
3. Select your GitHub repository: **`Beyond MediSpa New Site`**
4. Click **"Continue"**

### Step 3: Get Your Credentials

After creating the project, you'll see two important values:

- **Client ID**: Something like `a1b2c3d4-5678-90ab-cdef-1234567890ab`
- **Read-Only Token**: A long string of characters

### Step 4: Add Credentials to Your Project

1. Open the file: `frontend/.env.local`
2. Replace the placeholder values:

```env
VITE_TINA_CLIENT_ID=paste_your_client_id_here
VITE_TINA_TOKEN=paste_your_token_here
GITHUB_BRANCH=main
```

3. Save the file

### Step 5: Add Credentials to Vercel (for Production)

1. Go to https://vercel.com
2. Select your **Beyond MediSpa** project
3. Go to **Settings** → **Environment Variables**
4. Add these three variables:
   - Name: `VITE_TINA_CLIENT_ID`, Value: `your_client_id`
   - Name: `VITE_TINA_TOKEN`, Value: `your_token`
   - Name: `GITHUB_BRANCH`, Value: `main`
5. Click **Save**
6. Redeploy your site

### Step 6: Build and Test

```bash
cd frontend
npm run dev
```

Visit: http://localhost:4001/admin

You should see the TinaCMS admin interface!

---

## 📝 HOW TO USE TINACMS (For Non-Technical Client)

### Logging In

1. Visit your website
2. Add `/admin` to the end of your URL
   - Example: `https://yourdomain.com/admin`
3. You'll be prompted to log in with GitHub (one-time setup)
4. Click **"Authorize"** to give TinaCMS permission

### Editing Content

Once logged in, you'll see the **TinaCMS Dashboard** with these sections:

---

#### 📋 **1. Treatments** (Edit Treatment Pages)

**To edit an existing treatment:**

1. Click **"Treatments"** in the left sidebar
2. Click on the treatment you want to edit (e.g., "Anti-Wrinkle Injections")
3. Edit the fields:
   - **Treatment Name**: The main title
   - **Category**: Injectable, Facial, Body, or Peels
   - **Available Location**: Both, London Only, or Edinburgh Only
   - **Hero Section**:
     - **Tagline**: Small text above title (e.g., "WRINKLE REDUCTION")
     - **Title**: Main heading
     - **Subtitle**: Subheading
     - **Description**: Main paragraph
     - **Background Image**: Click to upload a new image
   - **Treatment Information**:
     - **Duration**: How long the treatment takes
     - **Results Timeline**: When to expect results
     - **Price**: Cost of treatment
     - **Benefits**: List of benefits (click "+ Add Item" to add more)
   - **Translations**: Edit Chinese and Arabic versions

4. Click **"Save"** (top right)
5. Your changes will be committed to GitHub and deployed automatically!

**To create a new treatment:**

1. Click **"Treatments"** in the left sidebar
2. Click **"Create New"** button
3. Fill in all the fields
4. Click **"Save"**

---

#### 👥 **2. Team Members** (Edit Doctor/Staff Profiles)

**To edit an existing team member:**

1. Click **"Team Members"** in the left sidebar
2. Click on the team member you want to edit
3. Edit the fields:
   - **Full Name**
   - **Job Title**
   - **Profile Photo**: Click to upload a new photo
   - **Specialty**: List of specialties (e.g., "Dermal fillers")
   - **Qualifications**: Degrees and certifications
   - **Biography**: Full bio text
   - **Years of Experience**
   - **Languages Spoken**
   - **Primary Location**: London, Edinburgh, or Both

4. Click **"Save"**

**To add a new team member:**

1. Click **"Team Members"** → **"Create New"**
2. Fill in all fields
3. Upload their profile photo
4. Click **"Save"**

---

#### ⚙️ **3. Site Settings** (Edit Contact Info & Social Media)

1. Click **"Site Settings"** in the left sidebar
2. Click on **"site-settings"**
3. Edit:
   - **London Contact**:
     - Phone number
     - Email
     - Address
     - Opening hours
   - **Edinburgh Contact**:
     - Phone number
     - Email
     - Address
     - Opening hours
   - **Social Media**:
     - Instagram URL
     - Facebook URL
     - YouTube URL
     - WhatsApp number
   - **Booking URL**: Link to booking system

4. Click **"Save"**

---

#### ❓ **4. FAQs** (Edit Frequently Asked Questions)

**To edit an existing FAQ:**

1. Click **"FAQs"** in the left sidebar
2. Click on the question you want to edit
3. Edit:
   - **Question**: The question text
   - **Answer**: The answer text
   - **Category**: General, Treatments, Booking, or Pricing

4. Click **"Save"**

**To add a new FAQ:**

1. Click **"FAQs"** → **"Create New"**
2. Enter the question and answer
3. Select a category
4. Click **"Save"**

---

#### ⭐ **5. Testimonials** (Edit Customer Reviews)

**To edit an existing testimonial:**

1. Click **"Testimonials"** in the left sidebar
2. Click on the testimonial
3. Edit:
   - **Client Name**
   - **Rating**: 1-5 stars
   - **Testimonial**: The review text
   - **Treatment Received**: Which treatment they had
   - **Location**: London or Edinburgh
   - **Show on Homepage**: Toggle to feature on homepage

4. Click **"Save"**

**To add a new testimonial:**

1. Click **"Testimonials"** → **"Create New"**
2. Fill in all fields
3. Toggle **"Show on Homepage"** if you want it featured
4. Click **"Save"**

---

### Uploading Images

When you see an image field:

1. Click the **"Upload"** button or drag & drop an image
2. Supported formats: **JPG, PNG, WEBP**
3. Recommended size: **1920x1080 pixels** for hero images, **800x800 pixels** for team photos
4. Images are automatically optimized

---

### Previewing Changes

Before saving:

1. You can see a **live preview** of your changes in the right panel
2. Make sure everything looks good
3. Then click **"Save"** to publish

---

### Publishing Changes

When you click **"Save"**:

1. TinaCMS commits your changes to GitHub
2. Vercel automatically detects the commit
3. Vercel builds and deploys your site (takes 2-3 minutes)
4. Your changes are live!

---

## 🔍 COMMON TASKS

### How to Change Treatment Pricing

1. Go to **Treatments** → Select the treatment
2. Scroll to **"Treatment Information"**
3. Edit the **"Price"** field
4. Click **"Save"**

### How to Update Contact Phone Numbers

1. Go to **Site Settings** → **"site-settings"**
2. Find **"London Contact"** or **"Edinburgh Contact"**
3. Update the **"Phone"** field
4. Click **"Save"**

### How to Add a New Team Member Photo

1. Go to **Team Members** → Select the team member
2. Click on the **"Profile Photo"** field
3. Click **"Upload"** or drag & drop the new photo
4. Click **"Save"**

### How to Change Social Media Links

1. Go to **Site Settings** → **"site-settings"**
2. Scroll to **"Social Media"**
3. Update the URL fields
4. Click **"Save"**

### How to Feature a Testimonial on Homepage

1. Go to **Testimonials** → Select the testimonial
2. Toggle **"Show on Homepage"** to ON
3. Click **"Save"**

---

## ⚠️ IMPORTANT NOTES

### What You CAN Edit:
✅ All text content (treatment descriptions, bios, FAQs)
✅ Prices and treatment information
✅ Contact details and social media links
✅ Images (team photos, treatment images)
✅ Testimonials and reviews
✅ Team member profiles

### What You CANNOT Edit (Requires Developer):
❌ Website layout and design
❌ Navigation menu structure
❌ Page templates
❌ Adding new page types

### Best Practices:
- ✏️ **Save frequently** - Changes are only published when you click "Save"
- 📸 **Use high-quality images** - Blurry images will look bad on the site
- 📱 **Preview on mobile** - Check how your changes look on different devices
- 🔙 **Git history** - All changes are tracked, so you can revert if needed

---

## 🆘 TROUBLESHOOTING

### "Unauthorized" Error
**Problem**: You see an "Unauthorized" or "401" error
**Solution**:
- Make sure you're logged in with the correct GitHub account
- Check that your Client ID and Token are correct in `.env.local` and Vercel

### Changes Not Showing Up
**Problem**: I saved my changes but don't see them on the live site
**Solution**:
- Wait 2-3 minutes for Vercel to rebuild and deploy
- Check the Vercel dashboard to see if the deployment succeeded
- Clear your browser cache and refresh

### Can't Upload Images
**Problem**: Image upload fails
**Solution**:
- Check image size (should be under 10MB)
- Make sure it's a JPG, PNG, or WEBP file
- Try resizing the image first

### Admin Page Shows Error
**Problem**: `/admin` page shows an error
**Solution**:
- Make sure you've completed the one-time setup
- Check that environment variables are set correctly
- Try clearing browser cache and cookies

---

## 📞 GETTING HELP

If you need help:

1. **Check this guide first** - Most common tasks are covered above
2. **Check Vercel deployment logs** - See if there were any build errors
3. **Contact your developer** - For technical issues or feature requests
4. **TinaCMS Documentation** - https://tina.io/docs/

---

## 🔐 SECURITY

- Only users with access to your GitHub repository can edit content
- All changes are tracked in Git history
- You can revert to previous versions at any time
- Environment variables (Client ID and Token) should NEVER be shared publicly

---

## 📚 CONTENT ORGANIZATION

Your content is organized in the `frontend/content/` directory:

```
content/
├── treatments/          # All treatment pages
│   ├── anti-wrinkle.json
│   ├── hydrafacial.json
│   └── ...
├── team/                # Team member profiles
│   ├── dr-sana-sadiq.json
│   └── ...
├── settings/            # Site-wide settings
│   └── site-settings.json
├── faqs/                # FAQ entries
│   └── ...
└── testimonials/        # Customer testimonials
    └── ...
```

Each `.json` file is a single piece of content (e.g., one treatment, one team member).

---

## 🎓 WHAT'S NEXT?

1. **Complete the one-time setup** (Steps 1-6 above)
2. **Log into `/admin` and explore** the interface
3. **Try editing a treatment** - Change some text and save
4. **Watch it deploy** - See your changes go live!
5. **Train your team** - Share this guide with anyone who needs to edit content

---

## 📊 MULTI-LANGUAGE SUPPORT

Each treatment has translation fields for:
- **Simplified Chinese** (zh-CN)
- **Traditional Chinese** (zh-TW)
- **Arabic** (ar)

When editing a treatment, scroll down to the **"Translations"** section and fill in the translated versions of the title and description.

---

**That's it! You now have full control over your website content without needing to touch any code.** 🎉

For questions or issues, contact your developer or consult the TinaCMS documentation at https://tina.io/docs/
