<template>
  <section id="work" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Featured Work</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A selection of recent projects showcasing expertise across different domains
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="card group cursor-pointer hover:scale-[1.02] transition-all duration-300"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
            <div class="text-6xl">{{ project.icon }}</div>
          </div>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
            >
              {{ tech }}
            </span>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {{ project.title }}
          </h3>

          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>

          <ul class="space-y-2 mb-6">
            <li
              v-for="feature in project.features"
              :key="feature"
              class="flex items-start text-sm text-gray-600"
            >
              <svg class="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
            View Details
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-6">
          Interested in seeing more examples or discussing your project?
        </p>
        <NuxtLink to="#contact" class="btn-primary text-lg">
          Let's Talk About Your Project
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    icon: '🛍️',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management, payment processing, and advanced analytics.',
    technologies: ['Vue.js', 'Nuxt', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Server-side rendering for optimal SEO',
      'Real-time inventory synchronization',
      'Multi-payment gateway integration',
      'Admin dashboard with analytics',
    ],
  },
  {
    icon: '📊',
    title: 'SaaS Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with real-time data visualization and custom reporting.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'D3.js', 'AWS'],
    features: [
      'Real-time data visualization',
      'Custom report builder',
      'Role-based access control',
      'API integration with 20+ services',
    ],
  },
  {
    icon: '🏥',
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant patient portal with appointment scheduling, telemedicine, and secure messaging.',
    technologies: ['Nuxt', 'TypeScript', 'MongoDB', 'WebRTC', 'Docker'],
    features: [
      'HIPAA-compliant security',
      'Video consultation integration',
      'Electronic health records',
      'Automated appointment reminders',
    ],
  },
  {
    icon: '🎓',
    title: 'Learning Management System',
    description: 'Interactive LMS with course creation, progress tracking, and gamification features.',
    technologies: ['Vue.js', 'Nuxt', 'Firebase', 'TailwindCSS'],
    features: [
      'Interactive course builder',
      'Progress tracking & certificates',
      'Gamification & achievements',
      'Mobile-responsive design',
    ],
  },
]
</script>
