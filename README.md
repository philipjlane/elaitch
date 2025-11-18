# Elaitch - Professional Web Development

A modern, high-performance portfolio website for Elaitch, showcasing professional web development services by Phil Lane.

## Features

- 🚀 Built with **Nuxt 4** (compatibility mode)
- 💎 **TypeScript** for type safety
- 🎨 **TailwindCSS** for styling
- 📱 Fully **responsive** design
- ⚡ **Performance optimized** with excellent Core Web Vitals
- 🔍 **SEO optimized** with structured data, meta tags, and sitemap
- ♿ **Accessible** and WCAG compliant
- 🎯 Modern animations and transitions

## Tech Stack

- **Framework**: Nuxt 4
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **SEO**: @nuxtjs/seo
- **Images**: @nuxt/image

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your Resend API key

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

### Contact Form Setup

The contact form uses [Resend](https://resend.com) to send emails. To set it up:

1. Create a free account at [resend.com](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Copy `.env.example` to `.env` and add your API key:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```
4. (Optional) Update the `from` email address in `server/api/contact.post.ts` with your verified domain
   - By default, it uses Resend's test domain `onboarding@resend.dev`
   - For production, verify your domain in Resend and update the from address

The contact form will send emails to `hello@elaitch.dev` when someone submits the form.

## Development

The site is built with a component-based architecture:

- `app/components/` - Reusable Vue components
- `app/pages/` - Page components (file-based routing)
- `app/layouts/` - Layout wrappers
- `app/assets/css/` - Global styles and Tailwind config
- `public/` - Static assets

## SEO Features

- ✅ Semantic HTML structure
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Meta descriptions and titles
- ✅ Canonical URLs

## Performance Optimizations

- Code splitting and lazy loading
- Image optimization with @nuxt/image
- CSS purging with TailwindCSS
- Minification and compression
- Modern JavaScript output
- Efficient caching strategies

## Deployment

This site can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting provider

For SSR deployment:
- Node.js server
- AWS, Google Cloud, Azure
- Docker containers

## License

Copyright © 2024 Elaitch. All rights reserved.

## Contact

- Website: [https://elaitch.dev](https://elaitch.dev)
- Email: hello@elaitch.dev
