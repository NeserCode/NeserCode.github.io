<script setup>
import HomeContent from "./HomeContent.vue";
import HomeFooter from "./HomeFooter.vue";
import HomeHitokoto from "./HomeHitokoto.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { debounce } from "ts-debounce";
const minScroll = ref(120);
const scrollDiff = ref(0);

function toggleListener(bool) {
  window.addEventListener(
    "scroll",
    bool
      ? debounce(() => {
          let scrolled =
            document.documentElement.scrollTop || document.body.scrollTop;
          let computedTop = document.querySelector(
            ".neser-theme-article-list"
          ).offsetTop;
          scrollDiff.value -= window.scrollY;
          console.log(scrolled, computedTop, scrollDiff.value);
          if (
            scrolled > minScroll.value &&
            scrolled <= computedTop &&
            scrollDiff.value < 0
          ) {
            window.scrollTo({
              top: computedTop,
              behavior: "smooth",
            });
            console.log("?");
          }
          scrollDiff.value = window.scrollY;
        }, 300)
      : () => {}
  );
}

onMounted(() => {
  toggleListener(true);
});
onUnmounted(() => {
  toggleListener(false);
});
</script>

<template>
  <main class="home">
    <HomeHitokoto />
    <HomeContent />
    <HomeFooter />
  </main>
</template>
