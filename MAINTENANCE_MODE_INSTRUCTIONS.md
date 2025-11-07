# Maintenance Mode - QA Access Instructions

## Overview
The Beyond MediSpa website is now in maintenance mode. All visitors will see a maintenance page, but authorized users can access the full site for QA purposes.

## What's Been Implemented

### 1. **SEO Protection (No-Index)**
- Added `<meta name="robots" content="noindex, nofollow" />` to the site
- This prevents Google and other search engines from indexing any pages
- Location: `frontend/index.html:5`

### 2. **Maintenance Page**
- Professional maintenance page with Beyond MediSpa branding
- Shows contact information for both London and Edinburgh clinics
- Hidden login form for QA access
- Location: `frontend/components/pages/MaintenancePage.tsx`

### 3. **Authentication System**
- Simple password-based authentication for QA access
- Authentication state persists across browser sessions (using localStorage)
- Location: `frontend/contexts/AuthContext.tsx`

### 4. **Routing Protection**
- All 64+ routes are protected behind authentication
- Unauthenticated visitors see only the maintenance page
- Authenticated users see the full site
- Location: `frontend/App.tsx`

## QA Access Password

**Current Password:** `BeyondMediSpa2025!`

### How to Access the Site for QA

1. Visit the website (any page)
2. You'll see the maintenance page
3. Click on "Staff/QA Access" at the bottom of the page
4. Enter the password: `BeyondMediSpa2025!`
5. Click "Access Site"
6. You'll be redirected and can now access all pages

### How to Log Out

The authentication persists in localStorage. To log out:
- Clear your browser's localStorage for the site, or
- Open browser console and run: `localStorage.removeItem('qa_authenticated'); location.reload();`

## Changing the Password

To change the QA password:

1. Open `frontend/contexts/AuthContext.tsx`
2. Find line 12: `const QA_PASSWORD = 'BeyondMediSpa2025!';`
3. Change the password to your desired value
4. Save the file and redeploy

## Disabling Maintenance Mode (When Ready to Launch)

When you're ready to make the site public:

### Option 1: Remove Maintenance Mode Completely
1. Revert the changes to `frontend/App.tsx` to remove the authentication check
2. Remove the `<meta name="robots" content="noindex, nofollow" />` tag from `frontend/index.html`

### Option 2: Use Environment Variable (Recommended)
Create an environment-based toggle:

```typescript
// In AuthContext.tsx
const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

// In App.tsx
if (MAINTENANCE_MODE && !isAuthenticated) {
  return <MaintenancePage />;
}
```

Then add to `.env.production`:
```
VITE_MAINTENANCE_MODE=false
```

## Files Modified

1. `frontend/index.html` - Added noindex meta tag
2. `frontend/contexts/AuthContext.tsx` - New authentication context
3. `frontend/components/pages/MaintenancePage.tsx` - New maintenance page component
4. `frontend/App.tsx` - Modified to implement maintenance mode routing

## Testing Checklist

- [ ] Verify maintenance page appears when not authenticated
- [ ] Verify login works with correct password
- [ ] Verify login fails with incorrect password
- [ ] Verify all pages are accessible after authentication
- [ ] Verify authentication persists after page refresh
- [ ] Verify noindex tag is present in page source
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Verify contact information is correct on maintenance page

## Security Notes

⚠️ **Important Security Considerations:**

1. **Password Storage**: The current implementation stores the password in the client-side code. This is suitable for temporary QA access but should not be used for long-term production authentication.

2. **HTTPS**: Ensure the site is served over HTTPS to protect the password during transmission.

3. **Password Sharing**: Share the QA password only with authorized team members and clients.

4. **Temporary Use**: This maintenance mode is designed for temporary use during QA. For long-term access control, implement a proper backend authentication system.

## Support

If you need to modify any of these features or have questions, refer to the comments in the code files mentioned above.
