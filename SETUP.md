# Setup & Customization Guide

Complete guide for setting up and customizing your portfolio website.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

### 4. Make Changes
Edit files and see changes in real-time with hot reload.

---

## 🎨 Customization

### Step 1: Update Personal Information

Edit `lib/constants.ts`:

```typescript
export const PERSON_INFO = {
  name: 'YOUR NAME',
  title: 'Your Title',
  tagline: 'Your Tagline',
  phone: '+91 XXXXXXXXXX',
  email: 'your@email.com',
  linkedin: 'your-linkedin-username',
  github: 'your-github-username',
  location: 'Your City, Country',
}
```

### Step 2: Update Profile Summary

Edit the `PROFILE_SUMMARY` in `lib/constants.ts`:

```typescript
export const PROFILE_SUMMARY = `Your professional summary here...`
```

### Step 3: Update Skills

Add your skills to `SKILLS` array:

```typescript
export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', ...],
  },
  // ... more categories
]
```

### Step 4: Update Education

Edit `EDUCATION` array:

```typescript
const EDUCATION = [
  {
    degree: 'Your Degree',
    specialization: 'Your Specialization',
    institution: 'Your Institution',
    period: 'Start–End',
    gpa: '3.8/4.0',
  },
]
```

### Step 5: Update Experience

Edit `EXPERIENCE` array:

```typescript
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    position: 'Your Position',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    description: 'Your job description',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      // ... more responsibilities
    ],
    highlights: ['Highlight 1', 'Highlight 2'],
  },
]
```

### Step 6: Add Projects

Edit `PROJECTS` array:

```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description',
    image: 'https://images.unsplash.com/photo-...',
    tech: ['Technology 1', 'Technology 2'],
    insights: [
      'Key insight 1',
      'Key insight 2',
    ],
    links: {
      github: 'https://github.com/...',
      case_study: 'https://...',
      dashboard: 'https://...',
    },
    category: 'analytics', // or 'ml', 'dashboard', 'other'
  },
]
```

### Step 7: Update Certifications

Edit `CERTIFICATIONS` array:

```typescript
export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'Certification Name',
    issuer: 'Issuer Name',
    date: '2024',
    credentialId: 'ABC123',
    credentialUrl: 'https://...',
  },
]
```

---

## 🎯 Color Customization

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    600: '#2563eb', // Change primary color
  },
  accent: {
    400: '#38bdf8', // Change accent color
  },
  dark: {
    bg: '#0F172A', // Background
    card: '#1e293b', // Card background
  },
}
```

---

## 🖼️ Add Resume PDF

1. **Create/Convert Resume to PDF**
   - Use Google Docs → Download as PDF
   - Or use tools like Canva

2. **Add to Project**
   - Place `resume.pdf` in `public/` folder
   - Path will be: `/resume.pdf`

3. **File Structure**
```
public/
├── resume.pdf
├── robots.txt
├── sitemap.xml
└── manifest.json
```

---

## 🖥️ Add Project Images

### Option 1: Use Placeholder Images
Use Unsplash URLs (as in current setup):
```
https://images.unsplash.com/photo-XXXXXXXXX?w=600&h=400&fit=crop
```

### Option 2: Upload Custom Images
1. Add images to `public/` folder
2. Update image paths in `PROJECTS`
```typescript
image: '/images/project-1.jpg'
```

### Option 3: Use External URLs
```typescript
image: 'https://your-cdn.com/image.jpg'
```

---

## 🎬 Update Typing Animation

Edit `TYPING_PHRASES` in `lib/constants.ts`:

```typescript
export const TYPING_PHRASES = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3',
  'Your Role 4',
]
```

---

## 📧 Email Setup (Optional)

### Using EmailJS:

1. **Install EmailJS**
```bash
npm install @emailjs/browser
```

2. **Update Contact Section**
Edit `components/ContactSection.tsx`:

```typescript
import emailjs from '@emailjs/browser'

// Initialize
emailjs.init('YOUR_PUBLIC_KEY')

// In handleSubmit:
await emailjs.send(
  'SERVICE_ID',
  'TEMPLATE_ID',
  formData
)
```

### Using Resend:

1. **Install Resend**
```bash
npm install resend
```

2. **Update API Route**
Edit `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'your-email@example.com',
    subject: `New message from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`,
  })
}
```

---

## 🌐 Add Analytics

### Google Analytics:

1. **Get Tracking ID**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get measurement ID

2. **Add to Layout**
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout() {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
```

### Vercel Analytics:
Automatically enabled when deployed on Vercel.

---

## 🔗 Social Media Links

Update social links in `lib/constants.ts`:

```typescript
export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/YOUR_USERNAME`,
    icon: 'Linkedin',
  },
  // ... more links
]
```

---

## 🎨 Font Customization

Change fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your Font', ...defaultTheme.fontFamily.sans],
}
```

Add custom fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');
```

---

## 📱 Mobile Testing

Test responsiveness:

1. **Use Browser Dev Tools**
   - Press F12 or Cmd+Shift+I
   - Toggle device toolbar

2. **Test Devices**
   - iPhone (375px)
   - iPad (768px)
   - Desktop (1024px+)

3. **Key Areas to Test**
   - Navigation menu
   - Hero section text
   - Project cards
   - Contact form

---

## 🚀 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Use appropriate dimensions

2. **Lazy Loading**
   - Images load as you scroll
   - Already implemented in components

3. **Code Splitting**
   - Next.js automatically splits code
   - Each component loads separately

4. **Monitor Performance**
```bash
npm run build
```

Then check build output for optimizations.

---

## 🔒 Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
PRIVATE_API_KEY=secret-key
```

Access in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## 📦 Adding Dependencies

Install new packages:
```bash
npm install package-name
```

Update lock file:
```bash
npm install
```

---

## 🧪 Testing Locally

### Build & Test
```bash
npm run build
npm run start
```

### Check for Errors
```bash
npm run lint
```

### Production Preview
Build matches production behavior closely.

---

## 🎯 Final Checklist

- [ ] Updated all personal information
- [ ] Added all projects with images
- [ ] Updated education and experience
- [ ] Added all certifications
- [ ] Customized colors and fonts
- [ ] Added resume PDF
- [ ] Tested all links
- [ ] Tested responsive design
- [ ] Checked performance
- [ ] Ready for deployment

---

## ❓ Common Issues

### Port Already in Use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Applying
- Clear browser cache
- Restart dev server
- Check Tailwind class names

### Links Not Working
- Check format of href attribute
- Ensure section IDs match navigation links
- Verify file paths for internal links

---

**Need more help? Check the main README.md or DEPLOYMENT.md** 📚
