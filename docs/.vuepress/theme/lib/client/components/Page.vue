<template>
  <main class="page">
    <div class="sidebar-container">
      <sub-sidebar />
    </div>
    <slot name="top" />
    <!-- <Toc /> -->
    <div class="theme-default-content">
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />
    <slot name="bottom" />
    <PageFooter />
  </main>
</template>

<style lang="postcss" scoped>
.page {
  @apply relative;
}
.sidebar-container {
  @apply inline-block;
}
.sub-sidebar {
  @apply sticky inline-flex items-center justify-center top-16 right-0
  text-xs;
}

@media (max-width: 1050px) {
  .sidebar-container {
    @apply hidden;
  }
}
</style>

<script setup>
import PageMeta from "./PageMeta.vue";
import PageNav from "./PageNav.vue";
import PageFooter from "./PageFooter.vue";
// import SideAnchor from "./SideAnchor.vue";
import SubSidebar from "./SubSidebar.vue";
</script>

