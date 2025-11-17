<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow pt-16 md:pt-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>
