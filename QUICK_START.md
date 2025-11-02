# Quick Start: Deploy to jamesdesign.me

This guide will help you fix the 404 error and get your site live at jamesdesign.me in 3 steps.

## 🚨 Current Issue
Your site shows "404 - There isn't a GitHub Pages site here" at jamesdesign.me

## ✅ What's Already Configured
- ✓ Next.js site built and ready
- ✓ GitHub Actions workflow configured
- ✓ CNAME file set to jamesdesign.me
- ✓ Repository code is correct

## ⚠️ What's Missing
1. DNS records at your domain registrar
2. GitHub Pages source setting

## 🔧 Fix It in 3 Steps

### Step 1: Configure DNS (15 minutes)

1. **Log into your domain registrar** where you purchased jamesdesign.me
   - Common registrars: GoDaddy, Namecheap, Google Domains, Cloudflare, etc.

2. **Go to DNS settings** for jamesdesign.me
   - Look for: "DNS Management", "DNS Settings", or "Nameservers"

3. **Delete any existing A records** for the root domain (@)

4. **Add these 4 A records:**
   ```
   Type: A    Name: @    Value: 185.199.108.153
   Type: A    Name: @    Value: 185.199.109.153
   Type: A    Name: @    Value: 185.199.110.153
   Type: A    Name: @    Value: 185.199.111.153
   ```

5. **Add 1 CNAME record:**
   ```
   Type: CNAME    Name: www    Value: jamesthegreati.github.io
   ```

6. **Save changes**

### Step 2: Configure GitHub Pages (5 minutes)

1. **Go to your repository settings:**
   https://github.com/jamesthegreati/jamesthegreati.github.io/settings/pages

2. **Under "Build and deployment":**
   - Click on "Source" dropdown
   - Select **"GitHub Actions"** (NOT "Deploy from a branch")

3. **Under "Custom domain":**
   - Enter: `jamesdesign.me`
   - Click "Save"
   - Wait for DNS check (may show "DNS check in progress")

### Step 3: Wait & Verify (5 minutes to 48 hours)

1. **Wait for DNS propagation**
   - Minimum: 5-10 minutes
   - Typically: 1-4 hours
   - Maximum: 24-48 hours

2. **Check DNS propagation:**
   - Visit: https://dnschecker.org/
   - Enter: jamesdesign.me
   - Check if A records show GitHub IPs

3. **Test your site:**
   - Visit: http://jamesdesign.me
   - Visit: https://jamesdesign.me
   - Should show your portfolio!

4. **Enable HTTPS (after site works):**
   - Go back to Settings → Pages
   - Check "Enforce HTTPS"
   - Wait 5-10 minutes for SSL certificate

## 🔍 Verify Everything is Working

Run the diagnostic script:
```bash
./check-deployment.sh
```

You should see:
- ✓ DNS pointing to GitHub Pages
- ✓ CNAME file correctly configured
- ✓ Website is accessible
- ✓ All checks passing

## ❓ Still Having Issues?

### DNS not working after 4 hours?
- Double-check DNS records at your registrar
- Ensure no typos in IP addresses
- Remove any conflicting records
- If using Cloudflare, disable proxy (gray cloud, not orange)

### Getting "Custom domain already taken"?
- The domain is being used by another GitHub repository
- Remove it from other repositories first

### Site works but shows broken styles?
- This is normal if DNS isn't fully propagated
- Wait a bit longer and hard refresh (Ctrl+F5)

### Need more help?
See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed troubleshooting steps.

## 📞 Support

**For DNS issues:**
- Contact your domain registrar support
- Most registrars have live chat or phone support

**For GitHub Pages issues:**
- Check: https://www.githubstatus.com/
- Documentation: https://docs.github.com/en/pages

## 🎉 Success!

Once working, your site will be live at:
- https://jamesdesign.me ← Main URL
- https://www.jamesdesign.me ← Redirects to main URL
- https://jamesthegreati.github.io ← Also works

The site will auto-deploy whenever you push to the `main` branch!

---

**Need the detailed guide?** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

**Want to understand the setup?** See [DEPLOYMENT_INSTRUCTIONS.md](DEPLOYMENT_INSTRUCTIONS.md)
