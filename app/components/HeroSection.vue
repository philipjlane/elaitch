<template>
  <section class="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center">
        <div class="animate-slide-up">
          <h1 class="heading-xl text-gray-900 mb-6 leading-[1.1]">
            Build Your Vision with
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
              Elaitch
            </span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            Professional web development services by Phil Lane.
            Specializing in modern, high-performance web applications
            with exceptional user experiences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink to="#contact" class="btn-primary text-lg px-8 py-4">
              Start Your Project
            </NuxtLink>
            <NuxtLink to="#work" class="btn-secondary text-lg px-8 py-4">
              View My Work
            </NuxtLink>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="animate-fade-in">
            <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2 tracking-tight">
              {{ stat.value }}
            </div>
            <div class="text-sm md:text-base text-gray-600 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Satisfaction Rate' },
]
</script>
