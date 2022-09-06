<template>
  <main class="page">
    <slot name="top" />
    <!-- <Toc /> -->
    <!-- <side-anchor /> -->
    <sub-sidebar />
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

<script setup>
import PageMeta from "./PageMeta.vue";
import PageNav from "./PageNav.vue";
import PageFooter from "./PageFooter.vue";
// import SideAnchor from "./SideAnchor.vue";
import SubSidebar from "./SubSidebar.vue";
</script>

