# Deployment Guide

This guide covers how to deploy your portfolio website to various platforms.

## 🌐 Vercel (Recommended)

Vercel is the creator of Next.js and provides the best integration.

### Steps:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings

3. **Configure Domain**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS instructions provided by Vercel

4. **Environment Variables** (if needed)
   - Go to Settings > Environment Variables
   - Add any required variables from `.env.example`

### Domain Options:
- Use `narraabhinav.vercel.app` (free)
- Add custom domain like `narraabhinav.com`

---

## 📦 Netlify

Alternative platform with git integration.

### Steps:

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify automatically deploys on every push to main

---

## 🐳 Docker

For containerized deployment.

### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
```

### Build and Run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🌐 Traditional Hosting (cPanel, Shared Hosting)

For hosting providers without Node.js support.

### Steps:

1. **Build Static Export**
```bash
# Update next.config.js
output: 'export'

# Build
npm run build
```

2. **Upload Files**
   - Upload contents of `out/` folder to your hosting
   - Point domain to public_html folder

3. **Note**: Dynamic features require Node.js support

---

## ☁️ AWS Amplify

AWS's hosting platform for web apps.

### Steps:

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Select "Deploy an app"
   - Connect GitHub
   - Choose repository

2. **Build Settings**
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`

3. **Deploy**
   - Click "Save and deploy"

---

## 🚀 DigitalOcean App Platform

Deploy on DigitalOcean.

### Steps:

1. **Create App**
   - Go to App Platform
   - Click "Create Apps"
   - Choose GitHub
   - Select your repository

2. **Configure**
   - Service type: Web Service
   - Build command: `npm run build && npm install --production`
   - Run command: `npm start`
   - HTTP port: 3000

3. **Deploy**
   - Click "Deploy"

---

## 🔧 Environment Setup

### For Production:

1. **Create `.env.production`** (if needed)
```env
NEXT_PUBLIC_API_URL=https://your-domain.com
```

2. **Update Links**
   - Update resume.pdf link if hosted elsewhere
   - Update project demo links
   - Update social media URLs

3. **Analytics** (Optional)
   - Add Google Analytics
   - Add Vercel Analytics

---

## ✅ Pre-Deployment Checklist

- [ ] Update `PERSON_INFO` in `lib/constants.ts`
- [ ] Update project links and descriptions
- [ ] Add actual resume PDF to `public/resume.pdf`
- [ ] Test all links and forms locally
- [ ] Optimize images for web
- [ ] Update domain in sitemap and metadata
- [ ] Run `npm run build` successfully locally
- [ ] Check for console errors
- [ ] Test on mobile devices
- [ ] Run lighthouse audit

---

## 📊 Performance Optimization

### Before Deploying:

1. **Image Optimization**
```bash
npm install next-image-export-optimizer
```

2. **Analyze Bundle**
```bash
npm install --save-dev @next/bundle-analyzer
```

3. **Monitor Performance**
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Monitor lighthouse scores

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Site Looks Different
- Clear browser cache
- Check environment variables
- Verify assets are loading (check network tab)

### Contact Form Not Working
- Implement backend email service
- Use Resend, SendGrid, or similar
- Update API route in `app/api/contact/route.ts`

---

## 📝 Custom Domain Setup

### GoDaddy Example:

1. **Point Domain to Vercel**
   - Get Vercel nameservers from project settings
   - Update nameservers in GoDaddy

2. **Or Use CNAME Record**
   - Get CNAME value from Vercel
   - Add CNAME record pointing to Vercel

3. **Verify**
   - Wait 24-48 hours for propagation
   - Check with: `nslookup yourdomain.com`

---

## 🔐 Security

- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set up Content Security Policy
- [ ] Validate form inputs
- [ ] Use environment variables for secrets
- [ ] Enable bot protection if needed

---

**Happy Deploying! 🎉**
