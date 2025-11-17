<template>
  <div class="min-h-screen bg-white">
    <div v-if="pending" class="flex justify-center items-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <div v-else-if="error" class="container mx-auto px-4 py-20 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
      <p class="text-xl text-gray-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
      <NuxtLink
        to="/blog"
        class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Back to Blog
      </NuxtLink>
    </div>

    <article v-else-if="post" class="pb-20">
      <!-- Header -->
      <header class="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-10"></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto">
            <NuxtLink
              to="/blog"
              class="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </NuxtLink>

            <div class="flex items-center gap-4 mb-6">
              <span class="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white text-blue-600">
                {{ post.category }}
              </span>
              <span class="text-white">
                {{ formattedDate }}
              </span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {{ post.title }}
            </h1>

            <p class="text-xl md:text-2xl text-gray-100 mb-8">
              {{ post.description }}
            </p>

            <div class="flex items-center text-white">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                  <span class="text-2xl">✍️</span>
                </div>
                <div>
                  <p class="font-semibold">{{ post.author }}</p>
                  <p class="text-sm text-gray-200">Web Development Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg prose-blue max-w-none">
            <ContentRenderer :value="post" class="blog-content" />
          </div>

          <!-- Tags -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Author Bio -->
          <div class="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <div class="flex items-start gap-6">
              <div class="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span class="text-4xl">👨‍💻</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">About {{ post.author }}</h3>
                <p class="text-gray-700 mb-4">
                  Phil Lane is the founder of Elaitch, a web development agency dedicated to helping small businesses thrive online.
                  With over 10 years of experience, Phil specialises in creating high-performance websites that deliver measurable results.
                </p>
                <NuxtLink
                  to="/#contact"
                  class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Get in touch
                  <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Related Posts -->
          <div v-if="relatedPosts && relatedPosts.length > 0" class="mt-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlogCard
                v-for="relatedPost in relatedPosts"
                :key="relatedPost.stem"
                :title="relatedPost.title"
                :description="relatedPost.description"
                :date="relatedPost.date"
                :author="relatedPost.author"
                :category="relatedPost.category"
                :tags="relatedPost.tags"
                :slug="relatedPost.stem.split('/').pop()"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p class="text-xl mb-8 text-gray-100">
              Let's discuss how we can help you achieve your web development goals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/#contact"
                class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Read More Articles
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Fetch all blog posts and find the one matching this slug
const { data: allPosts, pending, error} = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').all()
)

const post = computed(() => {
  if (!allPosts.value) return null
  return allPosts.value.find(p => p.stem === `blog/${slug}` || p.stem.endsWith(`/${slug}`) || p.stem === slug)
})

// Fetch all posts for related posts filtering
const { data: allPostsForRelated } = await useAsyncData(`related-${slug}`, () =>
  queryCollection('blog').all()
)

// Filter related posts (same category, excluding current post)
const relatedPosts = computed(() => {
  if (!post.value || !allPostsForRelated.value) return []
  return allPostsForRelated.value
    .filter(p => p.category === post.value.category && p.stem !== post.value.stem)
    .slice(0, 2)
})

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  const date = new Date(post.value.date)
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// SEO Meta
useHead(() => ({
  title: post.value ? `${post.value.title} | Elaitch Blog` : 'Blog Post | Elaitch',
  meta: [
    {
      name: 'description',
      content: post.value?.description || 'Read our latest insights on web development and digital strategy.'
    },
    {
      property: 'og:title',
      content: post.value?.title || 'Blog Post'
    },
    {
      property: 'og:description',
      content: post.value?.description || ''
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'article:published_time',
      content: post.value?.date || ''
    },
    {
      property: 'article:author',
      content: post.value?.author || 'Phil Lane'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
}))
</script>

<style>
/* Blog content styling */
.blog-content {
  @apply text-gray-800;
}

.blog-content h1 {
  @apply text-4xl font-bold text-gray-900 mt-12 mb-6;
}

.blog-content h2 {
  @apply text-3xl font-bold text-gray-900 mt-10 mb-5;
}

.blog-content h3 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.blog-content h4 {
  @apply text-xl font-bold text-gray-900 mt-6 mb-3;
}

.blog-content p {
  @apply text-lg leading-relaxed mb-6 text-gray-700;
}

.blog-content ul,
.blog-content ol {
  @apply mb-6 ml-6;
}

.blog-content li {
  @apply mb-3 text-lg text-gray-700;
}

.blog-content ul li {
  @apply list-disc;
}

.blog-content ol li {
  @apply list-decimal;
}

.blog-content a {
  @apply text-blue-600 hover:text-blue-700 underline font-medium;
}

.blog-content strong,
.blog-content b {
  @apply font-bold text-gray-900;
}

.blog-content em,
.blog-content i {
  @apply italic;
}

.blog-content blockquote {
  @apply border-l-4 border-blue-600 pl-6 py-2 my-6 italic text-gray-700 bg-blue-50 rounded-r;
}

.blog-content code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600;
}

.blog-content pre {
  @apply bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto;
}

.blog-content pre code {
  @apply bg-transparent text-gray-100 p-0;
}

.blog-content hr {
  @apply my-12 border-gray-300;
}

.blog-content img {
  @apply rounded-lg my-8 shadow-lg;
}

.blog-content table {
  @apply w-full mb-6 border-collapse;
}

.blog-content th {
  @apply bg-gray-100 font-bold p-3 text-left border border-gray-300;
}

.blog-content td {
  @apply p-3 border border-gray-300;
}
</style>
