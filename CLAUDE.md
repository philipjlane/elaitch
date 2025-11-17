# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Elaitch is a professional web development portfolio/agency website built with Nuxt 4, featuring a blog powered by Nuxt Content v3. The site showcases web development services by Phil Lane and targets small business clients.

**Tech Stack**: Nuxt 4 (compatibility mode), Vue 3, TypeScript (strict), TailwindCSS, Nuxt Content v3

**Contact**: hello@elaitch.dev | https://elaitch.dev

## Development Commands

```bash
# Install dependencies (runs postinstall: nuxt prepare)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Generate static site (SSG)
npm run generate
```

**Note**: There are no test, lint, or format commands configured in this project.

## Architecture

### Directory Structure

```
app/
├── components/       # Self-contained section components (Hero, Services, About, etc.)
├── pages/           # File-based routing
│   ├── index.vue    # Homepage (composed of section components)
│   └── blog/
│       ├── index.vue       # Blog listing
│       └── [slug].vue      # Dynamic blog post pages
├── layouts/
│   └── default.vue  # Shared layout with header/footer
└── assets/css/
    └── main.css     # Global styles with Tailwind layers

content/
└── blog/            # Markdown blog posts with frontmatter

public/              # Static assets (sitemap.xml, _robots.txt, etc.)
```

### Routing Strategy

- **Homepage** (`/`): Single-page design with hash navigation (`#services`, `#about`, `#contact`)
- **Blog Index** (`/blog`): Lists all blog posts with filtering by category
- **Blog Posts** (`/blog/[slug]`): Dynamic routes for individual posts
- File-based routing is automatic via Nuxt's `pages/` directory

### Component Architecture

- **Section-based Components**: Homepage is composed of reusable section components (HeroSection, ServicesSection, AboutSection, etc.)
- **Composition API**: All components use `<script setup>` (Vue 3 Composition API)
- **Self-contained**: Each component manages its own state and styling
- **Naming Convention**: PascalCase for components, descriptive names

## Nuxt Content Collections (v3)

**CRITICAL**: This project uses Nuxt Content v3 Collections API, NOT the legacy `queryContent()` API.

### Content Configuration

Content structure is defined in [content.config.ts](content.config.ts) using Zod schemas:

```typescript
collections: {
  blog: defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      author: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      image: z.string().optional(),
    })
  })
}
```

### Querying Content

**Use `queryCollection()` instead of `queryContent()`**:

```typescript
// Correct (v3 Collections API)
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

// Incorrect (legacy API - will not work)
const { data: posts } = await queryContent('blog').find()
```

### Blog Post Structure

All blog posts in `content/blog/*.md` must include frontmatter:

```yaml
---
title: Post Title
description: Post description
date: 2024-01-01
author: Author Name
category: Category Name
tags: [tag1, tag2]
image: /images/post.jpg  # Optional
---
```

## SEO Implementation

SEO is implemented per-page using Nuxt composables:

### Page-level SEO

```typescript
// Set page title and meta
useHead({
  title: 'Page Title',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})

// Set Open Graph and Twitter Cards
useSeoMeta({
  ogTitle: 'Page Title',
  ogDescription: 'Page description',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})
```

### Structured Data

JSON-LD structured data is implemented in page components using `useHead()` with `<script type="application/ld+json">` blocks. See [app/pages/index.vue](app/pages/index.vue) for examples of Organization, Person, WebSite, and ProfessionalService schemas.

### Static SEO Files

- **Sitemap**: [public/sitemap.xml](public/sitemap.xml)
- **Robots**: [public/_robots.txt](public/_robots.txt) (Nuxt convention with underscore)

## Styling with TailwindCSS

### Custom Design System

Extensive custom Tailwind configuration in [tailwind.config.js](tailwind.config.js):

**Color Palette**: Custom colors (primary/blue, accent/purple, coral/pink, teal) with shades from 50-950

**Custom Components** (defined in `@layer components` in [app/assets/css/main.css](app/assets/css/main.css)):
- `btn-primary`, `btn-secondary` - Button styles
- `card` - Card container styles
- `heading-xl`, `heading-lg`, `heading-md` - Heading utilities
- `section-padding` - Consistent section spacing
- `container-custom` - Custom container widths

**Custom Animations**: `gradient`, `glow`, `fade-in`, `slide-up`, `slide-in-right` (defined in Tailwind config)

**Typography**: Custom font family "Space Grotesk" for sans and display

### Styling Patterns

- **Utility-first approach**: Use Tailwind utilities directly in templates
- **Responsive design**: Mobile-first with responsive breakpoints (sm, md, lg, xl, 2xl)
- **Gradient overlays**: Common pattern for visual depth on hero sections
- **Group hover effects**: Interactive elements use group-hover for coordinated animations
- **Scoped styles**: Use `<style scoped>` sparingly, only when Tailwind utilities are insufficient

## TypeScript Configuration

- **Strict mode enabled**: `typescript.strict: true` in [nuxt.config.ts](nuxt.config.ts)
- **Type checking disabled**: `typescript.typeCheck: false` for faster builds (no runtime type checking)
- Extends `.nuxt/tsconfig.json` (auto-generated by Nuxt)
- Use `vue-tsc` for manual type checking if needed

## Data Fetching Patterns

```typescript
// Server-side data fetching with useAsyncData
const { data, pending, error } = await useAsyncData('unique-key', async () => {
  return await queryCollection('blog').all()
})

// Client-side computed filtering
const filteredPosts = computed(() => {
  if (!selectedCategory.value) return posts.value
  return posts.value?.filter(post => post.category === selectedCategory.value)
})
```

Always provide:
- Unique key for `useAsyncData` to avoid conflicts
- Proper error handling with `error` state
- Loading states with `pending` state

## State Management

No global state management (Pinia/Vuex) is configured. Use:
- `ref()` for local component state
- `computed()` for derived state
- Props for parent-child communication
- Composables for shared logic (if needed)

## British English

All content uses British English spelling:
- colour (not color)
- optimisation (not optimization)
- analyse (not analyze)
- etc.

Maintain this convention when adding new content or copy.

## Performance Considerations

- **Image Optimization**: Use `@nuxt/image` module for automatic optimization
- **Lazy Loading**: Async components are automatically code-split by Nuxt
- **CSS Purging**: TailwindCSS automatically purges unused styles in production
- **Build Output**: `.output/` directory contains production build
- **Static Assets**: Place in `public/` for direct access without processing

## Deployment

The site supports both SSG (Static Site Generation) and SSR (Server-Side Rendering):

**Static (SSG)**: Run `npm run generate` → deploy `.output/public/` to any static host (Vercel, Netlify, Cloudflare Pages)

**Server (SSR)**: Run `npm run build` → deploy `.output/` to Node.js server or serverless platform

## Important Notes

- **Nuxt 4 Compatibility Mode**: Using `compatibilityDate: '2025-11-01'` in config
- **No Testing**: No test framework configured (consider adding Vitest if needed)
- **No Linting**: No ESLint/Prettier configured
- **Build Directory**: `.nuxt/` is auto-generated and git-ignored
- **Content Database**: `.data/` directory contains SQLite database for Nuxt Content (git-ignored)
