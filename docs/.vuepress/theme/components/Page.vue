<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <NeserFooter />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import NeserFooter from "@theme/components/NeserFooter.vue";

export default {
  components: { PageEdit, PageNav, NeserFooter },
  props: ["sidebarItems"],

  created() {
    this.$page.lastUpdated = "2022/08/18 13:00:00";
  },
};
</script>

<style lang="postcss" scoped>
.page {
  @apply text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-700 transition-all;
}

/* Markdown Style */
/* HeaderLines */
:deep(.theme-default-content > h1) {
  @apply text-3xl;
}
:deep(.theme-default-content > h2) {
  @apply text-2xl;
}
:deep(.theme-default-content > h3) {
  @apply text-xl;
}
:deep(.theme-default-content > h4),
:deep(.theme-default-content > h5),
:deep(.theme-default-content > h6) {
  @apply text-lg;
}

/* Anchor */
:deep(.theme-default-content > h1),
:deep(.theme-default-content > h1 a.header-anchor) {
  @apply transition-all transform;
}
:deep(.theme-default-content > h1 a.header-anchor),
:deep(.theme-default-content > h2 a.header-anchor),
:deep(.theme-default-content > h3 a.header-anchor),
:deep(.theme-default-content > h4 a.header-anchor),
:deep(.theme-default-content > h5 a.header-anchor),
:deep(.theme-default-content > h6 a.header-anchor) {
  @apply hidden opacity-0 justify-center items-center;
}
:deep(.theme-default-content > h1:hover a.header-anchor),
:deep(.theme-default-content > h2:hover a.header-anchor),
:deep(.theme-default-content > h3:hover a.header-anchor),
:deep(.theme-default-content > h4:hover a.header-anchor),
:deep(.theme-default-content > h5:hover a.header-anchor),
:deep(.theme-default-content > h6:hover a.header-anchor) {
  @apply inline-flex opacity-100;
}

/* Paragraphs */
:deep(.theme-default-content > p) {
  @apply text-lg my-2;
}

/* Special Formatter */
:deep(.theme-default-content > p > code),
:deep(.theme-default-content > ul li code) {
  @apply inline-flex items-center py-0.5 whitespace-nowrap 
  bg-black dark:bg-white bg-opacity-30 text-gray-800 dark:text-gray-100;
}
</style>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding: $navbarHeight 2rem;
  margin: 0 auto;
  max-width: $homePageWidth;
  display: block;
}
</style>
