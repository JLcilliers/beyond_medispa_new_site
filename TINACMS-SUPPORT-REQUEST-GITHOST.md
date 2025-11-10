# TinaCMS Support Request - Githost Enterprise Feature Blocking Free Tier Project Creation

**Date:** November 10, 2025
**Priority:** URGENT - Production Site Down
**Issue:** Free tier account blocked from creating projects due to enterprise githost feature requirement

---

## Issue Summary

After deleting a TinaCMS project, we are now unable to create a new project because the UI is trying to use an enterprise-only "githost" feature that returns:

```
403 Forbidden
{"message": "githost feature requires enterprise access"}
```

**This is blocking project creation on a FREE TIER account**, which should support 1 project according to the pricing page.

---

## Root Cause (Verified)

We discovered the exact root cause by inspecting the API calls:

**Failing API Call:**
```
GET https://identity-v2.tinajs.io/v2/organizations/a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4/githosts
Response: 403 Forbidden
Body: {"message": "githost feature requires enterprise access"}
```

**This API call is made by the project creation UI** and when it fails, the "Create Project" button remains disabled, preventing any project creation.

---

## Account Details

**Organization ID:** `a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4`
**Organization Name:** Johan Cilliers's Organization
**Account Tier:** FREE (should allow 1 project)
**Repository:** https://github.com/JLcilliers/beyond_medispa_new_site
**GitHub App:** Installed and working (verified at github.com/settings/installations/93014827)

---

## What We've Verified

✅ **GitHub App has correct permissions:**
- Read/Write access to code, pull requests, and repository hooks
- Repository `beyond_medispa_new_site` is selected
- No errors in GitHub App installation

✅ **Authentication works correctly:**
- Can log in to TinaCMS Cloud
- Can authenticate with GitHub
- Can see repository list
- Can select repository

✅ **Other API calls work:**
- `GET /v2/organizations/{org_id}/apps` => 200 OK
- `GET /v2/organizations` => 200 OK
- `GET /v2/users/{user_id}` => 200 OK

❌ **Only githosts API fails:**
- `GET /v2/organizations/{org_id}/githosts` => 403 Forbidden
- Error message: "githost feature requires enterprise access"

---

## Why This Is a Bug

According to TinaCMS pricing (https://tina.io/pricing):

**Free Tier Includes:**
- 1 project
- 2 users
- 2 roles
- Community support

**We should be able to create a project on the free tier**, but the UI is requiring an enterprise feature that shouldn't be necessary for basic project creation.

**This appears to be one of these scenarios:**

1. **Bug in Project Creation UI:** The UI is incorrectly checking the githosts API when it's not actually required for basic GitHub integration
2. **Account Misconfiguration:** Our organization was somehow flagged as requiring enterprise features after deleting the previous project
3. **Regression:** A recent change to TinaCMS Cloud broke free tier project creation

---

## Timeline

**November 8, 2025:**
- Original project had stuck reindex processes
- Filed support request (no response received)

**November 10, 2025:**
- Decided to delete and recreate project as fastest solution
- Successfully deleted old project (cac767d8-5cac-4e55-bd7a-f5d756fc7f51)
- Attempted to create new project
- Discovered 403 githost error blocking creation

**Current Status:**
- Production site down for 3 days
- Cannot create new TinaCMS project
- Blocked by enterprise feature requirement on free tier account

---

## Request for TinaCMS Team

### Immediate Action Needed

**Option 1: Enable Project Creation (Preferred)**
Please either:
- Remove the githost API check from the free tier project creation flow, OR
- Grant our organization temporary access to the githost feature, OR
- Create the project manually on our behalf

**Option 2: Fix Organization State**
If our organization is misconfigured:
- Reset our organization's feature flags to free tier defaults
- Clear any enterprise requirements
- Allow normal project creation

**Option 3: Provide Workaround**
If there's a way to create projects without the githosts API:
- Provide alternative project creation method
- Share API endpoint we can call directly
- Any manual process to bypass the UI validation

---

## Technical Evidence

### Network Request Log

```
✅ GET https://identity-v2.tinajs.io/v2/organizations => 200 OK
✅ GET https://identity-v2.tinajs.io/v2/organizations/a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4 => 200 OK
✅ GET https://identity-v2.tinajs.io/v2/organizations/a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4/apps => 200 OK
❌ GET https://identity-v2.tinajs.io/v2/organizations/a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4/githosts => 403 Forbidden
```

### JavaScript Console Test

We verified the issue directly in browser console:

```javascript
const idToken = localStorage.getItem('CognitoIdentityServiceProvider.5b8fmhv1g35kbuh83vdbaudrnh.GitHub_219521194.idToken');
const orgId = 'a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4';

const response = await fetch(`https://identity-v2.tinajs.io/v2/organizations/${orgId}/githosts`, {
  headers: { 'Authorization': `Bearer ${idToken}` }
});

console.log(response.status); // 403
console.log(await response.json()); // {"message": "githost feature requires enterprise access"}
```

### Browser State

- Browser: Chrome 141.0.7390.125
- Console Error: `Failed to load resource: the server responded with a status of 403 () @ https://identity-v2.tinajs.io/v2/organizations/a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4/githosts`
- Create Project Button: Disabled (due to failed validation)

---

## Impact Assessment

### Business Impact
- **Production site non-functional for 3 days** (since November 8)
- Beyond MediSpa - medical aesthetics clinic
- 43 treatment pages not editable
- SEO implementation completely blocked
- Client cannot update website content

### User Impact
- Site administrator (Johan Cilliers) cannot access admin interface
- Content editing completely blocked
- New SEO features cannot be used

### Technical Impact
- Stuck in project creation loop
- Cannot proceed with any TinaCMS Cloud features
- All development and content work blocked

---

## What We Need

1. **Immediate Fix:** Enable project creation for our free tier organization
2. **Explanation:** Why is githosts API required for basic project creation?
3. **Prevention:** How to avoid this in the future?
4. **Timeline:** When can we expect project creation to work?

---

## Contact Information

**Organization Owner:** Johan Cilliers
**Email:** [Available on Discord]
**GitHub:** JLcilliers
**Repository:** https://github.com/JLcilliers/beyond_medispa_new_site

**Availability:**
- Ready to provide additional information immediately
- Can join Discord voice chat if needed
- Can provide screenshots, console logs, or any debugging info
- Willing to test any fixes or workarounds

---

## Discord Support Request

**Where to Post:**
TinaCMS Discord: https://discord.com/invite/zumN63Ybpf
Channel: #help

**Message to Post:**

```
🚨 URGENT: Free tier account blocked from creating projects due to enterprise githost requirement

After deleting my old project, I cannot create a new project because the UI requires the "githost" feature which returns:
403 Forbidden: "githost feature requires enterprise access"

Organization ID: a43c83f6-7b4f-4ce8-b3e2-9c054232d8a4
Account Tier: FREE (should allow 1 project per pricing page)
Issue: GET /v2/organizations/{org_id}/githosts => 403

This appears to be a bug in the project creation flow - why would a free tier account need an enterprise-only feature to create a basic project?

Production site has been down for 3 days. Need urgent help.

Full details: [Link to this document]
```

---

## Alternative Solutions We've Tried

1. ✅ Verified GitHub App permissions - all correct
2. ✅ Re-authenticated with GitHub multiple times
3. ✅ Tried different browsers/cache clearing
4. ✅ Waited for cache expiration
5. ❌ Tried to call API directly - blocked by CORS
6. ❌ Tried to bypass UI validation - API requires githosts check
7. ❌ Tried to find alternative creation flow - none exists

**Conclusion:** This requires TinaCMS backend team intervention

---

## Suggested Fix (For TinaCMS Team)

The project creation UI should:

1. **Skip githosts API call for free tier accounts**, OR
2. **Make githosts API call optional** (continue if it returns 403), OR
3. **Return different error** explaining upgrade requirement, OR
4. **Provide alternative flow** for free tier users

The current behavior blocks all project creation for free tier users after deleting a project, which seems unintentional.

---

**Created:** November 10, 2025
**Last Updated:** November 10, 2025
**Status:** AWAITING TINACMS SUPPORT RESPONSE
