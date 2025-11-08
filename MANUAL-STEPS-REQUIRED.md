# Manual Steps Required to Complete Deployment

## Current Situation

All code changes are complete and pushed to GitHub. However, the TinaCMS Cloud index needs to be manually updated to recognize the new SEO schema fields.

## Why Manual Action is Needed

The build is failing with this error:
```
The local GraphQL schema doesn't match the remote GraphQL schema.
Reason: [NON_BREAKING - TYPE_ADDED] Type 'TreatmentHeroBackgroundImage' was added
```

This means TinaCMS Cloud has the old schema (from Nov 7) and needs to re-index to pick up our new SEO fields.

## STEP 1: Trigger TinaCMS Cloud Re-index

### Access the Configuration Page

1. Open your browser and navigate to:
   ```
   https://app.tina.io/projects/cac767d8-5cac-4e55-bd7a-f5d756fc7f51/configuration
   ```

2. Log in with your TinaCMS credentials if prompted

### Trigger the Re-index

3. Look for the "Branches" section on the configuration page

4. Find the `master` branch in the list

5. Click the **"Reindex"** button next to the `master` branch
   - This should be a button or link that says "Reindex" or has a refresh icon

6. Wait for the indexing to complete
   - You should see a progress indicator
   - The status should change from "indexing" to "complete"
   - This usually takes 30-60 seconds

### What to Expect

- ✅ **Success**: Status changes to "complete" with a green checkmark
- ❌ **Failure**: Status shows "failed" with an error message
  - If this happens, click on the error to see details
  - Common fix: Wait a minute and try the reindex button again

## STEP 2: Verify the Re-index Succeeded

### Check the Branch Status

1. On the same configuration page, verify:
   - `master` branch shows status: **"complete"**
   - Last indexed time is updated to current time (Nov 8, 2025)

2. Check the Event Log (if available on the page):
   - Should show "Indexing completed successfully" for `master`
   - No error messages

## STEP 3: Trigger Vercel Re-deployment

Once the TinaCMS re-index succeeds, we need to trigger a new Vercel deployment:

### Option A: Automatic (Vercel detects the change)

- Vercel may automatically detect the TinaCMS index update
- Wait 2-3 minutes and check your Vercel dashboard
- Look for a new deployment starting

### Option B: Manual Re-deploy (RECOMMENDED)

1. Go to your Vercel project dashboard
2. Navigate to the "Deployments" tab
3. Find the latest `master` branch deployment
4. Click the three dots menu (⋯) next to it
5. Click **"Redeploy"**
6. Select "Use existing Build Cache" or "Rebuild"
7. Click **"Redeploy"** to confirm

## STEP 4: Monitor the Vercel Build

1. Watch the build logs in Vercel
2. Look for the TinaCMS build phase
3. It should now say:
   ```
   ✅ Checking indexing process in TinaCloud...
   ✅ Schema matches remote
   ✅ Tina build complete
   ```

4. The entire build should complete successfully
5. Deployment should go live automatically

## STEP 5: Test the /admin Interface

Once deployment succeeds:

1. Navigate to: **https://www.beyondmedispa.com/admin**

2. Log in with your TinaCMS credentials

3. Click on "Treatments" in the sidebar

4. Open any treatment (e.g., "HydraFacial London")

5. **Look for these new sections:**
   - ✅ "SEO Settings" section (expandable)
     - Meta Title
     - Meta Description
     - URL Slug
     - Canonical URL
     - Keywords
     - Open Graph (title, description, image)

   - ✅ "Schema Markup (Advanced SEO)" section
     - Schema Type dropdown
     - Custom Schema JSON textarea

6. **Test editing:**
   - Expand "SEO Settings"
   - Add a test meta title
   - Click "Save"
   - Verify the data saves successfully

## STEP 6: Verify SEO on Frontend

1. Navigate to a treatment page:
   ```
   https://www.beyondmedispa.com/procedures/facial/hydrafacial-london
   ```

2. Right-click and select **"View Page Source"**

3. Search for these elements (Ctrl+F):
   - `<meta name="description"` - Should be present
   - `<meta property="og:title"` - Should be present
   - `<script type="application/ld+json"` - Should be present

4. **Test with Google Rich Results Test:**
   - Go to: https://search.google.com/test/rich-results
   - Paste your treatment page URL
   - Click "Test URL"
   - Should show valid MedicalBusiness and MedicalProcedure schemas

## If Something Goes Wrong

### Re-index Fails

**Error: "Failed to retrieve tina-lock.json"**
- This was the previous error - shouldn't happen now
- If it does: verify tina-lock.json exists in repository
- Check that the file has correct branch name (`master`)

**Error: "Schema validation failed"**
- Check tina/config.ts for syntax errors
- Verify all SEO field definitions are correct
- Review the error message for specific field that's failing

### Build Still Fails

**If Vercel build fails even after successful re-index:**

1. Check the exact error message in Vercel logs
2. Try clearing Vercel build cache:
   - In Vercel project settings → General
   - Scroll to "Build & Development Settings"
   - Check "Clear Build Cache"
3. Trigger another deployment

**Emergency Fallback:**

If nothing works, we can temporarily re-add `--skip-cloud-checks`:

```bash
# In frontend/package.json
"build": "tinacms build --skip-cloud-checks && vite build"
```

This will get the site deployed while we troubleshoot the cloud sync separately.

## Success Checklist

- [ ] TinaCMS Cloud shows `master` branch indexed successfully
- [ ] Latest indexed time shows today's date (Nov 8, 2025)
- [ ] Vercel deployment completes without errors
- [ ] Production site loads: https://www.beyondmedispa.com
- [ ] `/admin` interface loads and shows login screen
- [ ] After login, can see "Treatments" collection
- [ ] Opening a treatment shows new "SEO Settings" section
- [ ] Can edit and save SEO data
- [ ] Treatment pages show meta tags in source code
- [ ] Schema markup validates in Google Rich Results Test

## Contact Information

**TinaCMS Support:**
- Documentation: https://tina.io/docs
- Discord: https://discord.com/invite/zumN63Ybpf
- GitHub Issues: https://github.com/tinacms/tinacms/issues

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

---

**Current Time:** November 8, 2025 13:20 UTC
**Next Action:** Navigate to TinaCMS Cloud and click "Reindex" button for `master` branch
