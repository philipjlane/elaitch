<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <WorkSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
// SEO Meta tags
useSeoMeta({
  title: 'Elaitch - Professional Web Development by Phil Lane',
  description: 'Expert web development services specializing in Vue.js, Nuxt, and modern web applications. Years of experience delivering high-performance, SEO-optimized solutions.',
  ogTitle: 'Elaitch - Professional Web Development by Phil Lane',
  ogDescription: 'Expert web development services specializing in Vue.js, Nuxt, and modern web applications. Years of experience delivering high-performance, SEO-optimized solutions.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://elaitch.dev',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Elaitch - Professional Web Development by Phil Lane',
  twitterDescription: 'Expert web development services specializing in Vue.js, Nuxt, and modern web applications.',
})

// Structured Data for SEO
useSchemaOrg([
  {
    '@type': 'Organization',
    '@id': 'https://elaitch.dev/#organization',
    'name': 'Elaitch',
    'url': 'https://elaitch.dev',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://elaitch.dev/logo.png',
    },
    'description': 'Professional web development services with years of experience',
    'founder': {
      '@type': 'Person',
      'name': 'Phil Lane',
    },
  },
  {
    '@type': 'Person',
    '@id': 'https://elaitch.dev/#person',
    'name': 'Phil Lane',
    'jobTitle': 'Web Developer',
    'description': 'Experienced web developer specializing in modern web applications',
    'url': 'https://elaitch.dev',
    'sameAs': [
      'https://github.com/philipjlane',
      'https://linkedin.com/in/philipjlane',
    ],
    'knowsAbout': [
      'Web Development',
      'Vue.js',
      'Nuxt',
      'TypeScript',
      'Node.js',
      'Full-Stack Development',
      'SEO',
      'Performance Optimization',
    ],
  },
  {
    '@type': 'WebSite',
    '@id': 'https://elaitch.dev/#website',
    'url': 'https://elaitch.dev',
    'name': 'Elaitch',
    'description': 'Professional web development services',
    'publisher': {
      '@id': 'https://elaitch.dev/#organization',
    },
  },
  {
    '@type': 'ProfessionalService',
    'name': 'Elaitch Web Development',
    'url': 'https://elaitch.dev',
    'description': 'Professional web development services specializing in modern web applications, Vue.js, Nuxt, and full-stack solutions',
    'areaServed': 'Worldwide',
    'serviceType': 'Web Development',
    'provider': {
      '@id': 'https://elaitch.dev/#person',
    },
  },
])
</script>
