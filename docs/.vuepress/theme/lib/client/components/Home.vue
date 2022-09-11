<script setup>
import HomeContent from "./HomeContent.vue";
import HomeFooter from "./HomeFooter.vue";
import HomeHitokoto from "./HomeHitokoto.vue";

import { ref, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { debounce } from "ts-debounce";
const minScroll = ref(120);
const scrollDiff = ref(0);

const infferListener = debounce(() => {
  let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  let computedTop = document.querySelector(
    ".neser-theme-article-list"
  ).offsetTop;
  scrollDiff.value -= window.scrollY;
  if (
    scrolled > minScroll.value &&
    scrolled <= computedTop &&
    scrollDiff.value < 0
  )
    window.scrollTo({
      top: computedTop,
      behavior: "smooth",
    });

  scrollDiff.value = window.scrollY;
}, 300);

function toggleListener(bool) {
  if (bool) window.addEventListener("scroll", infferListener);
  else window.removeEventListener("scroll", infferListener);
}

onMounted(() => {
  toggleListener(true);
});
onBeforeRouteLeave(() => {
  toggleListener(false);
  console.log("watch");
});
</script>

<template>
  <main class="home">
    <HomeHitokoto />
    <HomeContent />
    <HomeFooter />
  </main>
</template>
