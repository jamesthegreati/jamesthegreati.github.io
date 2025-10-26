# Custom Domain Setup Instructions

This document provides instructions for properly configuring the custom domain `jamesdesign.me` with GitHub Pages.

## Current Configuration

- **CNAME file**: Contains `jamesdesign.me`
- **Repository**: jamesthegreati/jamesthegreati.github.io
- **Jekyll processing**: Disabled via `.nojekyll` file

## Required DNS Configuration

To properly configure your custom domain with GitHub Pages, you need to set up DNS records with your domain registrar:

### Option 1: Using A Records (Recommended)
Add the following A records pointing to GitHub's IP addresses:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Option 2: Using CNAME Record
If using a subdomain (like www.jamesdesign.me), add a CNAME record pointing to:
```
jamesthegreati.github.io
```

## GitHub Pages Settings

1. Go to your repository settings: https://github.com/jamesthegreati/jamesthegreati.github.io/settings/pages
2. Under "Custom domain", enter: `jamesdesign.me`
3. Wait for DNS check to complete (this may take a few minutes to 24 hours)
4. Once verified, enable "Enforce HTTPS"

## Troubleshooting the Squid Proxy Error

The error you're seeing:
```
ERROR: The requested URL could not be retrieved
Invalid URL
```

This typically occurs when:

1. **DNS is not properly configured**
   - Solution: Verify your DNS records with your domain registrar
   - Check DNS propagation: https://www.whatsmydns.net/

2. **GitHub Pages custom domain not configured**
   - Solution: Configure in repository settings as described above

3. **HTTPS certificate not yet issued**
   - Solution: Wait 24-48 hours after configuring DNS for GitHub to issue SSL certificate

4. **Accessing via HTTP instead of HTTPS**
   - Solution: Always access via `https://jamesdesign.me`

5. **DNS propagation not complete**
   - Solution: Wait up to 24-48 hours for DNS changes to propagate globally

## Verification Steps

Once configured, verify your site is working:

1. Check DNS propagation:
   ```bash
   nslookup jamesdesign.me
   ```
   Should return GitHub's IP addresses.

2. Test HTTPS:
   ```bash
   curl -I https://jamesdesign.me
   ```
   Should return `200 OK` status.

3. Open in browser:
   Navigate to `https://jamesdesign.me` (note the HTTPS)

## Common Mistakes to Avoid

1. ❌ Using `http://` instead of `https://`
2. ❌ Not waiting for DNS propagation
3. ❌ Configuring DNS before adding CNAME to repository
4. ❌ Using wrong GitHub IP addresses for A records
5. ❌ Not enabling "Enforce HTTPS" in GitHub Pages settings

## Files Added to Fix Deployment Issues

- `.nojekyll` - Disables Jekyll processing (can cause issues with custom domains)
- `404.html` - Custom 404 error page
- `robots.txt` - SEO and crawler configuration
- This documentation file

## Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages IP Addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

## Support

If issues persist after following these steps:
1. Verify DNS configuration with `dig jamesdesign.me`
2. Check GitHub Pages deployment status in repository Actions tab
3. Clear browser cache and try incognito mode
4. Wait 24-48 hours for DNS and SSL propagation
