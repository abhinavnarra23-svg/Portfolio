# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (1 min)
```bash
npm install
```

### Step 2: Start Dev Server (1 min)
```bash
npm run dev
```

### Step 3: Open Browser (instant)
Visit: [http://localhost:3000](http://localhost:3000)

### Step 4: Edit Personal Info (2 min)
Edit `lib/constants.ts` and update:
- `PERSON_INFO` - Your name, email, phone, LinkedIn
- `PROFILE_SUMMARY` - Your professional bio
- `SKILLS` - Your technical skills
- `EDUCATION` - Your degrees and dates
- `EXPERIENCE` - Your work history
- `PROJECTS` - Your portfolio projects
- `CERTIFICATIONS` - Your credentials

### Step 5: Add Resume (1 min)
Place your `resume.pdf` in the `public/` folder.

## ✅ Done!

Your site is now live at `http://localhost:3000` with your information!

---

## 📝 Next Steps

### Short Term (15 minutes)
- [ ] Update all personal information
- [ ] Add project images and links
- [ ] Test all navigation links
- [ ] Check mobile responsiveness (press F12)

### Medium Term (1 hour)
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Add more projects
- [ ] Update certifications
- [ ] Test form functionality
- [ ] Optimize images

### Long Term (Before Deployment)
- [ ] Set up email notifications
- [ ] Add Google Analytics
- [ ] Create custom domain
- [ ] Deploy to Vercel/Netlify
- [ ] Monitor performance

---

## 🎯 File Guide - What to Edit

| What You Want | Edit This File | Time |
|---------------|---|------|
| Personal info, skills, projects | `lib/constants.ts` | 10 min |
| Colors and design | `tailwind.config.ts` | 5 min |
| Add resume | Place in `public/resume.pdf` | 1 min |
| Customize components | `components/*.tsx` | 10 min |
| Add new sections | Create new component + add to `app/page.tsx` | 20 min |
| Update styles | `app/globals.css` | 10 min |

---

## 🎨 Customization Quick Links

### Change Colors
File: `tailwind.config.ts`
```typescript
primary: '#2563EB',      // Blue
accent: '#38BDF8',       // Sky Blue
background: '#0F172A',   // Dark
```

### Change Content
File: `lib/constants.ts`
```typescript
PERSON_INFO = { /* your info */ }
SKILLS = [ /* your skills */ ]
PROJECTS = [ /* your projects */ ]
// ... etc
```

### Change Animations
File: `app/globals.css`
Look for `@keyframes` sections

---

## 💻 Build for Production

When ready to deploy:

```bash
# Build
npm run build

# Test production build locally
npm run start

# Deploy (to Vercel)
npm install -g vercel
vercel
```

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## 🐛 Common Quick Fixes

### Page looks weird after editing
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

### Changes not showing
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Restart dev server

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Dependencies error
```bash
# Reinstall everything
rm -rf node_modules package-lock.json
npm install
```

---

## 📂 File Structure at a Glance

```
portfolio/
├── app/
│   ├── page.tsx              ← Main page (add sections here)
│   ├── layout.tsx            ← Page layout and metadata
│   └── globals.css           ← Global styles
├── components/               ← All UI components
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   └── ... (other sections)
├── lib/
│   ├── constants.ts          ← YOUR DATA (edit this!)
│   ├── types.ts
│   └── utils.ts
├── public/
│   └── resume.pdf            ← Add your resume here
└── tailwind.config.ts        ← Colors and theme
```

---

## 🎯 What Gets Updated Most Often

1. **Content**: `lib/constants.ts` - 90% of edits go here
2. **Styling**: `tailwind.config.ts` - Colors and layout
3. **Components**: `components/*.tsx` - Structure and features

---

## 🌐 Deployment Options

### Easiest: Vercel (2 minutes)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Done! (auto-deploys on every push)

### Alternative: Netlify (3 minutes)
1. Go to netlify.com
2. Drag & drop project folder
3. Or connect GitHub (auto-deploy)

See `DEPLOYMENT.md` for full instructions.

---

## 📞 Quick Help

**"How do I change my name?"**
→ Edit `PERSON_INFO.name` in `lib/constants.ts`

**"How do I add a project?"**
→ Add object to `PROJECTS` array in `lib/constants.ts`

**"How do I change colors?"**
→ Edit `colors` in `tailwind.config.ts`

**"How do I deploy?"**
→ Read `DEPLOYMENT.md`

**"I'm stuck!"**
→ Check `SETUP.md` for detailed customization guide

---

## ⚡ Pro Tips

✅ **Save as you go** - Changes hot-reload automatically
✅ **Test on mobile** - Press F12 and toggle device mode
✅ **Use placeholder images** - Replace with real images later
✅ **Keep data organized** - All content in `lib/constants.ts`
✅ **Commit to git** - Use `git commit` as you make changes

---

## 🎉 You're All Set!

Your portfolio is ready! 

**Next: Open `http://localhost:3000` and start editing** 🚀

Need detailed help? → Read `SETUP.md`
Ready to deploy? → Read `DEPLOYMENT.md`

---

**Happy building! 💻✨**
