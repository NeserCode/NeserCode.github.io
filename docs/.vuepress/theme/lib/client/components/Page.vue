<template>
  <main class="page">
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
  </main>
</template>

<script setup>
import PageMeta from "@theme/PageMeta.vue";
import PageNav from "@theme/PageNav.vue";

// import { usePageData, usePagesData, useSiteData } from "@vuepress/client";

// const pageData = usePageData();
// const pagesData = usePagesData();
// const siteData = useSiteData();

// console.log(pageData.value);
</script>

