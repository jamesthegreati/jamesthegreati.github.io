#!/bin/bash
# GitHub Pages Deployment Diagnostic Script
# Usage: ./check-deployment.sh

set -e

DOMAIN="jamesdesign.me"
REPO_OWNER="jamesthegreati"
REPO_NAME="jamesthegreati.github.io"
GITHUB_IPS=("185.199.108.153" "185.199.109.153" "185.199.110.153" "185.199.111.153")

echo "============================================"
echo "GitHub Pages Deployment Diagnostic Tool"
echo "Domain: $DOMAIN"
echo "Repository: $REPO_OWNER/$REPO_NAME"
echo "============================================"
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check DNS Configuration
echo "📡 1. Checking DNS Configuration..."
echo "-------------------------------------------"
if command_exists dig; then
    echo "Querying A records for $DOMAIN:"
    A_RECORDS=$(dig +short "$DOMAIN" A 2>/dev/null || echo "")
    
    if [ -z "$A_RECORDS" ]; then
        echo "❌ No A records found for $DOMAIN"
        echo "⚠️  ACTION REQUIRED: Configure A records at your domain registrar"
    else
        echo "✓ Found A records:"
        echo "$A_RECORDS"
        
        # Check if any of the IPs match GitHub's IPs
        MATCH_FOUND=false
        for ip in "${GITHUB_IPS[@]}"; do
            if echo "$A_RECORDS" | grep -q "$ip"; then
                MATCH_FOUND=true
                break
            fi
        done
        
        if [ "$MATCH_FOUND" = true ]; then
            echo "✓ DNS is pointing to GitHub Pages!"
        else
            echo "⚠️  DNS records found but not pointing to GitHub Pages"
            echo "Expected one or more of: ${GITHUB_IPS[*]}"
        fi
    fi
    
    echo ""
    echo "Querying CNAME record for www.$DOMAIN:"
    WWW_CNAME=$(dig +short "www.$DOMAIN" CNAME 2>/dev/null || echo "")
    if [ -z "$WWW_CNAME" ]; then
        echo "⚠️  No CNAME record found for www.$DOMAIN"
    else
        echo "✓ Found CNAME: $WWW_CNAME"
        if echo "$WWW_CNAME" | grep -q "$REPO_OWNER.github.io"; then
            echo "✓ CNAME correctly points to GitHub Pages!"
        else
            echo "⚠️  CNAME should point to $REPO_OWNER.github.io"
        fi
    fi
else
    echo "⚠️  'dig' command not available, skipping DNS check"
    echo "Install with: apt-get install dnsutils (Debian/Ubuntu) or dnf install bind-utils (Fedora/RHEL)"
fi
echo ""

# Check local CNAME file
echo "📄 2. Checking Local CNAME File..."
echo "-------------------------------------------"
if [ -f "public/CNAME" ]; then
    CNAME_CONTENT=$(cat public/CNAME)
    echo "✓ CNAME file exists"
    echo "Content: $CNAME_CONTENT"
    if [ "$CNAME_CONTENT" = "$DOMAIN" ]; then
        echo "✓ CNAME file is correctly configured"
    else
        echo "⚠️  CNAME content should be: $DOMAIN"
    fi
else
    echo "❌ CNAME file not found in public/ directory"
fi
echo ""

# Check Next.js configuration
echo "⚙️  3. Checking Next.js Configuration..."
echo "-------------------------------------------"
if [ -f "next.config.js" ]; then
    echo "✓ next.config.js exists"
    if grep -q "output.*export" next.config.js; then
        echo "✓ Static export is enabled"
    else
        echo "⚠️  Static export may not be enabled"
    fi
    if grep -q "unoptimized.*true" next.config.js; then
        echo "✓ Image optimization is disabled (required for static export)"
    else
        echo "⚠️  Image optimization should be disabled for static export"
    fi
else
    echo "❌ next.config.js not found"
fi
echo ""

# Check GitHub Actions workflow
echo "🔄 4. Checking GitHub Actions Workflow..."
echo "-------------------------------------------"
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✓ Deployment workflow exists"
    if grep -q "actions/deploy-pages" .github/workflows/deploy.yml; then
        echo "✓ Workflow uses GitHub Pages deployment action"
    fi
else
    echo "❌ Deployment workflow not found"
fi
echo ""

# Test HTTP access
echo "🌐 5. Testing Website Access..."
echo "-------------------------------------------"
if command_exists curl; then
    echo "Testing http://$DOMAIN:"
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://$DOMAIN" 2>/dev/null || echo "000")
    if [ "$HTTP_STATUS" = "000" ]; then
        echo "❌ Unable to connect to $DOMAIN"
        echo "⚠️  This usually means DNS is not configured"
    elif [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "301" ] || [ "$HTTP_STATUS" = "302" ]; then
        echo "✓ Website is accessible! (HTTP $HTTP_STATUS)"
    elif [ "$HTTP_STATUS" = "404" ]; then
        echo "❌ Website returns 404 Not Found"
        echo "⚠️  Check GitHub Pages settings"
    else
        echo "⚠️  Unexpected HTTP status: $HTTP_STATUS"
    fi
    
    echo ""
    echo "Testing https://$DOMAIN:"
    HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" 2>/dev/null || echo "000")
    if [ "$HTTPS_STATUS" = "000" ]; then
        echo "⚠️  HTTPS not accessible (SSL certificate may not be provisioned yet)"
    elif [ "$HTTPS_STATUS" = "200" ]; then
        echo "✓ HTTPS is working! (HTTP $HTTPS_STATUS)"
    elif [ "$HTTPS_STATUS" = "404" ]; then
        echo "❌ HTTPS returns 404 Not Found"
    else
        echo "⚠️  HTTPS status: $HTTPS_STATUS"
    fi
else
    echo "⚠️  'curl' command not available, skipping HTTP test"
fi
echo ""

# Test local build
echo "🔨 6. Testing Local Build..."
echo "-------------------------------------------"
if [ -d "node_modules" ]; then
    echo "✓ Dependencies are installed"
else
    echo "⚠️  Dependencies not installed (run 'npm install')"
fi

if [ -d "out" ]; then
    echo "✓ Build output directory exists"
    FILE_COUNT=$(find out -type f -name "*.html" | wc -l)
    echo "  Found $FILE_COUNT HTML files in out/"
    if [ -f "out/index.html" ]; then
        echo "✓ index.html exists in out/"
    else
        echo "⚠️  index.html not found in out/"
    fi
    if [ -f "out/CNAME" ]; then
        echo "✓ CNAME copied to out/"
    else
        echo "⚠️  CNAME not copied to out/ (may not be in build)"
    fi
else
    echo "⚠️  Build output directory not found (run 'npm run build')"
fi
echo ""

# Summary and recommendations
echo "============================================"
echo "📋 Summary & Next Steps"
echo "============================================"
echo ""
echo "Required Actions (in order):"
echo ""
echo "1. 🔧 Configure DNS at your domain registrar:"
echo "   - Add 4 A records pointing to GitHub IPs"
echo "   - Add CNAME record for www"
echo "   See TROUBLESHOOTING.md for detailed instructions"
echo ""
echo "2. ⚙️  Configure GitHub Pages:"
echo "   - Go to: https://github.com/$REPO_OWNER/$REPO_NAME/settings/pages"
echo "   - Set Source to 'GitHub Actions'"
echo "   - Set Custom domain to '$DOMAIN'"
echo ""
echo "3. ⏳ Wait for DNS propagation (5 minutes to 48 hours)"
echo ""
echo "4. ✅ Enable HTTPS in GitHub Pages settings"
echo ""
echo "For detailed troubleshooting, see TROUBLESHOOTING.md"
echo "============================================"
