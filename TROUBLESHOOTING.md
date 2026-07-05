# 🆘 Troubleshooting Guide

Solutions to common issues and problems.

---

## 🚀 Installation & Setup

### Issue: `npm install` fails
**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**If still failing:**
- Check Node.js version: `node --version` (should be 18+)
- Try `npm install --legacy-peer-deps`
- Check internet connection

---

### Issue: Port 3000 already in use
**Solution 1: Kill the process**
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# On Mac/Linux
lsof -i :3000
kill -9 [PID]
```

**Solution 2: Use different port**
```bash
npm run dev -- -p 3001
```

---

### Issue: Module not found errors
**Solutions:**
```bash
# Reinstall dependencies
npm install

# Clear Next.js cache
rm -rf .next

# Start dev server
npm run dev
```

---

## 🎨 Customization Issues

### Issue: Changes not appearing
**Solutions:**
- Restart dev server (Ctrl+C, then `npm run dev`)
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check for syntax errors in edited files

### Issue: Styling/CSS not working
**Solutions:**
- Verify TailwindCSS classes are correct
- Check `tailwind.config.ts` for syntax errors
- Rebuild: `npm run build`
- Clear `.next` folder: `rm -rf .next`

### Issue: Colors not changing
**Check:**
- Edited `tailwind.config.ts` correctly?
- Syntax is valid (no typos)?
- Restarted dev server?
- Cleared cache?

**Solution:**
```typescript
// In tailwind.config.ts
colors: {
  primary: {
    600: '#YOUR_COLOR', // Make sure it's a valid hex
  }
}
```

---

## 📝 Content Issues

### Issue: Project images not showing
**Solutions:**
1. Check image path is correct
2. If using external URLs, verify link is accessible
3. If using local files:
   ```
   Place in: public/images/
   Reference: /images/your-image.jpg
   ```
4. Check image format (jpg, png, webp supported)

### Issue: PDF resume not downloading
**Solutions:**
1. Ensure `resume.pdf` is in `public/` folder
2. Check file path: should be `/resume.pdf`
3. Verify file isn't corrupted
4. Try: `public/resume.pdf`

### Issue: Form not working
**Temporary solution:** Form opens email client
1. Install email service (EmailJS, Resend, SendGrid)
2. Update `app/api/contact/route.ts`
3. Add API keys to `.env.local`

---

## 🔗 Link Issues

### Issue: Navigation links not working
**Check:**
- Section IDs match navigation links
- Format: `#about` should match `<section id="about">`
- No typos in section IDs

**Fix example:**
```typescript
// In Navbar
{ label: 'About', href: '#about' }

// In component
<section id="about">
```

### Issue: External links not opening
**Solutions:**
- Verify full URL with https://
- Add `target="_blank"` and `rel="noopener noreferrer"`
- Check for typos in URL

---

## 🌐 Deployment Issues

### Issue: Build fails
**Solutions:**
```bash
# Check for TypeScript errors
npm run build

# If errors, check:
# 1. Types are correct
# 2. No unused variables
# 3. All imports exist
```

**Common build errors:**
- Missing file: Check import paths
- Type error: Check types.ts
- Dependency missing: Run `npm install`

### Issue: Site looks different after deploy
**Check:**
- Environment variables set correctly
- Image paths are correct
- API endpoints are updated
- HTTPS is enabled

### Issue: Performance is slow
**Solutions:**
1. Check image sizes (optimize before uploading)
2. Use CDN for images
3. Enable compression in next.config.js
4. Check for large dependencies

---

## 🖥️ Development Issues

### Issue: Hot reload not working
**Solution:**
```bash
# Restart dev server
Ctrl+C (stop)
npm run dev (restart)
```

### Issue: Console errors appearing
**Solutions:**
1. Read error message carefully
2. Check file name and line number
3. Fix the issue
4. Restart dev server
5. Check console again

### Issue: TypeScript errors in editor
**Solutions:**
```bash
# Verify no actual errors
npm run build

# If no build errors, it's just editor cache
# Restart VS Code or:
# Press Ctrl+Shift+P > TypeScript: Restart TS Server
```

---

## 🎨 Responsive Design Issues

### Issue: Layout broken on mobile
**Check:**
- Using responsive classes (md:, lg:, etc.)
- Padding/margins appropriate for mobile
- Text size readable
- Images scale properly

**Debug:**
- Press F12 → Toggle device toolbar
- Test different screen sizes
- Check `tailwind.config.ts` breakpoints

### Issue: Navigation menu overlapping content
**Solutions:**
- Add padding-top to first section
- Adjust Navbar height
- Check z-index values

---

## 📊 Data Issues

### Issue: Duplicate entries showing
**Solutions:**
- Check `lib/constants.ts` for duplicate entries
- Remove duplicates
- Restart dev server

### Issue: Typing effect too fast/slow
**Edit in `HeroSection.tsx`:**
```typescript
setTimeout(
  () => {
    setDisplayText(...)
  },
  50 // Adjust: lower = faster, higher = slower
)
```

### Issue: Wrong data showing
**Solutions:**
1. Check `lib/constants.ts` for correct data
2. Verify component is reading from correct constant
3. Clear cache and rebuild
4. Restart dev server

---

## 🔒 Security Issues

### Issue: API keys exposed
**Solutions:**
1. Move keys to `.env.local` (not git)
2. Use `process.env.NEXT_PUBLIC_*` only for public data
3. Keep private keys server-side only
4. Rotate compromised keys

### Issue: CORS errors on API calls
**Solutions:**
1. Add CORS headers in Next.js API routes
2. Check API endpoint is accessible
3. Verify authentication if needed
4. Add environment variables for URLs

---

## 📱 Mobile-Specific Issues

### Issue: Touch interactions not working
**Solutions:**
- Add proper event handlers
- Test on actual device, not just simulator
- Check z-index conflicts
- Verify touch areas are large enough (min 44px)

### Issue: Fixed navbar covering content
**Fix:**
```css
/* Add margin-top to first section */
section:first-of-type {
  margin-top: 80px; /* Navbar height */
}
```

---

## 🧪 Testing & Debugging

### Using Browser Dev Tools

**F12 opens DevTools:**
1. **Elements** - Inspect HTML
2. **Console** - Check errors
3. **Network** - Check requests
4. **Performance** - Check speed
5. **Lighthouse** - Check quality

**Common checks:**
- Images loading? (Network tab)
- Errors in console? (Console tab)
- Responsive? (Toggle device toolbar)

### Build & Production Testing

```bash
# Test production build locally
npm run build
npm run start

# Visit http://localhost:3000
# Test all features thoroughly
```

---

## 🎯 Performance Debugging

### Slow page load?
```bash
# Check build output
npm run build

# Analyze bundle
npm install --save-dev @next/bundle-analyzer

# Then check bundle size
```

### High memory usage?
- Check for memory leaks in components
- Monitor with browser DevTools
- Check for infinite loops

---

## 📞 Advanced Help

### Still stuck?

1. **Check Documentation**
   - README.md
   - SETUP.md
   - DEPLOYMENT.md

2. **Search Error Message**
   - Copy exact error
   - Search on Google
   - Check GitHub issues

3. **Reset Project**
   ```bash
   git clean -fd
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

4. **Fresh Installation**
   - Backup current work
   - Delete project folder
   - Clone repository fresh
   - Install and configure again

---

## 🔄 Common Workflows

### "I messed up, how do I undo?"
```bash
# Last save point
git status  # See what changed
git diff    # See exact changes
git restore .  # Undo all changes
git clean -fd  # Remove new files
```

### "Site works locally but breaks after deploy"
1. Check environment variables are set
2. Verify image paths work on deployed domain
3. Check API endpoints in .env
4. Clear deploy cache
5. Force rebuild

### "I want to deploy but tests failing"
```bash
# Fix build first
npm run build

# If build succeeds, deploy
# If build fails, fix errors first

# Never deploy broken build
```

---

## ✅ Verification Checklist

- [ ] No errors in console (F12)
- [ ] All images loading (Network tab)
- [ ] Responsive on mobile (F12 device mode)
- [ ] All links working
- [ ] Form submitting
- [ ] Performance acceptable (Lighthouse)
- [ ] Build succeeding (`npm run build`)

---

## 🆘 Emergency Fix

**If everything is broken:**
```bash
# 1. Stop dev server
Ctrl+C

# 2. Clean everything
rm -rf node_modules package-lock.json .next

# 3. Fresh install
npm install

# 4. Restart
npm run dev

# 5. Should work now!
```

---

## 📝 Reporting Issues

If you find a bug:
1. Note exact error message
2. List steps to reproduce
3. Check if it happens in fresh install
4. Share code snippet if possible
5. Mention environment (Node version, OS)

---

**Still need help? Check the main README.md or create an issue.** 💙
