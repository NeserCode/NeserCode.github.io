<template>
  <div class="neser-theme-reading-line" v-if="readingLine" />
</template>

<script setup>
import { usePageData } from "@vuepress/client";
import { onMounted } from "vue";

const page = usePageData();
const { readingLine } = page.value.themeDataPlugin;

onMounted(() => {
  console.log(readingLine, page.value);
});
</script>