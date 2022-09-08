<template>
  <div class="neser-theme-reading-line" v-if="readingLine" />
</template>

<script setup>
import { usePageData } from "@vuepress/client";
import { computed } from "vue";

const page = usePageData();
const { readingLine } = page.value.themeDataPlugin;

console.log(readingLine);
</script>