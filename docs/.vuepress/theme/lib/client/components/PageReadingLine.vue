<template>
  <div class="neser-theme-reading-line" v-if="readingLine">
    <span class="inner">{{ `${(computedScrollRate * 100).toFixed(2)}%` }}</span>
  </div>
</template>

<script setup>
import { usePageData } from "@vuepress/client";
import { onMounted, watch, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const page = usePageData();
const { readingLine } = page.value.themeDataPlugin;
const html = document.documentElement;
const computedScrollRate = ref(0);
const setTimer = ref(0);

const infferListener = () => {
  computedScrollRate.value =
    html.scrollTop / (html.scrollHeight - html.clientHeight).toFixed(3);
  initMaxWidth();
};

function toggleListenScroll(bool) {
  if (bool) window.addEventListener("scroll", infferListener);
  else window.removeEventListener("scroll", infferListener);
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
watch(computedScrollRate, () => {
  let lineBody = document.querySelector(".neser-theme-reading-line");

  if (lineBody.classList.contains("active")) clearTimeout(setTimer.value);
  else lineBody.classList.add("active");

  setTimer.value = setTimeout(() => {
    lineBody.classList.remove("active");
  }, 750);
});

onMounted(() => {
  toggleListenScroll(true);
});
onBeforeRouteLeave(() => {
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
  bg-green-300 dark:bg-green-600
  translate-y-0.5 transform z-10;
}

.neser-theme-reading-line .inner {
  @apply inline-flex items-center justify-center px-2 py-0.5 border rounded-br
  text-base font-semibold select-none
  bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-700 bg-opacity-80 dark:bg-opacity-30 backdrop-blur
  opacity-0 transition-all duration-500 transform translate-y-0.5;
}
.neser-theme-reading-line.active .inner {
  @apply opacity-100;
}
</style>