# Vercel Environment Variables Setup for TinaCMS

## Current Issue
The TinaCMS admin interface at `/admin` shows "refused to connect" because environment variables are missing from Vercel.

## Required Environment Variables

Add these to **Vercel Dashboard → Settings → Environment Variables**:

### 1. VITE_TINA_CLIENT_ID
```
cac767d8-5cac-4e55-bd7a-f5d756fc7f51
```
- **Scope**: Production, Preview, Development
- **Purpose**: TinaCMS client identifier for authentication

### 2. VITE_TINA_TOKEN
```
868139fe39e0668f38f75d9db17ef4b020456826
```
- **Scope**: Production, Preview, Development
- **Purpose**: Read-only token for content access

### 3. VITE_TINA_SEARCH_TOKEN
```
f9dbb7a8b957616a755a785ca22f635bef8c2870
```
- **Scope**: Production, Preview, Development
- **Purpose**: Token for TinaCMS search functionality

## Steps to Add Variables

1. Visit: https://vercel.com/[your-account]/[your-project]/settings/environment-variables
2. For each variable above:
   - Click **"Add New"**
   - Name: (copy the variable name exactly, e.g., `VITE_TINA_CLIENT_ID`)
   - Value: (copy the value exactly)
   - Environment: Select **Production**, **Preview**, and **Development**
   - Click **"Save"**
3. After adding all three variables, trigger a redeploy:
   - Go to **Deployments** tab
   - Click the three dots (...) next to the latest deployment
   - Select **"Redeploy"**

## Verification

After redeployment completes:
1. Visit: https://www.beyondmedispa.com/admin
2. You should see the TinaCMS login screen with "Log in" button
3. Click "Log in" - should redirect to TinaCloud authentication
4. After logging in, you should see your content collections:
   - Treatments
   - Team Members
   - Site Settings
   - Pages
   - FAQs
   - Testimonials

## Why This Is Needed

Vite requires environment variables to be prefixed with `VITE_` to be exposed to the browser at build time. These variables are embedded into the JavaScript bundle during the build process.

Without these variables in Vercel:
- ❌ Admin interface can't authenticate with TinaCloud
- ❌ Content cannot be loaded or edited
- ❌ Connection to TinaCloud API fails

With these variables in Vercel:
- ✅ Admin interface connects to TinaCloud
- ✅ Authentication works properly
- ✅ Content can be edited and saved
- ✅ Changes automatically commit to GitHub

## Security Note

These tokens are:
- Read-only tokens (safe for client-side use)
- Specific to your TinaCloud project
- Required for the admin interface to function
- Already configured in your local `.env.local` file
