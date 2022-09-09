<template>
  <div class="neser-theme-reading-line" v-if="readingLine">
    <span class="inner">{{ `${(computedScrollRate * 100).toFixed(2)}%` }}</span>
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
      initMaxWidth();
    });
  else window.addEventListener("scroll", () => {});
}

function getComputedMaxWidth() {
  let html = document.documentElement,
    body = document.body;
  return html.clientWidth || body.clientWidth;
}

function initMaxWidth() {
  let lineBody = document.querySelector(".neser-theme-reading-line");
  lineBody.style.setProperty("--max-width", `${getComputedMaxWidth()}px`);
}

watch(computedScrollRate, () => {
  let lineBody = document.querySelector(".neser-theme-reading-line");

  lineBody.style.setProperty(
    "--reading-process",
    `${(computedScrollRate.value * 100).toFixed(2)}%`
  );
});

// 滚动显示进度功能

onMounted(() => {
  toggleListenScroll(true);
});
onUnmounted(() => {
  toggleListenScroll(false);
});
</script>

<style lang="postcss" scoped>
.neser-theme-reading-line {
  --reading-process: 0%;
  --max-width: 0px;

  width: var(--reading-process);
  max-width: var(--max-width);
  @apply fixed top-14 left-0 h-0.5 
  bg-green-300
  translate-y-0.5 transform z-20;
}
</style>