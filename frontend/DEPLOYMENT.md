# Beyond MediSpa - Deployment Guide

## Build Status
✅ **Production build completed and verified**
- Build output: `dist/` directory
- Total files: 150+ files (~500+ MB)
- Bundle size: 659 KB JS (173 KB gzipped), 59 KB CSS
- All assets verified and present

## Prerequisites
- Node.js 18+ installed
- npm installed
- Production build completed: `npm run build`
- Build output in `dist/` directory

## Deployment Options

### Option 1: Netlify (Recommended for Quick Deployment)

#### Method A: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
cd frontend
netlify deploy --prod --dir=dist
```

#### Method B: Netlify Drag & Drop
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page
3. Site will be live immediately with a random URL
4. Configure custom domain in Netlify settings

#### Method C: Git-based Deployment
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Netlify will auto-detect settings from `netlify.toml`
4. Build and deployment happens automatically

**Configuration**: `netlify.toml` file is already created with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules
- Security headers
- Asset caching

---

### Option 2: Vercel

#### Method A: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
cd frontend
vercel --prod
```

#### Method B: Git-based Deployment
1. Push code to GitHub/GitLab/Bitbucket
2. Import project on https://vercel.com
3. Vercel will auto-detect settings from `vercel.json`
4. Deploy automatically

**Configuration**: `vercel.json` file is already created with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites
- Security headers
- Asset caching

---

### Option 3: Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
cd frontend
npx wrangler pages deploy dist
```

**Or via Dashboard:**
1. Go to Cloudflare Pages dashboard
2. Connect your Git repository
3. Set build command: `npm run build`
4. Set build output: `dist`
5. Deploy

---

### Option 4: AWS S3 + CloudFront

```bash
# Install AWS CLI
# Configure: aws configure

# Sync to S3 bucket
cd frontend
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache (if using CDN)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Setup Steps:**
1. Create S3 bucket with static website hosting
2. Set bucket policy for public read access
3. Create CloudFront distribution pointing to S3
4. Configure custom domain with Route 53
5. Request SSL certificate via AWS Certificate Manager

---

### Option 5: Traditional Web Server (Apache/Nginx)

#### For Apache:
1. Copy `.htaccess` file to `dist/` directory:
```bash
copy .htaccess dist\.htaccess
```

2. Upload `dist/` contents to web server via FTP/SFTP

3. Ensure Apache modules are enabled:
```apache
# Required modules
mod_rewrite
mod_headers
mod_expires
mod_deflate
```

#### For Nginx:
1. Copy contents of `dist/` to web root (e.g., `/var/www/beyondmedispa/dist`)

2. Update `nginx.conf.example` with your:
   - Domain name
   - SSL certificate paths
   - Root directory path

3. Copy to Nginx sites-available:
```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/beyondmedispa
sudo ln -s /etc/nginx/sites-available/beyondmedispa /etc/nginx/sites-enabled/
```

4. Test and reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

### Option 6: GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
cd frontend
npm run deploy
```

**Note**: Configure custom domain in repository settings if needed.

---

## Post-Deployment Checklist

### 1. Test All Routes
- [ ] Homepage: `/`
- [ ] About: `/about`
- [ ] Locations: `/locations`
- [ ] London: `/london`
- [ ] Edinburgh: `/edinburgh`
- [ ] Team: `/doctors`
- [ ] Contact: `/contact`
- [ ] Treatment pages: `/procedures/*`

### 2. Test Functionality
- [ ] Language switcher (EN, 中文, العربية)
- [ ] Navigation menus (London/Edinburgh treatments)
- [ ] Book Now button links to https://book.beyondmedispa.com
- [ ] Phone numbers are clickable
- [ ] Email addresses are clickable
- [ ] Google Maps embeds load correctly
- [ ] Get Directions links work
- [ ] Social media links work (Instagram, Facebook, YouTube)
- [ ] Footer links work (Privacy Policy, Terms & Conditions)

### 3. Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Images load progressively
- [ ] Video loads without blocking page
- [ ] No console errors in browser DevTools
- [ ] Mobile responsiveness check
- [ ] Test on different devices and browsers

### 4. SEO & Analytics
- [ ] Configure Google Analytics (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags in page source
- [ ] Check Open Graph tags for social sharing
- [ ] Verify canonical URLs

### 5. Security
- [ ] HTTPS is enforced (HTTP redirects to HTTPS)
- [ ] Security headers are present (check with securityheaders.com)
- [ ] No mixed content warnings
- [ ] SSL certificate is valid

### 6. Multi-language Testing
- [ ] Test all 4 languages: English, 中文简体, 中文繁體, العربية
- [ ] Verify language-specific content loads correctly
- [ ] Check language switcher persists across pages
- [ ] Verify pricing displays correctly in all languages

---

## Custom Domain Setup

### DNS Configuration
Add these DNS records (example for most providers):

**For root domain (beyondmedispa.com):**
```
Type: A
Name: @
Value: [Your hosting provider's IP or use CNAME if supported]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [Your hosting provider's domain]
```

**Platform-specific:**
- **Netlify**: Follow Netlify's custom domain setup in dashboard
- **Vercel**: Add domain in project settings, update nameservers
- **Cloudflare**: Automatic DNS management through Cloudflare
- **AWS**: Use Route 53 for DNS management

---

## SSL/HTTPS Setup

### Automatic (Recommended):
- **Netlify**: Automatic Let's Encrypt SSL
- **Vercel**: Automatic SSL
- **Cloudflare**: Automatic SSL

### Manual:
- Use **Let's Encrypt** (free): https://letsencrypt.org/
- Use **Certbot** for automatic certificate renewal
- Or purchase SSL certificate from CA

---

## Continuous Deployment (Optional)

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: cd frontend && npm install

      - name: Build
        run: cd frontend && npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './frontend/dist'
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Rollback Strategy

### Netlify/Vercel:
- Use platform's built-in rollback feature
- Click "Rollback" on previous deployment in dashboard

### Manual Deployments:
1. Keep previous `dist` folder backed up
2. Replace current deployment with backup
3. Clear CDN cache if applicable

### Git-based:
```bash
git revert HEAD
git push origin main
```

---

## Support & Troubleshooting

### Common Issues:

**404 errors on page refresh:**
- Ensure SPA redirect rules are configured
- Check `.htaccess` for Apache or Nginx config

**Images not loading:**
- Verify all files uploaded correctly
- Check file paths are correct (case-sensitive on Linux)
- Ensure proper MIME types are set

**Performance issues:**
- Enable gzip/brotli compression
- Configure CDN caching
- Consider image optimization service

**CORS errors:**
- Check API endpoints allow requests from your domain
- Verify booking system (book.beyondmedispa.com) CORS settings

---

## Contact Information

For deployment assistance or questions:
- Email: info@beyondmedispa.com
- Phone (London): 020 7201 8595
- Phone (Edinburgh): 0131 510 9380

---

## Build Information

- **Framework**: React 19.0.0
- **Build Tool**: Vite 6.4.1
- **Languages**: English, 中文简体, 中文繁體, العربية
- **Bundle Size**: 659 KB JS (173 KB gzipped), 59 KB CSS
- **Total Assets**: 150+ files (~500+ MB)
- **Build Time**: ~2.3 seconds
- **Build Date**: 2025-10-28

---

**Ready to Deploy!** Choose your preferred hosting platform above and follow the instructions.
