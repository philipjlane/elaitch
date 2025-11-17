<template>
  <section id="work" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Capabilities</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Expertise in building modern web solutions tailored to your business needs
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article
          v-for="(capability, index) in capabilities"
          :key="capability.title"
          class="card group hover:scale-[1.02] transition-all duration-300"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div
            class="aspect-video rounded-lg mb-6 flex items-center justify-center overflow-hidden relative"
            :class="capability.gradient"
          >
            <div class="absolute inset-0 opacity-10">
              <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            <div class="relative z-10 text-white transform group-hover:scale-110 transition-transform duration-300">
              <component :is="capability.icon" />
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in capability.technologies"
              :key="tech"
              class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
            >
              {{ tech }}
            </span>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {{ capability.title }}
          </h3>

          <p class="text-gray-600 mb-4">
            {{ capability.description }}
          </p>

          <ul class="space-y-2">
            <li
              v-for="feature in capability.features"
              :key="feature"
              class="flex items-start text-sm text-gray-600"
            >
              <svg class="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </article>
      </div>

      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-6">
          Ready to bring your vision to life?
        </p>
        <NuxtLink to="#contact" class="btn-primary text-lg">
          Let's Discuss Your Project
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

// Icon components as functional components
const ShoppingCartIcon = () => h('svg', {
  class: 'w-20 h-20',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    d: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
  })
])

const ChartBarIcon = () => h('svg', {
  class: 'w-20 h-20',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  })
])

const ShieldCheckIcon = () => h('svg', {
  class: 'w-20 h-20',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  })
])

const AcademicCapIcon = () => h('svg', {
  class: 'w-20 h-20',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    d: 'M12 14l9-5-9-5-9 5 9 5z'
  }),
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  }),
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    d: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
  })
])

const capabilities = [
  {
    icon: ShoppingCartIcon,
    gradient: 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600',
    title: 'E-Commerce Solutions',
    description: 'Build robust online stores with seamless payment processing, inventory management, and analytics.',
    technologies: ['Vue.js', 'Nuxt', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Server-side rendering for optimal SEO',
      'Real-time inventory synchronisation',
      'Multi-payment gateway integration',
      'Admin dashboards with analytics',
    ],
  },
  {
    icon: ChartBarIcon,
    gradient: 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600',
    title: 'SaaS & Business Applications',
    description: 'Enterprise-grade applications with real-time data visualisation, custom reporting, and scalable architecture.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'D3.js', 'AWS'],
    features: [
      'Real-time data visualisation',
      'Custom report builders',
      'Role-based access control',
      'Third-party API integrations',
    ],
  },
  {
    icon: ShieldCheckIcon,
    gradient: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600',
    title: 'Secure Portals & Systems',
    description: 'Compliant, secure web applications for healthcare, finance, and other regulated industries.',
    technologies: ['Nuxt', 'TypeScript', 'MongoDB', 'WebRTC', 'Docker'],
    features: [
      'Industry-standard security compliance',
      'Video consultation capabilities',
      'Secure data management',
      'Automated notifications',
    ],
  },
  {
    icon: AcademicCapIcon,
    gradient: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
    title: 'Learning & Content Platforms',
    description: 'Interactive platforms with content management, progress tracking, and engaging user experiences.',
    technologies: ['Vue.js', 'Nuxt', 'Firebase', 'TailwindCSS'],
    features: [
      'Interactive content builders',
      'Progress tracking & certifications',
      'Gamification & engagement features',
      'Mobile-responsive design',
    ],
  },
]
</script>
