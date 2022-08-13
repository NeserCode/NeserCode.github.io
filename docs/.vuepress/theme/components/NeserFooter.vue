<template>
  <footer class="neser-footer">
    <div class="neser-copyright-info">
      <span
        class="neser-copyright-year"
        v-if="themeConfig.footer.display && themeConfig.footer.createYear"
        >{{ `©${themeConfig.footer.createYear}` }}</span
      >
      <span
        class="neser-copyright-text"
        v-if="themeConfig.footer.display"
        v-html="themeConfig.footer.copyrightInfo"
      ></span>
      <span class="neser-copyright-text" v-else>
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

.neser-footer .neser-copyright-info {
  @apply max-w-max h-full p-2 my-1 mx-auto
  border-t border-gray-400;
}
.neser-footer .neser-copyright-info .neser-copyright-year {
  @apply text-gray-400 font-semibold;
}
.neser-footer .neser-copyright-info .neser-copyright-text {
  @apply text-gray-400;
}

.neser-footer .neser-copyright-info .neser-copyright-text a[href] {
  @apply inline-block underline;
  text-underline-offset: 0.25rem;
}
</style>
