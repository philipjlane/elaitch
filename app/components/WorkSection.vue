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
          <div class="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
            <div class="text-6xl">{{ capability.icon }}</div>
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
const capabilities = [
  {
    icon: '🛍️',
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
    icon: '📊',
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
    icon: '🏥',
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
    icon: '🎓',
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
