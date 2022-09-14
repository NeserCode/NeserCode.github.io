<script setup>
import AboutSidebar from "./AboutSidebar.vue";
import AboutMain from "./AboutMain.vue";
import SubSidebar from "./SubSidebar.vue";
import PageFooter from "./PageFooter.vue";
import PageReadingTime from "./PageReadingTime.vue";

import { ref, onMounted, onUnmounted } from "vue";

const sidebarContainer = ref(null);
const mainTextBodyWidth = 660;
const sideOffset = 60;

const resizeWatcher = new ResizeObserver((element) => {
  let containerWidth = Math.floor(
    Number(
      window.getComputedStyle(sidebarContainer.value).width.replace("px", "")
    )
  );
  let screenWidth = element[0].contentRect.width;

  let computedRightMargin =
    (screenWidth - mainTextBodyWidth) / 2 -
    sideOffset -
    (containerWidth === NaN ? 0 : containerWidth);

  sidebarContainer.value.style.right = `${computedRightMargin}px`;
});

onMounted(() => {
  resizeWatcher.observe(document.body);
});
onUnmounted(() => {
  resizeWatcher.disconnect();
});
</script>

<template>
  <main class="page">
    <div class="content-container">
      <div class="theme-default-content">
        <about-sidebar />
        <about-main>
          <Content />
        </about-main>
      </div>
      <PageFooter />
    </div>
    <div class="sidebar-container" ref="sidebarContainer">
      <page-reading-time />
      <sub-sidebar />
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.content-container {
  @apply text-center;
}
.theme-default-content {
  @apply inline-flex;
}
</style>