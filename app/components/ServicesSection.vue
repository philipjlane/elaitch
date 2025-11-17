<template>
  <section id="services" class="section-padding relative overflow-hidden bg-white">
    <!-- Gradient overlay -->
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent-100/30 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-100/30 to-transparent rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16">
        <h2 class="heading-lg bg-gradient-to-r from-primary-700 via-accent-600 to-primary-700 bg-clip-text text-transparent mb-4">Services</h2>
        <p class="text-xl text-gray-700 max-w-2xl mx-auto">
          Comprehensive web development solutions tailored to your needs
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="card group hover:scale-105 transition-all duration-300 border border-transparent hover:border-accent-200/50 relative overflow-hidden"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Card gradient background -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative z-10">
            <div class="mb-4">
              <div
                :class="`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`"
              >
                {{ service.icon }}
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-start text-sm text-gray-600"
              >
                <svg class="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
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
    gradient: 'from-primary-500 to-primary-600',
    features: [
      'Vue.js & Nuxt applications',
      'RESTful & GraphQL APIs',
      'Database design & optimisation',
      'Cloud deployment & DevOps',
    ],
  },
  {
    icon: '🎨',
    title: 'Frontend Excellence',
    description: 'Beautiful, responsive user interfaces that engage and convert your audience.',
    gradient: 'from-accent-500 to-accent-600',
    features: [
      'Responsive design',
      'Component architecture',
      'Performance optimisation',
      'Cross-browser compatibility',
    ],
  },
  {
    icon: '🚀',
    title: 'Performance Optimisation',
    description: 'Lightning-fast applications with optimal Core Web Vitals and user experience.',
    gradient: 'from-coral-500 to-coral-600',
    features: [
      'Code splitting & lazy loading',
      'Image optimisation',
      'Caching strategies',
      'Lighthouse score optimisation',
    ],
  },
  {
    icon: '🔍',
    title: 'SEO & Analytics',
    description: 'Get found online with technical SEO implementation and analytics integration.',
    gradient: 'from-teal-500 to-teal-600',
    features: [
      'Technical SEO optimisation',
      'Schema markup & structured data',
      'Analytics & tracking setup',
      'Performance monitoring',
    ],
  },
  {
    icon: '🛡️',
    title: 'Security & Reliability',
    description: 'Build secure, stable applications with industry best practices.',
    gradient: 'from-primary-600 to-accent-500',
    features: [
      'Security audits',
      'Data encryption',
      'Authentication & authorisation',
      'Error handling & logging',
    ],
  },
  {
    icon: '📱',
    title: 'Progressive Web Apps',
    description: 'Modern web applications that work offline and feel like native apps.',
    gradient: 'from-accent-600 to-coral-500',
    features: [
      'Service workers',
      'Offline functionality',
      'Push notifications',
      'App-like experience',
    ],
  },
]
</script>
