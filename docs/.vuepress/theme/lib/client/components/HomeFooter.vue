<script setup lang="ts">
import { usePageFrontmatter, usePageData } from '@vuepress/client'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const footer = computed(() => frontmatter.value.footer)
const footerHtml = computed(() => frontmatter.value.footerHtml)
const pageData = usePageData()

console.log(pageData.value);

</script>

<template>
  <div class="neser-footer">12341541234125123421512412321312</div>
  <div class="footer" v-if="footer">
    <div v-if="footerHtml" class="footer" v-html="footer" />
    <div v-else class="footer" v-text="footer" />
  </div>
</template>

<style lang="postcss">
.neser-footer {
  @apply w-4 h-4 bg-gray-300;
}
</style>
