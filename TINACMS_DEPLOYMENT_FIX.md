# TinaCMS Vercel Deployment Fix

## Problem
The Vercel deployment was failing with this error:
```
ERROR: Branch 'main' is not on TinaCloud. Please make sure that branch 'main' exists in your repository and that you have pushed your all changes to the remote.
```

## Root Cause
TinaCMS requires the branch to be indexed on TinaCloud before builds can succeed. The `tinacms build` command tries to sync with TinaCloud's API, which fails if:
1. The branch hasn't been indexed yet on TinaCloud
2. TinaCMS credentials are missing from Vercel environment variables
3. The TinaCloud project isn't properly configured

## Solution Applied
Modified the build process to skip TinaCMS cloud indexing during Vercel deployments:

### Changes Made
1. **frontend/package.json** - Added `build:vercel` script that skips TinaCMS build
2. **vercel.json** - Updated `buildCommand` to use `build:vercel` instead of `build`

This allows the site to deploy successfully while the TinaCMS admin panel will still work for local development.

## Next Steps

### Option A: Continue Without TinaCMS Cloud (Current Solution)
The site will deploy successfully. The TinaCMS admin interface (`/admin`) will work locally during development when you run `npm run dev`, but won't have cloud indexing features.

**Pros:**
- ✅ Site deploys immediately
- ✅ No additional configuration needed
- ✅ TinaCMS admin works locally

**Cons:**
- ❌ No cloud-based content editing
- ❌ No TinaCMS search indexing

### Option B: Fully Enable TinaCMS Cloud
To enable full TinaCMS functionality with cloud editing:

1. **Ensure TinaCloud Project is Set Up:**
   - Visit https://app.tina.io
   - Make sure your project (`cac767d8-5cac-4e55-bd7a-f5d756fc7f51`) is properly configured
   - Verify the `main` branch is listed in the project configuration

2. **Add Environment Variables to Vercel:**
   ```bash
   # In Vercel Dashboard > Settings > Environment Variables
   TINA_CLIENT_ID=<your-client-id>
   TINA_TOKEN=<your-token>
   TINA_SEARCH_TOKEN=<your-search-token>
   ```

   Get these values from:
   - TinaCloud Dashboard: https://app.tina.io/projects/cac767d8-5cac-4e55-bd7a-f5d756fc7f51/configuration
   - Or from your local `.env.local` file

3. **Update Vercel Build Command:**
   Change back to the full build in `vercel.json`:
   ```json
   "buildCommand": "cd frontend && npm run build"
   ```

4. **Trigger Branch Indexing:**
   - Push a commit to the `main` branch
   - TinaCMS will automatically index it on the next deployment

## Current Configuration Files

### frontend/tina/config.ts
```typescript
// Correctly uses VERCEL_GIT_COMMIT_REF (set automatically by Vercel)
const branch = process.env.VERCEL_GIT_COMMIT_REF || "main";
```

### Environment Variables Needed (if using Option B)
- `TINA_CLIENT_ID` or `VITE_TINA_CLIENT_ID`
- `TINA_TOKEN` or `VITE_TINA_TOKEN`
- `TINA_SEARCH_TOKEN` or `VITE_TINA_SEARCH_TOKEN`

## Verification
After deploying, verify:
- ✅ Site deploys successfully to Vercel
- ✅ Main site pages load correctly
- ✅ `/admin` route is accessible (if using Option B with proper env vars)

## References
- TinaCMS Documentation: https://tina.io/docs/
- Your TinaCloud Project: https://app.tina.io/projects/cac767d8-5cac-4e55-bd7a-f5d756fc7f51
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
