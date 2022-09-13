<script setup>
import AboutSidebar from "./AboutSidebar.vue";
import AboutMain from "./AboutMain.vue";
import SubSidebar from "./SubSidebar.vue";
</script>

<template>
  <div class="neser-theme-about">
    <about-sidebar />
    <about-main>
      <Content />
    </about-main>
    <div class="sub-container">
      <sub-sidebar />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.neser-theme-about {
  @apply relative flex py-32 max-w-4xl mx-auto;
}
.sub-container {
  @apply inline-flex items-start;
}
.sub-sidebar {
  @apply top-24;
}
</style>