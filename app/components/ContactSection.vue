<template>
  <section id="contact" class="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="heading-lg text-gray-900 mb-4">Let's Build Something Great</h2>
          <p class="text-xl text-gray-600">
            Ready to start your project? Get in touch and let's discuss how we can work together.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="card">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label for="project" class="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  v-model="form.projectType"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="new-website">New Website</option>
                  <option value="web-app">Web Application</option>
                  <option value="redesign">Redesign/Modernization</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>

              <p v-if="submitMessage" :class="submitSuccess ? 'text-green-600' : 'text-red-600'" class="text-sm text-center">
                {{ submitMessage }}
              </p>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="card bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:hello@elaitch.dev" class="text-blue-600 hover:text-blue-700">
                    hello@elaitch.dev
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Response Time</h3>
                  <p class="text-gray-600">
                    Typically within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div class="card bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Free Consultation</h3>
                  <p class="text-gray-600">
                    30-minute discovery call to discuss your project
                  </p>
                </div>
              </div>
            </div>

            <div class="p-6 bg-gray-900 text-white rounded-xl">
              <h3 class="text-lg font-semibold mb-3">What happens next?</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  <span>I'll review your message within 24 hours</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  <span>We'll schedule a free consultation call</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  <span>I'll provide a detailed proposal and timeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  projectType: '',
  message: '',
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    })

    if (response.statusCode === 200) {
      submitSuccess.value = true
      submitMessage.value = 'Thank you! Your message has been sent. I\'ll get back to you soon.'

      // Reset form
      form.value = {
        name: '',
        email: '',
        projectType: '',
        message: '',
      }

      // Clear success message after 5 seconds
      setTimeout(() => {
        submitMessage.value = ''
      }, 5000)
    } else {
      submitSuccess.value = false
      submitMessage.value = 'There was an error sending your message. Please try again or email me directly.'
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    submitSuccess.value = false
    submitMessage.value = 'There was an error sending your message. Please try again or email me directly at hello@elaitch.dev.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
