# Beyond MediSpa - Complete GitHub to Vercel Deployment Pipeline

## Overview
Automatic deployment triggered by GitHub pushes, configured via vercel.json.

## Complete Deployment Workflow

1. **Developer Action**: Push code to GitHub repository
2. **Vercel Detection**: GitHub webhook triggers Vercel build
3. **Clone & Config**: Vercel clones repo and reads `vercel.json`
4. **Install Dependencies**: Runs `npm install` (installs from package.json)
5. **Build Command**: Runs `npm run build` → executes `vite build`
6. **Vite Build Process**:
   - Compiles TypeScript (5.8.3)
   - Bundles React components (19.0.0)
   - Processes TailwindCSS (4.1.3) with @tailwindcss/vite plugin
   - Optimizes CSS with LightningCSS (1.29.2)
   - Applies path aliases (@ → root, ~backend → ../backend)
   - Outputs to `dist/` directory (emptyOutDir: true)
7. **Build Output**: 659 KB JS (173 KB gzipped), 59 KB CSS, ~2.3s build time
8. **Deploy**: Vercel deploys `dist/` contents
9. **SPA Configuration**: All routes rewritten to /index.html (React Router handles routing)
10. **Security Headers Applied**:
    - X-Frame-Options: DENY
    - X-Content-Type-Options: nosniff
    - X-XSS-Protection: 1; mode=block
    - Referrer-Policy: strict-origin-when-cross-origin
11. **Caching Headers Applied**:
    - Assets/media: public, max-age=31536000, immutable (1 year)
    - HTML: no-cache, no-store, must-revalidate
12. **Go Live**: Site accessible at production URL
13. **Continuous Deployment**: Every push to main triggers automatic rebuild

## Key Configuration Files

### vercel.json
- Build command: `npm run build`
- Output directory: `dist`
- Framework: null (manual configuration)
- SPA rewrite: `/(.*) → /index.html`
- Security & caching headers

### package.json
- Build script: `vite build`
- Package manager: bun (preferred locally)
- React 19.0.0, Vite 6.2.5, TypeScript 5.8.3
- TailwindCSS 4.1.3 with Vite plugin

### vite.config.ts
- Base path: `process.env.VITE_BASE_PATH || '/'`
- Path aliases: @, ~backend/client, ~backend
- Plugins: tailwindcss(), react()
- Output: dist/ (clean on build)

## Build Performance
- Total assets: 150+ files (~500+ MB)
- JS bundle: 659 KB (173 KB gzipped)
- CSS bundle: 59 KB
- Build time: ~2.3 seconds
- Build tool: Vite 6.2.5

## Deployment Methods
- **Method A**: Vercel CLI (`vercel --prod`)
- **Method B**: Git-based (push to GitHub - AUTOMATIC)
- **Method C**: GitHub Actions (CI/CD pipeline)

Method B is the primary deployment method for this project.