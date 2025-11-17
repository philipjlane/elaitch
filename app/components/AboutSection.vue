<template>
  <section id="about" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="animate-slide-up">
          <h2 class="heading-lg text-gray-900 mb-6">About Elaitch</h2>
          <div class="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Hi, I'm <strong class="text-gray-900">Phil Lane</strong>, the founder of Elaitch.
              With over a decade of experience in web development, I've helped businesses
              and startups build exceptional digital experiences.
            </p>
            <p>
              Elaitch is a fresh venture built on years of proven expertise. While the
              agency is brand new, it's backed by extensive experience working with
              modern frameworks, scalable architectures, and cutting-edge technologies.
            </p>
            <p>
              I believe in writing clean, maintainable code that not only solves today's
              problems but scales for tomorrow's growth. Every project is an opportunity
              to deliver excellence.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 font-medium hover:shadow-md transition-shadow"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="card bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
            <div class="text-3xl mb-2">💻</div>
            <h4 class="font-bold text-gray-900 mb-2">Modern Stack</h4>
            <p class="text-sm text-gray-600">
              Vue, Nuxt, TypeScript, Node.js, and more
            </p>
          </div>
          <div class="card bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
            <div class="text-3xl mb-2">⚡</div>
            <h4 class="font-bold text-gray-900 mb-2">Fast Delivery</h4>
            <p class="text-sm text-gray-600">
              Agile methodology with rapid iteration
            </p>
          </div>
          <div class="card bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
            <div class="text-3xl mb-2">🎯</div>
            <h4 class="font-bold text-gray-900 mb-2">Quality First</h4>
            <p class="text-sm text-gray-600">
              Tested, accessible, and production-ready code
            </p>
          </div>
          <div class="card bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
            <div class="text-3xl mb-2">🤝</div>
            <h4 class="font-bold text-gray-900 mb-2">Partnership</h4>
            <p class="text-sm text-gray-600">
              Collaborative approach to every project
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Vue.js',
  'Nuxt',
  'TypeScript',
  'Node.js',
  'React',
  'Next.js',
  'TailwindCSS',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
]
</script>
