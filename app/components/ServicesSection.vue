<template>
  <section id="services" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Services</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive web development solutions tailored to your needs
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="card group hover:scale-105 transition-transform duration-300"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="mb-4">
            <div
              class="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl"
            >
              {{ service.icon }}
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <ul class="space-y-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-start text-sm text-gray-600"
            >
              <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: '⚡',
    title: 'Full-Stack Development',
    description: 'End-to-end web application development with modern technologies and best practices.',
    features: [
      'Vue.js & Nuxt applications',
      'RESTful & GraphQL APIs',
      'Database design & optimization',
      'Cloud deployment & DevOps',
    ],
  },
  {
    icon: '🎨',
    title: 'Frontend Excellence',
    description: 'Beautiful, responsive user interfaces that engage and convert your audience.',
    features: [
      'Responsive design',
      'Component architecture',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
  },
  {
    icon: '🚀',
    title: 'Performance Optimization',
    description: 'Lightning-fast applications with optimal Core Web Vitals and user experience.',
    features: [
      'Code splitting & lazy loading',
      'Image optimization',
      'Caching strategies',
      'Lighthouse score optimization',
    ],
  },
  {
    icon: '🔍',
    title: 'SEO & Analytics',
    description: 'Get found online with technical SEO implementation and analytics integration.',
    features: [
      'Technical SEO optimization',
      'Schema markup & structured data',
      'Analytics & tracking setup',
      'Performance monitoring',
    ],
  },
  {
    icon: '🛡️',
    title: 'Security & Reliability',
    description: 'Build secure, stable applications with industry best practices.',
    features: [
      'Security audits',
      'Data encryption',
      'Authentication & authorization',
      'Error handling & logging',
    ],
  },
  {
    icon: '📱',
    title: 'Progressive Web Apps',
    description: 'Modern web applications that work offline and feel like native apps.',
    features: [
      'Service workers',
      'Offline functionality',
      'Push notifications',
      'App-like experience',
    ],
  },
]
</script>
