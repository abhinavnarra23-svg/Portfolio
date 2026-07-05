# Narra Abhinav - Portfolio Website

A modern, premium-looking portfolio website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Minimalistic and premium aesthetic with dark mode by default
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Animations**: Smooth animations powered by Framer Motion
- **Typing Effect**: Dynamic typing animation in hero section
- **Particle Background**: Interactive particle background with canvas
- **Scroll Progress**: Visual scroll progress indicator
- **Project Filtering**: Filter projects by category
- **Contact Form**: Functional contact form with email integration
- **Social Integration**: LinkedIn, email, and phone links
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and core web vitals

## 🛠 Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide Icons**: Beautiful SVG icons
- **Canvas API**: Particle background animation

### UI Components
- Custom designed components
- Glassmorphism effects
- Gradient backgrounds
- Smooth transitions and hover effects

## 📋 Sections

1. **Hero**: Introduction with typing effect and CTA buttons
2. **About**: Profile summary, education, and highlights
3. **Skills**: Technical skills with proficiency levels
4. **Experience**: Professional experience timeline
5. **Projects**: Featured projects with filtering
6. **Certifications**: Professional certifications and ongoing learning
7. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── HeroSection.tsx      # Hero section
│   ├── AboutSection.tsx     # About section
│   ├── SkillsSection.tsx    # Skills section
│   ├── ExperienceSection.tsx # Experience section
│   ├── ProjectsSection.tsx  # Projects section
│   ├── CertificationsSection.tsx # Certifications
│   ├── ContactSection.tsx   # Contact section
│   ├── Footer.tsx           # Footer
│   ├── ScrollProgressBar.tsx # Scroll progress
│   ├── ParticlesBackground.tsx # Particles
│   └── index.ts             # Barrel export
├── lib/
│   ├── constants.ts         # Portfolio data
│   ├── types.ts             # Type definitions
│   └── utils.ts             # Utility functions
├── public/
│   └── resume.pdf           # Resume file
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Color Scheme

- **Primary**: #2563EB (Blue)
- **Accent**: #38BDF8 (Sky Blue)
- **Background**: #0F172A (Dark Blue)
- **Cards**: #1e293b (Slate)
- **Border**: #334155 (Slate)

## 🔧 Customization

### Update Portfolio Data

Edit `lib/constants.ts` to customize:
- Personal information
- Skills and expertise
- Education details
- Work experience
- Projects
- Certifications

### Modify Colors

Edit `tailwind.config.ts` to change:
- Primary and accent colors
- Font families
- Animation timings
- Box shadows

### Add New Sections

1. Create a new component in `components/`
2. Export it from `components/index.ts`
3. Import and use it in `app/page.tsx`

## 📱 Responsive Design

- **Mobile**: Single column layout with optimized spacing
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full 3-column grids and complex layouts

## ⚡ Performance Optimizations

- Lazy loading images
- Code splitting with Next.js
- CSS optimization with TailwindCSS
- Minimal JavaScript with static generation
- Image compression and optimization

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify**: Connect repository directly
- **GitHub Pages**: Configure for static export
- **Traditional Hosting**: Run `npm run build` and deploy `out/` folder

## 📞 Contact Information

- **Email**: abhinavnarra23@gmail.com
- **Phone**: +91 7416541884
- **LinkedIn**: [linkedin.com/in/abhinav-narra](https://linkedin.com/in/abhinav-narra)

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

Design inspiration from:
- Apple
- Linear
- Vercel
- Stripe

## 📈 Future Enhancements

- [ ] Blog section
- [ ] Dark/Light mode toggle persistence
- [ ] Analytics integration
- [ ] Email backend integration
- [ ] Multi-language support
- [ ] CMS integration

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**
