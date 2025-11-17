<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Elaitch Blog
          </h1>
          <p class="text-xl md:text-2xl text-gray-100">
            Insights on web development, AI, cybersecurity, and growing your business online
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div v-if="pending" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>

        <div v-else-if="error" class="text-center py-20">
          <p class="text-red-600 text-xl">Error loading blog posts. Please try again later.</p>
        </div>

        <div v-else-if="posts && posts.length > 0" class="max-w-6xl mx-auto">
          <!-- Filter Options -->
          <div class="mb-12 flex flex-wrap gap-4 justify-center">
            <button
              @click="selectedCategory = null"
              :class="[
                'px-6 py-2 rounded-full font-semibold transition-all duration-300',
                selectedCategory === null
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              All Posts
            </button>
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-6 py-2 rounded-full font-semibold transition-all duration-300',
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ category }}
            </button>
          </div>

          <!-- Posts Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              v-for="post in filteredPosts"
              :key="post.path"
              :title="post.title"
              :description="post.description"
              :date="post.date"
              :author="post.author"
              :category="post.category"
              :tags="post.tags"
              :slug="post.path.split('/').pop()"
            />
          </div>

          <!-- No Posts in Category -->
          <div v-if="filteredPosts.length === 0" class="text-center py-20">
            <p class="text-gray-600 text-xl">No posts found in this category.</p>
          </div>
        </div>

        <div v-else class="text-center py-20">
          <p class="text-gray-600 text-xl">No blog posts available yet. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p class="text-xl mb-8 text-gray-100">
            Get the latest insights on web development and digital strategy delivered to your inbox.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="px-6 py-3 rounded-lg text-gray-900 flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business Online?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you build a powerful web presence that drives real results.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/#contact"
              class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </NuxtLink>
            <NuxtLink
              to="/#work"
              class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              View Our Work
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Fetch all blog posts using Nuxt Content v3 API
const { data: posts, pending, error } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Extract unique categories
const categories = computed(() => {
  if (!posts.value) return []
  const cats = posts.value.map(post => post.category)
  return [...new Set(cats)]
})

// Category filter
const selectedCategory = ref<string | null>(null)

// Filtered posts
const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedCategory.value) return posts.value
  return posts.value.filter(post => post.category === selectedCategory.value)
})

// SEO Meta
useHead({
  title: 'Blog - Web Development Insights | Elaitch',
  meta: [
    {
      name: 'description',
      content: 'Expert insights on web development, AI, cybersecurity, and digital strategy for small businesses. Learn how to grow your online presence.'
    },
    {
      property: 'og:title',
      content: 'Elaitch Blog - Web Development & Digital Strategy Insights'
    },
    {
      property: 'og:description',
      content: 'Expert insights on web development, AI, cybersecurity, and digital strategy for small businesses.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})
</script>
