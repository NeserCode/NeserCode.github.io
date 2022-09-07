<template>
  <div class="theme-default-content">
    <Content />
    <HomeArticle />
  </div>
</template>

<script setup>
import HomeArticle from "./HomeArticle.vue";
import { acticles } from "../../../../.temp/articles";

import { onMounted } from "vue";

onMounted(() => {
  console.log(acticles);
});
</script>
