<template>
  <main class="page">
    <div class="content-container">
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
    </div>
    <div class="sidebar-container">
      <sub-sidebar />
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.page {
  @apply relative;
}
.sidebar-container {
  @apply absolute inline-block h-full top-0 right-0;
}
.sub-sidebar {
  @apply sticky inline-flex items-center justify-center top-24 right-0;
}

@media (max-width: 1150px) {
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

