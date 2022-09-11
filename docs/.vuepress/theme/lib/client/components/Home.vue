<script setup>
import HomeContent from "./HomeContent.vue";
import HomeFooter from "./HomeFooter.vue";
import HomeHitokoto from "./HomeHitokoto.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { debounce } from "ts-debounce";
const minScroll = ref(200);

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
          if (scrolled > minScroll.value && scrolled <= computedTop)
            window.scrollTo({
              top: computedTop,
              behavior: "smooth",
            });
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
