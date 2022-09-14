<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { usePageData } from "@vuepress/client";
const page = usePageData();
const { giscusOptions } = page.value.themeDataPlugin;

function getScriptElement(options) {
  const element = document.createElement("script");
  element.setAttribute("src", "https://giscus.app/client.js");
  element.setAttribute("data-repo", options.repo);
  element.setAttribute("data-repo-id", options.repoId);
  element.setAttribute("data-mapping", options.mapping);
  switch (options.mapping) {
    case "specific": //'specific' mapping does not require a category value
      element.setAttribute("data-term", options.term);
      break;
    case "number":
      element.setAttribute("data-term", options.term);
    // noinspection FallThroughInSwitchStatementJS
    default:
      element.setAttribute("data-category", options.category);
      element.setAttribute("data-category-id", options.categoryId);
      break;
  }
  element.setAttribute("data-reactions-enabled", options.reactions ? "1" : "0");
  element.setAttribute("data-emit-metadata", options.metadata ? "1" : "0");
  element.setAttribute("data-input-position", options.position);
  element.setAttribute("data-theme", options.theme);
  element.setAttribute("data-lang", options.lang);
  if (options.loading) {
    element.setAttribute("data-loading", "lazy");
  }
  element.setAttribute("crossorigin", "anonymous");
  element.toggleAttribute("async");
  return element;
}

const scriptElement = computed(() => getScriptElement(giscusOptions));

onMounted(() => {
  document.head.append(scriptElement.value);
});
onUnmounted(() => {
  document.head.removeChild(scriptElement.value);
});
</script>

<template>
  <div class="giscus" />
</template>

<style lang="postcss" scoped>
.giscus {
  @apply max-w-lg mx-auto;
}
</style>
