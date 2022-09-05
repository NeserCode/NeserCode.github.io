<template>
  <main class="page">
    <slot name="top" />
    <!-- <Toc /> -->
    <side-anchor />
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
import SideAnchor from "./SideAnchor.vue";

// import { usePageData, usePagesData, useSiteData } from "@vuepress/client";

// const pageData = usePageData();
// const pagesData = usePagesData();
// const siteData = useSiteData();

// console.log(pageData.value);
</script>

