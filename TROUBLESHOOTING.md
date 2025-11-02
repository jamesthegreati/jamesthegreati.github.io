# GitHub Pages 404 Error Troubleshooting Guide

## Current Issue
Getting "404 - There isn't a GitHub Pages site here" error when visiting `jamesdesign.me`

## Root Cause Analysis

The 404 error occurs when one or more of these conditions are not met:

### 1. GitHub Pages is Not Enabled or Misconfigured ⚠️

**Check:**
- Go to: https://github.com/jamesthegreati/jamesthegreati.github.io/settings/pages
- Verify that GitHub Pages is enabled

**Required Configuration:**
- **Source:** Must be set to **"GitHub Actions"** (NOT "Deploy from a branch")
- **Custom domain:** Should show `jamesdesign.me`
- **Enforce HTTPS:** Should be checked (after DNS is configured)

**How to Fix:**
1. Navigate to repository Settings → Pages
2. Under "Build and deployment" → "Source", select **"GitHub Actions"**
3. Under "Custom domain", enter: `jamesdesign.me`
4. Click "Save"
5. Wait for DNS check to complete

### 2. DNS is Not Configured ⚠️ (MOST LIKELY ISSUE)

**Check:**
```bash
dig jamesdesign.me A
# or
nslookup jamesdesign.me
```

If the domain doesn't resolve or doesn't point to GitHub's servers, you need to configure DNS.

**Required DNS Records at Your Domain Registrar:**

For apex domain (jamesdesign.me):
```
Type: A
Name: @ (or leave blank for root domain)
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

For www subdomain:
```
Type: CNAME
Name: www
Value: jamesthegreati.github.io
```

**Where to Configure:**
- Log into your domain registrar (where you purchased jamesdesign.me)
- Examples: GoDaddy, Namecheap, Google Domains, Cloudflare, etc.
- Find "DNS Settings", "DNS Management", or "Name Servers"
- Add the A records and CNAME record as shown above
- Save changes

**Important Notes:**
- DNS propagation can take 24-48 hours (sometimes just minutes)
- Remove any conflicting records (old A records, CNAME for @ record)
- If using Cloudflare, disable proxy (orange cloud → gray cloud) initially

### 3. Workflow Has Not Run Successfully

**Check:**
- Go to: https://github.com/jamesthegreati/jamesthegreati.github.io/actions
- Look for "Deploy Next.js to GitHub Pages" workflow
- Verify the latest run on main branch shows a green checkmark ✓

**Latest Status:** 
✅ Workflow ran successfully on main branch (Run #3, completed 2025-11-02)

### 4. CNAME File Issues

**Check:**
```bash
# In repository, check public/CNAME file
cat public/CNAME
```

**Required Content:**
```
jamesdesign.me
```

**Current Status:**
✅ CNAME file is correctly configured with `jamesdesign.me`

### 5. Next.js Configuration Issues

**Check:**
```javascript
// next.config.js should have:
{
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

**Current Status:**
✅ Next.js is correctly configured for static export

## Step-by-Step Resolution

### Step 1: Configure DNS (Most Critical)

1. **Log into your domain registrar** (where you bought jamesdesign.me)
2. **Find DNS settings**
3. **Remove any existing A records** pointing to old IPs
4. **Add the four A records** (as shown above)
5. **Add the CNAME record for www** (as shown above)
6. **Save changes**
7. **Wait 5-10 minutes** (sometimes up to 48 hours)

### Step 2: Verify GitHub Pages Settings

1. Go to: https://github.com/jamesthegreati/jamesthegreati.github.io/settings/pages
2. Ensure **Source** is set to **"GitHub Actions"**
3. Under **Custom domain**, ensure it shows: `jamesdesign.me`
4. If custom domain field is empty:
   - Enter `jamesdesign.me`
   - Click "Save"
   - This will create/update the CNAME file
5. Wait for the DNS check to pass (you'll see a green checkmark)

### Step 3: Test DNS Propagation

Use online tools to check DNS propagation:
- https://dnschecker.org/ (check "jamesdesign.me")
- https://www.whatsmydns.net/ (check "jamesdesign.me")

Expected results:
- A records should show the four GitHub IPs
- CNAME for www should show `jamesthegreati.github.io`

### Step 4: Access Your Site

After DNS is configured and propagated:
- Visit: http://jamesdesign.me
- Visit: https://jamesdesign.me
- Visit: http://www.jamesdesign.me
- Visit: https://www.jamesdesign.me

All should redirect to https://jamesdesign.me and show your portfolio.

### Step 5: Enable HTTPS (After DNS Works)

Once DNS is working:
1. Go back to Settings → Pages
2. Check the box for **"Enforce HTTPS"**
3. GitHub will automatically provision an SSL certificate
4. This may take a few minutes

## Common Issues and Solutions

### Issue: "DNS check unsuccessful"

**Cause:** DNS records not configured or not propagated yet

**Solution:**
- Double-check DNS records at your registrar
- Wait longer for propagation (up to 48 hours)
- Use `dig` or online tools to verify DNS
- Ensure no typos in domain name

### Issue: "Custom domain already taken"

**Cause:** Another GitHub repository is using jamesdesign.me

**Solution:**
- You can only use a custom domain on one repository
- Remove it from other repositories first
- Or use a subdomain (e.g., portfolio.jamesdesign.me)

### Issue: Site works on jamesthegreati.github.io but not jamesdesign.me

**Cause:** Custom domain configuration missing

**Solution:**
1. Ensure CNAME file exists in public/ directory
2. Ensure custom domain is set in GitHub Pages settings
3. Configure DNS records

### Issue: 404 on subpages

**Cause:** Incorrect basePath or static export configuration

**Solution:**
- Verify `next.config.js` has `output: 'export'`
- Check that all routes are defined in app/ directory
- Ensure no dynamic routes without `generateStaticParams`

## Verification Checklist

Use this checklist to verify everything is configured correctly:

- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] Source is set to "GitHub Actions"
- [ ] Custom domain is set to "jamesdesign.me"
- [ ] DNS A records point to GitHub's IPs (4 records)
- [ ] DNS CNAME record for www points to jamesthegreati.github.io
- [ ] CNAME file in public/ contains "jamesdesign.me"
- [ ] Latest GitHub Actions workflow succeeded
- [ ] DNS has propagated (check with dnschecker.org)
- [ ] Site loads at jamesdesign.me
- [ ] HTTPS is enforced

## Quick Test Commands

```bash
# Test DNS
dig jamesdesign.me A +short
# Should show: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

# Test CNAME
dig www.jamesdesign.me CNAME +short
# Should show: jamesthegreati.github.io.

# Test HTTP access
curl -I http://jamesdesign.me
# Should return HTTP 200 or redirect to HTTPS

# Build and test locally
npm install
npm run build
cd out
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Timeline Expectations

- **Immediate:** GitHub Actions workflow runs (1-2 minutes)
- **5-10 minutes:** DNS propagation begins
- **1-4 hours:** DNS fully propagated in most locations
- **24-48 hours:** DNS fully propagated globally
- **After DNS works:** SSL certificate provisioning (5-10 minutes)

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Configuration Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## Need More Help?

If you've followed all steps and still see a 404:

1. **Check GitHub Actions logs:**
   - Go to Actions tab
   - Click on latest workflow run
   - Check build and deploy steps for errors

2. **Verify the build locally:**
   ```bash
   npm run build
   cd out
   ls -la  # Should see index.html and other files
   ```

3. **Contact GitHub Support:**
   - GitHub Pages issues: https://support.github.com/

4. **Check your domain registrar support:**
   - Verify DNS records are properly configured
   - Some registrars have specific requirements

## Current Configuration Status

✅ **Repository Configuration:** All files correctly configured
✅ **Workflow:** Successfully deployed to GitHub Pages
✅ **CNAME File:** Properly set to jamesdesign.me
✅ **Next.js Config:** Static export enabled
⚠️ **DNS Configuration:** Needs to be configured at domain registrar
⚠️ **GitHub Pages Settings:** Need to verify Source is set to "GitHub Actions"

**Next Action Required:** Configure DNS records at your domain registrar
