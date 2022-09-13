<script setup>
</script>

<template>
  <main class="neser-theme-about-main">
    <slot />
  </main>
</template>

<style lang="postcss" scoped>
.neser-theme-about-main {
  @apply inline-flex items-center h-full p-4 px-8 max-w-xl;
  offset-anchor: 48px;
}
</style>