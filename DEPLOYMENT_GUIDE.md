# GitHub Pages Deployment Guide

## Overview
This repository is now configured to deploy to GitHub Pages with the custom domain **jamesdesign.me**.

## What's Been Configured

### 1. Static Export Configuration ✅
- Updated `next.config.js` with `output: 'export'` for static site generation
- Configured image optimization for static export
- Added trailing slashes for better routing compatibility

### 2. Custom Domain Setup ✅
- Created `public/CNAME` file with `jamesdesign.me`
- Added `.nojekyll` file to prevent Jekyll processing

### 3. GitHub Actions Workflow ✅
- Created `.github/workflows/deploy.yml` for automated deployment
- Workflow triggers on push to `main` branch and this feature branch
- Builds the Next.js app and deploys to GitHub Pages

### 4. Build Configuration ✅
- Tested build locally - successful ✓
- Static files exported to `out/` directory
- CNAME file correctly copied to output

## Next Steps for Deployment

### Step 1: Enable GitHub Pages (One-time setup)

1. Go to your repository settings: https://github.com/jamesthegreati/jamesthegreati.github.io/settings/pages

2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This allows the workflow to deploy automatically

### Step 2: Configure Custom Domain

1. In the same GitHub Pages settings page:
   - Under "Custom domain", the domain `jamesdesign.me` should already appear (from CNAME file)
   - If not, enter `jamesdesign.me` and click Save
   - Check "Enforce HTTPS" (recommended)

### Step 3: Configure DNS Records

You need to configure DNS records at your domain registrar (where you bought jamesdesign.me):

**Option A: Using CNAME (Recommended)**
Add a CNAME record:
```
Type: CNAME
Name: @ (or leave blank for root domain)
Value: jamesthegreati.github.io
```

**Option B: Using A Records**
Add the following A records:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

Also add a CNAME for www subdomain:
```
Type: CNAME
Name: www
Value: jamesthegreati.github.io
```

### Step 4: Merge This Branch

Once you're ready to deploy:

1. Merge this branch (`copilot/connect-jamesdesign-me`) to `main`:
   ```bash
   git checkout main
   git merge copilot/connect-jamesdesign-me
   git push origin main
   ```

2. Or create a Pull Request and merge via GitHub UI

### Step 5: Monitor Deployment

1. After merging to `main`, the GitHub Actions workflow will automatically run
2. Monitor the deployment: https://github.com/jamesthegreati/jamesthegreati.github.io/actions
3. Once complete, your site will be live at https://jamesdesign.me

## Testing on This Branch

The workflow is configured to also run on the `copilot/connect-jamesdesign-me` branch, so you can test the deployment before merging to main. After the workflow runs, you can verify the build succeeded.

## Verification

Once deployed, verify:
- [ ] Site loads at https://jamesdesign.me
- [ ] Site loads at https://www.jamesdesign.me (if www CNAME configured)
- [ ] HTTPS is working (green padlock)
- [ ] All pages work correctly (/, /web-design, /cloud-engineering, /ai-expert)
- [ ] Images and styles load properly
- [ ] Navigation works between pages

## Troubleshooting

### Site not loading after DNS configuration
- DNS propagation can take 24-48 hours (usually faster)
- Check DNS propagation: https://dnschecker.org
- Verify GitHub Pages is enabled in repository settings

### 404 errors on page routes
- Make sure `trailingSlash: true` is in next.config.js (already configured)
- Clear browser cache

### Images not loading
- Verify `images: { unoptimized: true }` is in next.config.js (already configured)
- Check browser console for errors

### Build fails in GitHub Actions
- Check the Actions tab for error logs
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

## Local Development

Continue developing locally as normal:
```bash
npm install
npm run dev
```

Build and test static export:
```bash
npm run build
# Output will be in ./out directory
```

## Current Configuration Summary

**Repository**: jamesthegreati/jamesthegreati.github.io
**Custom Domain**: jamesdesign.me
**Build Output**: Static HTML/CSS/JS (exported via Next.js)
**Deployment Method**: GitHub Actions to GitHub Pages
**Branch**: Currently on `copilot/connect-jamesdesign-me`, ready to merge to `main`

---

**Status**: ✅ All configuration complete. Ready to deploy once DNS is configured and branch is merged to main.
