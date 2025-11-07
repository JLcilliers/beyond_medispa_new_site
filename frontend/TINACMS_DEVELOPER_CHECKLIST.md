# TinaCMS Developer Setup Checklist

## ✅ Setup Checklist

### Phase 1: Tina Cloud Setup (10 minutes)

- [ ] 1. Go to https://app.tina.io
- [ ] 2. Sign up with your GitHub account (the one with repo access)
- [ ] 3. Click "Create a New Project"
- [ ] 4. Select "Existing Site"
- [ ] 5. Choose the "Beyond MediSpa New Site" repository
- [ ] 6. Copy the **Client ID**
- [ ] 7. Copy the **Read-Only Token**

### Phase 2: Local Environment Setup (5 minutes)

- [ ] 8. Open `frontend/.env.local`
- [ ] 9. Replace `your_client_id_here` with actual Client ID
- [ ] 10. Replace `your_token_here` with actual Read-Only Token
- [ ] 11. Save the file

### Phase 3: Vercel Environment Variables (5 minutes)

- [ ] 12. Go to https://vercel.com
- [ ] 13. Open your Beyond MediSpa project
- [ ] 14. Go to Settings → Environment Variables
- [ ] 15. Add `VITE_TINA_CLIENT_ID` = your client ID
- [ ] 16. Add `VITE_TINA_TOKEN` = your token
- [ ] 17. Add `GITHUB_BRANCH` = `main`
- [ ] 18. Save and redeploy

### Phase 4: Test Locally (5 minutes)

- [ ] 19. Run: `cd frontend`
- [ ] 20. Run: `npm run dev`
- [ ] 21. Visit: http://localhost:4001/admin
- [ ] 22. Verify TinaCMS loads without errors
- [ ] 23. Try editing a treatment and saving

### Phase 5: Test Production (5 minutes)

- [ ] 24. Push changes to GitHub: `git push`
- [ ] 25. Wait for Vercel deployment to complete
- [ ] 26. Visit: https://yourdomain.com/admin
- [ ] 27. Log in and verify everything works
- [ ] 28. Test editing content and saving

### Phase 6: Client Onboarding (15 minutes)

- [ ] 29. Add client as collaborator on GitHub repository
- [ ] 30. Send client the `TINACMS_SETUP_GUIDE.md` file
- [ ] 31. Walk them through first login at `/admin`
- [ ] 32. Show them how to edit a treatment
- [ ] 33. Show them how to upload an image
- [ ] 34. Have them make a test edit and save
- [ ] 35. Verify their changes deployed successfully

---

## 🔧 Technical Details

### What Was Installed

```json
"dependencies": {
  "tinacms": "^2.9.1",
  "@tinacms/cli": "^1.12.0"
}
```

### File Structure Created

```
frontend/
├── tina/
│   ├── config.ts                    # TinaCMS configuration
│   └── __generated__/               # Auto-generated (git-ignored)
├── content/
│   ├── treatments/                  # Treatment JSON files
│   ├── team/                        # Team member JSON files
│   ├── settings/                    # Site settings JSON
│   ├── faqs/                        # FAQ JSON files
│   └── testimonials/                # Testimonial JSON files
├── components/pages/
│   └── TinaCMSAdmin.tsx            # Admin page component
├── contexts/
│   └── TinaCMSProvider.tsx         # TinaCMS context wrapper
├── .env.local                       # Local environment variables (git-ignored)
├── .env.example                     # Example env vars
├── TINACMS_SETUP_GUIDE.md          # Client documentation
├── TINACMS_QUICK_REFERENCE.md      # Quick reference guide
└── TINACMS_DEVELOPER_CHECKLIST.md  # This file
```

### Routes Added

- `/admin` - TinaCMS admin interface (requires GitHub auth)

### Scripts Updated

```json
"scripts": {
  "dev": "tinacms dev -c \"vite\"",      // Run TinaCMS + Vite
  "dev:client": "vite",                   // Run Vite only
  "build": "tinacms build && vite build", // Build TinaCMS + app
  "preview": "vite preview"
}
```

---

## 📊 Content Schema Overview

### Collections Created

1. **Treatments**
   - Fields: title, category, location, hero, treatmentInfo, translations
   - Path: `content/treatments/*.json`
   - URL format: `/procedures/{filename}`

2. **Team Members**
   - Fields: name, title, image, specialty, qualifications, bio, yearsExperience, languages, location
   - Path: `content/team/*.json`

3. **Site Settings**
   - Fields: contact (London/Edinburgh), social media, bookingUrl
   - Path: `content/settings/site-settings.json`
   - Single file (can't create/delete)

4. **FAQs**
   - Fields: question, answer, category
   - Path: `content/faqs/*.json`

5. **Testimonials**
   - Fields: name, rating, content, treatment, location, featured
   - Path: `content/testimonials/*.json`

---

## 🔄 Migration Path (Optional)

Currently, content exists in two places:
1. **Old**: `frontend/locales/translations.ts` (hardcoded)
2. **New**: `frontend/content/**/*.json` (TinaCMS managed)

### Option A: Gradual Migration (Recommended)
- Keep existing pages using `translations.ts`
- New content uses TinaCMS
- Migrate page-by-page as needed

### Option B: Full Migration
- Write script to convert `translations.ts` → JSON files
- Update all components to read from TinaCMS
- Retire `translations.ts`

**For now**: Sample content created in `content/` directory. Client can start adding new content via TinaCMS.

---

## 🎯 What's Editable Now

✅ **Via TinaCMS:**
- Sample anti-wrinkle treatment
- Sample team member (Dr. Sana Sadiq)
- Sample FAQ
- Sample testimonial
- Site settings (contact info, social media)

❌ **Still Hardcoded** (requires migration):
- All other treatment pages (43 remaining)
- Other team members
- Navigation menu
- Homepage sections
- All other FAQs and testimonials

---

## 🚀 Next Steps for Full Migration

If you want to fully migrate all content to TinaCMS:

### Step 1: Create Migration Script
```bash
# Script to convert translations.ts → JSON files
npm run migrate-content
```

### Step 2: Update Components
- Modify treatment pages to use `useTina()` hook
- Update team page to read from `content/team/`
- Update testimonials section to read from `content/testimonials/`

### Step 3: Create Data Fetching Utilities
```typescript
// utils/tinaContent.ts
export async function getAllTreatments() {
  // Fetch all treatments from Tina
}

export async function getTeamMembers() {
  // Fetch all team members from Tina
}
```

### Step 4: Update Pages
```tsx
// Example: Updated treatment page
import { useTina } from 'tinacms/dist/react';

function TreatmentPage({ data }) {
  const { data: tinaData } = useTina({ query, variables, data });

  return (
    <div>
      <h1>{tinaData.treatment.title}</h1>
      <p>{tinaData.treatment.hero.description}</p>
    </div>
  );
}
```

---

## 🔒 Security Notes

- `.env.local` is git-ignored (never commit credentials!)
- Only GitHub collaborators can access `/admin`
- All content changes tracked in Git history
- Vercel environment variables are encrypted

---

## 📞 Support Resources

- **TinaCMS Docs**: https://tina.io/docs/
- **TinaCMS Discord**: https://discord.com/invite/zumN63Ybpf
- **GitHub Issues**: https://github.com/tinacms/tinacms/issues

---

## ⏱️ Time Estimate

- **Total setup time**: ~30 minutes
- **Client onboarding**: ~15 minutes
- **Full content migration** (optional): ~4-6 hours

---

**Status**: ✅ TinaCMS is installed and configured. Complete checklist above to go live!
