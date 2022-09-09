<template>
  <div class="neser-theme-reading-time" v-if="readingTime">
    <span class="main-body">
      📖 阅读这篇文章大概需要 {{ minutes }} 分钟 | 约 {{ words }} 词
    </span>
  </div>
</template>

<script setup>
import { usePageData } from "@vuepress/client";
const page = usePageData();
const { readingTime } = page.value.themeDataPlugin;
const { words, minutes } = page.value.readingTime;
</script>

<style lang="postcss" scoped>
.neser-theme-reading-time {
  @apply inline-flex items-center justify-center w-52 px-2 py-4
  text-sm font-thin;
}
</style>