<template>
  <NuxtLink
    :to="`/blog/${slug}`"
    class="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
  >
    <div class="aspect-video overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
      <div class="h-full w-full flex items-center justify-center text-white text-4xl font-bold opacity-20">
        {{ categoryIcon }}
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
          {{ category }}
        </span>
        <span class="text-sm text-gray-500">
          {{ formattedDate }}
        </span>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {{ title }}
      </h3>

      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ description }}
      </p>

      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">
          By {{ author }}
        </span>

        <span class="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
          Read more
          <svg class="w-5 h-5 ml-1 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  slug: string
}

const props = defineProps<Props>()

const formattedDate = computed(() => {
  const date = new Date(props.date)
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const categoryIcon = computed(() => {
  const icons: Record<string, string> = {
    'Web Development': '🌐',
    'AI & Technology': '🤖',
    'Security': '🔒',
    'SEO': '📈',
    'Business': '💼'
  }
  return icons[props.category] || '📝'
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
