<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <span class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            elaitch
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="#contact" class="btn-primary">
            Get In Touch
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="md:hidden pb-4">
          <div class="flex flex-col space-y-3">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {{ item.name }}
            </NuxtLink>
            <NuxtLink to="#contact" @click="mobileMenuOpen = false" class="btn-primary mt-2">
              Get In Touch
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

// Close mobile menu on route change
watch(() => mobileMenuOpen.value, () => {
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
