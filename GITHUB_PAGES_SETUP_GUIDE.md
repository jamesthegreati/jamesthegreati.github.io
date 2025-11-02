# Complete Guide: Connecting Main Branch to jamesdesign.me Domain Using GitHub Pages

This comprehensive guide documents the complete process of connecting the main branch of the `jamesthegreati/jamesthegreati.github.io` repository to the custom domain `jamesdesign.me` using GitHub Pages.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Setup Process](#step-by-step-setup-process)
4. [Repository Configuration](#repository-configuration)
5. [DNS Configuration](#dns-configuration)
6. [GitHub Pages Settings](#github-pages-settings)
7. [SSL/HTTPS Configuration](#sslhttps-configuration)
8. [Verification and Testing](#verification-and-testing)
9. [Troubleshooting](#troubleshooting)
10. [Maintenance and Updates](#maintenance-and-updates)

---

## Overview

GitHub Pages is a static site hosting service that serves HTML, CSS, and JavaScript files directly from a GitHub repository. This guide explains how we configured the repository to serve the portfolio website at the custom domain `jamesdesign.me`.

### What We Achieved

- ✅ Connected the main branch to GitHub Pages
- ✅ Configured custom domain `jamesdesign.me`
- ✅ Enabled HTTPS with automatic SSL certificate
- ✅ Disabled Jekyll processing for static site
- ✅ Set up proper error handling and SEO

---

## Prerequisites

Before starting, ensure you have:

1. **GitHub Repository**: A repository named `jamesthegreati.github.io` (user pages format)
2. **Domain Name**: Ownership of the domain `jamesdesign.me`
3. **Domain Registrar Access**: Access to DNS settings for your domain
4. **Repository Permissions**: Admin access to the GitHub repository
5. **Static Website Files**: HTML, CSS, and JavaScript files ready to deploy

---

## Step-by-Step Setup Process

### Phase 1: Repository Preparation

#### Step 1.1: Create the GitHub Pages Repository

GitHub Pages uses a special naming convention for user pages:

```
username.github.io
```

For this project, the repository is named:
```
jamesthegreati.github.io
```

**Why this naming matters:**
- User pages repositories automatically enable GitHub Pages
- The main (or master) branch is used as the source
- The site is accessible at `https://jamesthegreati.github.io` by default

#### Step 1.2: Add Website Files

The repository contains the following essential files:

```
jamesthegreati.github.io/
├── index.html          # Main homepage
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── 404.html           # Custom error page
├── robots.txt         # SEO and crawler configuration
├── .nojekyll          # Disables Jekyll processing
├── CNAME              # Custom domain configuration
├── assets/            # Images and other resources
└── README.md          # Project documentation
```

**Key Files Explained:**

1. **index.html**: Entry point of the website
2. **.nojekyll**: Empty file that tells GitHub Pages not to process the site with Jekyll
3. **CNAME**: Contains the custom domain name
4. **404.html**: Custom error page for broken links
5. **robots.txt**: Instructs search engine crawlers

#### Step 1.3: Create the CNAME File

The CNAME file is crucial for custom domain configuration.

**Create file:** `CNAME`

**Content:**
```
jamesdesign.me
```

**Important notes:**
- The CNAME file should contain **only** the domain name
- No `http://` or `https://` prefix
- No trailing slash
- No `www.` prefix (unless you want to use www subdomain)
- One domain per CNAME file
- Plain text format, no special formatting

**Creating the CNAME file:**

```bash
# Option 1: Via command line
echo "jamesdesign.me" > CNAME

# Option 2: Via GitHub web interface
# 1. Go to repository
# 2. Click "Add file" → "Create new file"
# 3. Name it "CNAME"
# 4. Add content: jamesdesign.me
# 5. Commit the file
```

#### Step 1.4: Create the .nojekyll File

GitHub Pages uses Jekyll by default to process sites. For static HTML sites, we disable this.

**Create file:** `.nojekyll`

**Content:** (empty file)

**Why disable Jekyll?**
- Faster build times (no processing needed)
- Prevents Jekyll from ignoring files/folders starting with underscore
- Avoids potential routing issues with custom domains
- Ensures files are served exactly as committed

**Creating the .nojekyll file:**

```bash
# Option 1: Via command line
touch .nojekyll

# Option 2: Via GitHub web interface
# 1. Go to repository
# 2. Click "Add file" → "Create new file"
# 3. Name it ".nojekyll"
# 4. Leave content empty
# 5. Commit the file
```

#### Step 1.5: Create Custom 404 Error Page

Provide a better user experience when users encounter broken links.

**Create file:** `404.html`

**Basic structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | James Design</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        .container {
            padding: 2rem;
        }
        h1 {
            font-size: 6rem;
            margin: 0;
        }
        p {
            font-size: 1.5rem;
        }
        a {
            color: white;
            text-decoration: none;
            border: 2px solid white;
            padding: 1rem 2rem;
            border-radius: 5px;
            display: inline-block;
            margin-top: 2rem;
            transition: all 0.3s ease;
        }
        a:hover {
            background: white;
            color: #667eea;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/">Return to Home</a>
    </div>
</body>
</html>
```

#### Step 1.6: Create robots.txt File

Configure how search engines crawl your site.

**Create file:** `robots.txt`

**Content:**
```
User-agent: *
Allow: /

Sitemap: https://jamesdesign.me/sitemap.xml
```

**Explanation:**
- `User-agent: *` - Applies to all search engine crawlers
- `Allow: /` - Allows crawling of all pages
- `Sitemap:` - Optional, points to your sitemap if you have one

---

## Repository Configuration

### Understanding GitHub Pages Source Settings

For repositories named `username.github.io`, GitHub Pages automatically uses the main branch as the source. No additional configuration is needed in the repository settings for the source branch.

**Automatic Configuration:**
- **Source Branch**: main (or master)
- **Source Folder**: / (root)
- **Build Process**: Automatic on every push

### Repository File Structure Best Practices

```
jamesthegreati.github.io/
├── .nojekyll              # Disable Jekyll
├── CNAME                  # Custom domain
├── index.html             # Homepage (required)
├── 404.html              # Error page (recommended)
├── robots.txt            # SEO (recommended)
├── sitemap.xml           # SEO (optional)
├── favicon.ico           # Browser icon (recommended)
├── styles.css            # Stylesheets
├── script.js             # JavaScript
├── assets/               # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
└── README.md             # Documentation
```

### Commit and Push Changes

After creating all necessary files:

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Configure GitHub Pages with custom domain"

# Push to main branch
git push origin main
```

---

## DNS Configuration

DNS (Domain Name System) configuration is essential to connect your custom domain to GitHub Pages.

### Step 3.1: Understand DNS Record Types

**Two main approaches:**

1. **A Records** (Recommended for apex domains like `jamesdesign.me`)
   - Points domain directly to GitHub's IP addresses
   - Faster resolution
   - Better for apex/root domains

2. **CNAME Record** (For subdomains like `www.jamesdesign.me`)
   - Points domain to another domain name
   - Better for subdomains
   - More flexible but slightly slower

### Step 3.2: Configure A Records (Apex Domain)

For the apex domain `jamesdesign.me`, we use A records.

**GitHub Pages IP Addresses:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**How to add A records:**

1. **Log in to your domain registrar** (e.g., GoDaddy, Namecheap, Google Domains, Cloudflare)

2. **Navigate to DNS management** section
   - Look for "DNS Settings", "DNS Management", or "Name Servers"

3. **Add four A records:**

   | Type | Name/Host | Value/Points to | TTL |
   |------|-----------|-----------------|-----|
   | A | @ (or blank) | 185.199.108.153 | 3600 |
   | A | @ (or blank) | 185.199.109.153 | 3600 |
   | A | @ (or blank) | 185.199.110.153 | 3600 |
   | A | @ (or blank) | 185.199.111.153 | 3600 |

   **Notes:**
   - `@` or blank represents the apex domain (jamesdesign.me)
   - TTL (Time To Live) can be 3600 (1 hour) or automatic
   - You need all four A records for redundancy

4. **Delete any conflicting records:**
   - Remove existing A records pointing to other IPs
   - Remove any CNAME records for @ or apex domain
   - Keep other records (MX, TXT, etc.) unless instructed otherwise

### Step 3.3: Optional - Configure WWW Subdomain

If you want `www.jamesdesign.me` to work as well:

**Add a CNAME record:**

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | jamesthegreati.github.io | 3600 |

**Note:** Don't include the domain in the value. GitHub Pages will handle the redirect.

### Step 3.4: DNS Configuration Examples by Provider

#### Namecheap:
1. Go to Domain List → Manage
2. Advanced DNS tab
3. Add New Record → A Record
4. Host: @ | Value: IP address | TTL: Automatic

#### GoDaddy:
1. My Products → DNS
2. Add Record → Type: A
3. Name: @ | Value: IP address | TTL: 1 hour

#### Google Domains:
1. DNS Settings → Custom resource records
2. Name: @ | Type: A | TTL: 1h | Data: IP address

#### Cloudflare:
1. DNS → Add record
2. Type: A | Name: @ | IPv4 address: IP | Proxy status: DNS only (gray cloud)

**Important for Cloudflare users:**
- Disable proxy (gray cloud icon) for initial setup
- Once working, you can enable proxy (orange cloud) for additional features

### Step 3.5: Verify DNS Configuration

After configuring DNS, verify the records:

**Using command line:**
```bash
# Check A records
dig jamesdesign.me +short

# Expected output:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Alternative tool
nslookup jamesdesign.me

# Check CNAME for www
dig www.jamesdesign.me +short
```

**Using online tools:**
- [whatsmydns.net](https://www.whatsmydns.net/) - Check DNS propagation globally
- [dnschecker.org](https://dnschecker.org/) - Verify DNS records
- [mxtoolbox.com](https://mxtoolbox.com/SuperTool.aspx) - Comprehensive DNS tools

### Step 3.6: DNS Propagation Time

**Important:** DNS changes take time to propagate globally.

**Typical timeframes:**
- **Locally**: 5-30 minutes
- **ISP level**: 1-4 hours
- **Global propagation**: 24-48 hours

**During propagation:**
- Some users may see the old site
- Some users may see the new site
- This is normal and temporary
- Don't make additional DNS changes during this period

---

## GitHub Pages Settings

### Step 4.1: Access GitHub Pages Settings

1. Navigate to your repository: `https://github.com/jamesthegreati/jamesthegreati.github.io`

2. Click on **Settings** (gear icon in top menu)

3. Scroll down or click **Pages** in the left sidebar

### Step 4.2: Configure Custom Domain

**In the GitHub Pages settings:**

1. **Custom domain section:**
   - Find the "Custom domain" input field
   - Enter: `jamesdesign.me`
   - Click **Save**

2. **What happens next:**
   - GitHub performs a DNS check
   - Verifies that DNS records point to GitHub
   - Creates a commit adding/updating the CNAME file (if done via UI)
   - Status shows "DNS check in progress..."

3. **Wait for DNS verification:**
   - Initial check: 1-5 minutes
   - If DNS not propagated: Check back in a few hours
   - Status will show "DNS check successful" with a green checkmark

### Step 4.3: Important Notes

**About the CNAME file:**
- If you add custom domain via GitHub UI, it automatically commits a CNAME file
- If you already committed CNAME file, GitHub reads it automatically
- The CNAME file and GitHub settings must match
- Don't manually edit CNAME file and change GitHub settings simultaneously

**If DNS check fails:**
- Verify DNS records are correct
- Wait for DNS propagation (can take 24-48 hours)
- Check for typos in domain name
- Ensure no conflicting DNS records exist

### Step 4.4: Verify GitHub Pages Source

In the same GitHub Pages settings:

**Source section:**
- Should show: "Deploy from a branch"
- **Branch**: main (or master)
- **Folder**: / (root)

For `username.github.io` repositories, this is automatic and usually cannot be changed.

---

## SSL/HTTPS Configuration

GitHub Pages provides free SSL certificates through Let's Encrypt for custom domains.

### Step 5.1: Enable HTTPS

**After DNS verification succeeds:**

1. **In GitHub Pages settings**, find "Enforce HTTPS" checkbox

2. **If disabled:** You'll see a message like:
   ```
   Not yet available for your site because the certificate has not been created yet.
   ```

3. **Wait for certificate generation:**
   - Automatic process after DNS verification
   - Takes 5 minutes to 24 hours
   - GitHub uses Let's Encrypt to generate SSL certificate
   - No action required from you

4. **Once available:**
   - The "Enforce HTTPS" checkbox becomes enabled
   - Check the box to enable HTTPS enforcement
   - Click **Save**

### Step 5.2: What HTTPS Enforcement Does

When enabled:
- All HTTP requests automatically redirect to HTTPS
- Ensures secure connection for all visitors
- Improves SEO (search engines prefer HTTPS)
- Shows padlock icon in browser

### Step 5.3: Verify SSL Certificate

**Check SSL certificate status:**

```bash
# Using curl
curl -I https://jamesdesign.me

# Should return:
# HTTP/2 200
# server: GitHub.com
# content-type: text/html; charset=utf-8
```

**Using browser:**
1. Visit `https://jamesdesign.me`
2. Click the padlock icon in address bar
3. View certificate details
4. Should show "Issued by: Let's Encrypt"

### Step 5.4: SSL Certificate Renewal

**Automatic maintenance:**
- Let's Encrypt certificates valid for 90 days
- GitHub automatically renews before expiration
- No action required from you
- Renewal happens in the background

---

## Verification and Testing

### Step 6.1: Complete Verification Checklist

**DNS Verification:**
```bash
# Check if domain resolves to GitHub IPs
dig jamesdesign.me +short

# Expected output (any of these IPs):
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

**HTTP/HTTPS Testing:**
```bash
# Test HTTP (should redirect to HTTPS)
curl -I http://jamesdesign.me

# Test HTTPS (should return 200)
curl -I https://jamesdesign.me

# Test www subdomain if configured
curl -I https://www.jamesdesign.me
```

**GitHub Pages Status:**
- [ ] Custom domain shows in GitHub Pages settings
- [ ] DNS check shows green checkmark
- [ ] HTTPS enforcement is enabled
- [ ] Source branch is set to main

**Browser Testing:**
- [ ] Visit `http://jamesdesign.me` - should redirect to HTTPS
- [ ] Visit `https://jamesdesign.me` - should load website
- [ ] Check for padlock icon in browser
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Test 404 page: `https://jamesdesign.me/nonexistent-page`

### Step 6.2: Test Content Delivery

**Verify all resources load:**

1. **Open browser developer tools** (F12)
2. **Go to Network tab**
3. **Visit your site**: `https://jamesdesign.me`
4. **Check for:**
   - All resources return 200 status
   - No mixed content warnings (HTTP resources on HTTPS page)
   - CSS and JavaScript files load properly
   - Images display correctly

**Common issues to check:**
```javascript
// Make sure all resources use HTTPS or relative paths
// ❌ Bad:
<script src="http://example.com/script.js"></script>
<img src="http://jamesdesign.me/image.jpg">

// ✅ Good:
<script src="https://example.com/script.js"></script>
<img src="/assets/images/image.jpg">
<img src="https://jamesdesign.me/image.jpg">
```

### Step 6.3: SEO and Performance Verification

**Check robots.txt:**
```bash
curl https://jamesdesign.me/robots.txt

# Should return your robots.txt content
```

**Check if search engines can access:**
- Use Google Search Console
- Submit sitemap (if you have one)
- Request indexing of your homepage

**Performance testing:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Step 6.4: Monitoring GitHub Actions

**Check deployment status:**

1. Go to repository **Actions** tab
2. Look for **pages-build-deployment** workflow
3. Each push triggers automatic deployment
4. Verify builds complete successfully (green checkmark)

**Deployment typically takes:**
- Build time: 30 seconds to 2 minutes
- Propagation to CDN: 1-5 minutes
- Total time from push to live: 2-7 minutes

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: "DNS check unsuccessful"

**Symptoms:**
- Red X next to custom domain in GitHub settings
- Message: "DNS check unsuccessful"

**Solutions:**

1. **Verify DNS records are correct:**
   ```bash
   dig jamesdesign.me +short
   ```
   Should return GitHub IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

2. **Wait for DNS propagation:**
   - Can take up to 48 hours
   - Check progress: https://www.whatsmydns.net/

3. **Check for typos:**
   - Domain name in CNAME file
   - Domain name in GitHub settings
   - DNS records at registrar

4. **Remove conflicting records:**
   - Delete old A records
   - Remove conflicting CNAME records
   - Keep only the correct records

#### Issue 2: "Enforce HTTPS" checkbox disabled

**Symptoms:**
- Checkbox is grayed out
- Message: "Certificate not yet generated"

**Solutions:**

1. **Wait for DNS verification:**
   - HTTPS only available after DNS check passes
   - Ensure DNS check shows green checkmark

2. **Wait for certificate generation:**
   - Can take 5 minutes to 24 hours after DNS verification
   - GitHub automatically generates via Let's Encrypt

3. **Temporary disable and re-enable:**
   - Remove custom domain
   - Wait 5 minutes
   - Re-add custom domain
   - Wait for DNS check

#### Issue 3: Website shows 404 error

**Symptoms:**
- Visiting domain shows "404 - File not found"
- GitHub Pages indicator shows site is live

**Solutions:**

1. **Verify index.html exists:**
   ```bash
   # Check repository root
   ls -la | grep index.html
   ```

2. **Check file naming:**
   - Must be exactly `index.html` (lowercase)
   - Not `Index.html` or `index.HTML`

3. **Verify branch:**
   - Make sure changes are pushed to main branch
   - Check GitHub Pages source branch setting

4. **Clear cache:**
   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
   - Clear browser cache
   - Try incognito/private mode

#### Issue 4: SSL/Certificate errors

**Symptoms:**
- "Your connection is not private" warning
- Certificate mismatch errors

**Solutions:**

1. **Wait for certificate generation:**
   - Can take up to 24 hours for new domains
   - Check back later

2. **Verify HTTPS enforcement:**
   - Should be enabled in GitHub Pages settings
   - Save settings if not enabled

3. **Check domain in certificate:**
   ```bash
   openssl s_client -connect jamesdesign.me:443 -servername jamesdesign.me | openssl x509 -noout -text | grep DNS
   ```
   Should include your domain name

#### Issue 5: "Invalid URL" or Squid Proxy Error

**Symptoms:**
- Error page from Squid proxy
- Message: "The requested URL could not be retrieved"

**Solutions:**

1. **This typically means DNS is not properly configured:**
   - Double-check DNS A records
   - Verify records point to GitHub IPs
   - Wait for DNS propagation

2. **Check CNAME file:**
   - Ensure it contains only the domain name
   - No protocols (http://, https://)
   - No paths or trailing slashes

3. **Verify GitHub Pages status:**
   - Check if site is published
   - Look at recent commits
   - Check Actions tab for build failures

#### Issue 6: Changes not reflecting on live site

**Symptoms:**
- Pushed changes to GitHub
- Changes don't appear on website

**Solutions:**

1. **Check GitHub Actions:**
   - Go to Actions tab
   - Verify pages-build-deployment completed
   - Look for any error messages

2. **Wait for CDN cache:**
   - GitHub Pages uses CDN
   - Can take 2-10 minutes for changes to propagate
   - Try hard refresh: Ctrl+Shift+R

3. **Verify branch:**
   - Ensure changes pushed to correct branch (main)
   - Check GitHub Pages source branch setting

4. **Clear browser cache:**
   - Hard refresh
   - Incognito/private mode
   - Clear all cached data

#### Issue 7: Mixed content warnings

**Symptoms:**
- Padlock icon with warning symbol
- Console errors about mixed content
- Some resources not loading

**Solutions:**

1. **Update resource URLs to HTTPS:**
   ```html
   <!-- Change all http:// to https:// -->
   <script src="https://example.com/script.js"></script>
   <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
   ```

2. **Use relative URLs:**
   ```html
   <!-- Better for same-domain resources -->
   <img src="/assets/images/logo.png">
   <link rel="stylesheet" href="/styles.css">
   ```

3. **Use protocol-relative URLs (if needed):**
   ```html
   <!-- Inherits protocol from page (not recommended for new sites) -->
   <script src="//example.com/script.js"></script>
   ```

### Debug Commands Reference

```bash
# Check DNS A records
dig jamesdesign.me +short
nslookup jamesdesign.me

# Check DNS propagation globally
dig @8.8.8.8 jamesdesign.me +short  # Google DNS
dig @1.1.1.1 jamesdesign.me +short  # Cloudflare DNS

# Test HTTP response
curl -I http://jamesdesign.me
curl -I https://jamesdesign.me

# Check SSL certificate
openssl s_client -connect jamesdesign.me:443 -servername jamesdesign.me

# Test from different locations
curl -I https://jamesdesign.me --resolve jamesdesign.me:443:185.199.108.153

# Check redirects
curl -L http://jamesdesign.me -o /dev/null -w '%{http_code}\n'

# Trace DNS resolution
dig jamesdesign.me +trace
```

---

## Maintenance and Updates

### Updating Website Content

**To update your website:**

1. **Make changes to files** locally or via GitHub web editor

2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update homepage content"
   git push origin main
   ```

3. **Verify deployment:**
   - Check Actions tab for successful build
   - Wait 2-10 minutes for CDN propagation
   - Visit site to confirm changes

### Monitoring Site Health

**Regular checks:**

1. **Monthly:**
   - Verify site is accessible
   - Check HTTPS certificate status
   - Test all major pages/functionality
   - Review Google Search Console for errors

2. **After DNS changes:**
   - Verify domain still resolves correctly
   - Check SSL certificate renewed properly
   - Test all subdomains

3. **After GitHub changes:**
   - Watch for GitHub Status updates
   - Monitor build failures in Actions
   - Test immediately after outage reports

### SSL Certificate Management

**Automatic renewal:**
- GitHub handles certificate renewal
- Happens automatically before expiration
- No action required from you

**If certificate expires:**
1. Disable custom domain in GitHub Pages settings
2. Wait 5 minutes
3. Re-enable custom domain
4. Wait for new certificate generation

### Changing Custom Domain

**To change from jamesdesign.me to another domain:**

1. **Update CNAME file:**
   ```bash
   echo "newdomain.com" > CNAME
   git add CNAME
   git commit -m "Update custom domain"
   git push origin main
   ```

2. **Update GitHub Pages settings:**
   - Enter new domain name
   - Wait for DNS verification

3. **Configure DNS for new domain:**
   - Add A records pointing to GitHub IPs
   - Or CNAME record for subdomain

4. **Wait for propagation:**
   - 24-48 hours for DNS
   - 1-24 hours for SSL certificate

### Removing Custom Domain

**To go back to username.github.io:**

1. **Delete CNAME file:**
   ```bash
   git rm CNAME
   git commit -m "Remove custom domain"
   git push origin main
   ```

2. **Remove from GitHub Pages settings:**
   - Clear custom domain field
   - Click Save

3. **Update DNS** (optional):
   - Remove A records if no longer needed
   - Domain will stop pointing to site

### Backup and Recovery

**Regular backups:**

1. **Repository is backed up by GitHub:**
   - All commits stored permanently
   - Can clone repository anytime

2. **Local backup:**
   ```bash
   git clone https://github.com/jamesthegreati/jamesthegreati.github.io.git backup-$(date +%Y%m%d)
   ```

3. **DNS records:**
   - Screenshot DNS settings
   - Document all records in case of provider change

**Recovery procedures:**

1. **If site goes down:**
   - Check GitHub Status: https://www.githubstatus.com/
   - Verify DNS records unchanged
   - Check Actions tab for build failures

2. **If accidentally deleted files:**
   ```bash
   # Restore from previous commit
   git checkout HEAD~1 -- filename.html
   git commit -m "Restore deleted file"
   git push origin main
   ```

3. **If domain lost:**
   - Site still accessible at jamesthegreati.github.io
   - Can configure new domain following this guide

---

## Additional Resources

### Official Documentation

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
- [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

### Tools and Utilities

- [whatsmydns.net](https://www.whatsmydns.net/) - Check DNS propagation
- [dnschecker.org](https://dnschecker.org/) - Verify DNS records
- [GitHub Status](https://www.githubstatus.com/) - GitHub service status
- [SSL Labs Server Test](https://www.ssllabs.com/ssltest/) - Test SSL configuration
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing

### Community Support

- [GitHub Community Forum](https://github.community/)
- [GitHub Pages Community](https://github.community/c/github-pages/35)
- [Stack Overflow - GitHub Pages](https://stackoverflow.com/questions/tagged/github-pages)

---

## Summary

This guide covered the complete process of connecting the main branch to a custom domain:

✅ **Repository Setup**
- Created properly named repository
- Added essential files (CNAME, .nojekyll, 404.html, robots.txt)
- Committed and pushed to main branch

✅ **DNS Configuration**
- Added A records pointing to GitHub IPs
- Configured optional www subdomain
- Verified DNS propagation

✅ **GitHub Pages Settings**
- Enabled custom domain
- Verified DNS check passed
- Enabled HTTPS enforcement

✅ **Verification**
- Tested domain resolution
- Verified SSL certificate
- Confirmed site accessibility

✅ **Maintenance**
- Understand update procedures
- Know how to troubleshoot issues
- Regular monitoring and backups

Your site is now live at **https://jamesdesign.me** with automatic SSL, served directly from the main branch via GitHub Pages!

---

## Questions or Issues?

If you encounter problems not covered in this guide:

1. Check the [Troubleshooting](#troubleshooting) section
2. Verify all steps in the checklist
3. Wait 24-48 hours for DNS propagation
4. Review GitHub Pages status page
5. Consult official GitHub Pages documentation

---

**Document Version:** 1.0  
**Last Updated:** November 2, 2025  
**Repository:** jamesthegreati/jamesthegreati.github.io  
**Domain:** jamesdesign.me
