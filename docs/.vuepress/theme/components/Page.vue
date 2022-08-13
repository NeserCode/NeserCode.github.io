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
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding: $navbarHeight 2rem;
  margin: 0 auto;
  max-width: $homePageWidth;
  display: block;
}
</style>
