<template>
  <div class="neser-theme-reading-line" v-if="readingLine">
    <span class="inner"></span>
  </div>
</template>

<script setup>
import { usePageData } from "@vuepress/client";
import { onMounted, onUnmounted, watch, ref } from "vue";

const page = usePageData();
const { readingLine } = page.value.themeDataPlugin;
const html = document.documentElement;
let computedScrollRate = ref(0);

function toggleListenScroll(bool) {
  if (bool)
    window.addEventListener("scroll", () => {
      computedScrollRate.value =
        html.scrollTop / (html.scrollHeight - html.clientHeight).toFixed(3);
    });
  else window.addEventListener("scroll", () => {});
}

watch(computedScrollRate, () => {
  console.log(computedScrollRate.value);
});

onMounted(() => {
  toggleListenScroll(true);
});
onUnmounted(() => {
  toggleListenScroll(false);
});
</script>

<style lang="postcss" scoped>
.neser-theme-reading-line {
  @apply absolute top-14 left-0 w-full h-1 bg-black;
}
</style>