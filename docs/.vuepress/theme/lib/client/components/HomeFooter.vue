<script setup lang="ts">
import { usePageFrontmatter, usePageData, PageData } from '@vuepress/client'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const pageData = usePageData<PageData>()
const footerDisplay = computed(() => frontmatter.value.footer || pageData.value.themeDataPlugin.footer.display)
const footerHtml = computed(() => frontmatter.value.footerHtml ?? frontmatter.value.footer)

const { year, copyright, themeInfoDisplay } = pageData.value.themeDataPlugin.footer

</script>

<template>
  <footer class="neser-footer-home" v-if="footerDisplay">
    <div v-if="footerHtml" v-html="footerHtml" />
    <div v-else class="neser-footer-body">
      <span class="normal-info">
        <span class="year">© {{ year }}</span>
        <span class="copyright" v-html="copyright"></span>
      </span>
      <span class="theme-info" v-if="themeInfoDisplay">
        Theme By NeserCode
      </span>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
:deep(a) {
  @apply underline;
}

.neser-footer-home {
  @apply inline-flex w-full h-full justify-center items-center my-8;
}

.neser-footer-body {
  @apply inline-flex flex-col justify-center items-center;
}

.normal-info {
  @apply inline-flex items-center px-2 pt-1.5 relative border-t border-gray-600;
}
.normal-info::after {
  content: " ";
  @apply inline-block w-5 h-5 rounded-full absolute top-0 left-1/2 border-8
  transform -translate-y-2.5 -translate-x-1/2
  bg-gray-600 border-white dark:border-gray-800;
}
.normal-info .year,
.normal-info .copyright {
  @apply p-1;
}
.year {
  @apply font-semibold;
}

.theme-info {
  @apply font-semibold;
}
</style>
