<template>
  <div class="theme-default-content">
    <Content />
    <HomeArticle />
  </div>
</template>

<script setup>
import HomeArticle from "./HomeArticle.vue";
import { usePagesData, usePageData } from "@vuepress/client";
import { useRoute, useRouter } from "vue-router";

const $router = useRouter();
const $route = useRoute();
const pages = usePagesData();
const page = usePageData();

console.log($route, $router, pages.value, page.value);
</script>
