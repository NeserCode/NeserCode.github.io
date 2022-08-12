<template>
  <footer class="neser-footer">
    <div class="neser-copyright-info">
      <span
        v-if="themeConfig.footer.display && themeConfig.footer.createYear"
        >{{ `©${themeConfig.footer.createYear}` }}</span
      >
      <span
        v-if="themeConfig.footer.display"
        v-html="themeConfig.footer.copyrightInfo"
      ></span>
      <span v-else>
        {{ frontmatter.footer ?? "Power by VuePress and Theme by NeserCode" }}
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "NeserFooter",
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    siteInfo() {
      return this.$site;
    },
    themeConfig() {
      return this.$site.themeConfig;
    },
  },
  mounted() {
    console.log(this.siteInfo);
  },
};
</script>

<style lang="postcss">
.neser-footer {
  @apply w-full h-full;
}
</style>
