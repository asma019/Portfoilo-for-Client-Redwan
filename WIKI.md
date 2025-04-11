# MehediMS Portfolio Wiki

Welcome to the official Wiki for the NodeJs-Portfolio-Mehedi-Hasan project. This guide provides detailed documentation for setup, customization, and deployment.

## Table of Contents

- [Overview](#overview)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [Customization](#customization)
- [Deployment Options](#deployment-options)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [FAQ](#faq)

## Overview

MehediMS Portfolio is a modern, performance-optimized portfolio website built with Next.js 15 and Tailwind CSS. It features responsive design, dark/light mode, SEO optimization, and a fully functional contact form.

![Portfolio Preview](/public/images/socialshare.png)

### Key Features

- **Modern UI**: Clean interface with smooth animations
- **Dark/Light Mode**: Theme switcher with system preference detection
- **Responsive Design**: Seamless experience across all device sizes
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Complete metadata, OG tags, and structured data
- **SMTP Integration**: Functional contact form with email notifications
- **PWA Support**: Installable on mobile devices

## Installation Guide

### Prerequisites

Before you begin, ensure you have:
- Node.js 18.17.0 or later
- npm or yarn package manager
- Git installed

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan.git
   cd NodeJs-Portfolio-Mehedi-Hasan
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   # SMTP Configuration
   SMTP_HOST=your-smtp-server.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-password
   MAIL_FROM=your-email@example.com

   # Site Configuration
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the site**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server address | `send.one.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username | `hello@mehedims.com` |
| `SMTP_PASSWORD` | SMTP password | `your-password` |
| `MAIL_FROM` | Email sender address | `hello@mehedims.com` |
| `NEXT_PUBLIC_BASE_URL` | Base URL for your site | `https://mehedims.com` |

### Next.js Configuration

The `next.config.js` file contains important settings for performance optimization:

```javascript
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos',
      pathname: '**',
    }],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: {
      cssModules: true,
      inlineFonts: true,
      minify: true
    },
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  allowedDevOrigins: ['hema.asiabio.link'],
};
```

## Customization

### Content Customization

Customize various sections by editing these files:

- **Personal Info**: `app/sections/Hero.tsx`
- **About Me**: `app/sections/About.tsx`
- **Work Experience**: `app/sections/Experience.tsx`
- **Projects**: `app/sections/Projects.tsx`
- **Testimonials**: `app/sections/Testimonials.tsx`
- **Contact Info**: `app/sections/Contact.tsx`

### Visual Customization

1. **Colors**: 
   Edit `tailwind.config.js` to change the color scheme
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: {...},
         secondary: {...}
       }
     }
   }
   ```

2. **Typography**: 
   Modify font settings in `app/layout.tsx`
   ```javascript
   const inter = Inter({ 
     subsets: ["latin"],
     display: 'swap',
     preload: true,
     fallback: ['system-ui', 'Arial', 'sans-serif'],
   });
   ```

3. **Dark Mode**: 
   Dark mode styling is controlled by `dark:` prefixed classes throughout the components

### Adding New Sections

1. Create a new component in `app/sections/`
2. Import and add it to `app/page.tsx`
3. Add a navigation link in `app/components/Navbar.tsx`

## Deployment Options

### Vercel Deployment (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with default settings

Vercel will automatically detect Next.js and deploy with optimal settings.

### PM2 Deployment on VPS/Dedicated Server

1. **Install PM2 globally**
   ```bash
   npm install -g pm2
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Create ecosystem.config.js file**
   ```javascript
   module.exports = {
     apps: [{
       name: 'portfolio',
       script: 'node_modules/next/dist/bin/next',
       args: 'start',
       instances: 'max',
       exec_mode: 'cluster',
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production',
         PORT: 3000,
         // Add your environment variables here
       }
     }]
   };
   ```

4. **Start with PM2**
   ```bash
   pm2 start ecosystem.config.js
   ```

5. **Configure PM2 to start on boot**
   ```bash
   pm2 startup
   pm2 save
   ```

### Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t portfolio .
   ```

2. **Run container**
   ```bash
   docker run -p 3000:3000 -d \
     -e SMTP_HOST=your-smtp-server.com \
     -e SMTP_PORT=587 \
     -e SMTP_USER=your-email@example.com \
     -e SMTP_PASSWORD=your-password \
     -e MAIL_FROM=your-email@example.com \
     -e NEXT_PUBLIC_BASE_URL=https://yourdomain.com \
     portfolio
   ```

### Nginx Reverse Proxy Configuration

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

## Troubleshooting

### Common Issues

#### Build Errors with CSS Optimization

If you encounter errors like `Cannot find module 'critters'`:

1. Install the missing package:
   ```bash
   npm install critters
   ```

2. Or modify `next.config.js` to disable CSS optimization:
   ```javascript
   experimental: {
     optimizeCss: false,
     // other settings...
   }
   ```

#### Cross-Origin Errors in Development

If you see warnings about cross-origin requests:

1. Update `next.config.js` with your specific domain:
   ```javascript
   allowedDevOrigins: ['yourdomain.com'],
   ```

#### Contact Form Not Sending Emails

1. Verify SMTP settings in `.env.local`
2. Check server logs for SMTP connection errors
3. Test with a service like Mailtrap.io for debugging

## Contributing

We welcome contributions to improve the portfolio template! Here's how to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Use TypeScript types appropriately
- Write clear commit messages
- Document changes in comments and README if necessary

## FAQ

### How do I update the profile image?

Replace the image at `/public/images/profile.jpeg` with your own photo. The image should ideally be square with dimensions of at least 500x500 pixels.

### How do I add a new project?

Edit the projects array in `app/sections/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your New Project",
    description: "Description of your project",
    image: "/images/your-project-image.jpg",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    liveUrl: "https://your-project-url.com",
    githubUrl: "https://github.com/yourusername/your-project"
  },
  // Other projects...
];
```

### How can I modify the navigation menu?

Edit the `navItems` array in `app/components/Navbar.tsx`:

```typescript
const navItems = [
  { label: "About", path: "#about" },
  { label: "Experience", path: "#experience" },
  // Add or modify menu items here
];
```

### Can I remove the dark mode toggle?

Yes. Modify the `ThemeProvider` in `app/layout.tsx` and remove the theme toggle button from the `Navbar.tsx` component.

---

This Wiki is a living document and will be updated as the project evolves. If you have questions or need help, please open an issue on GitHub.

⭐ **If you find this project helpful, please consider [giving it a star on GitHub](https://github.com/asma019/NodeJs-Portfolio-Mehedi-Hasan)!** ⭐ 