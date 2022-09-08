<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { usePageData } from '@vuepress/client'
import { computed, onMounted } from 'vue'

const page = usePageData()

const prevNavLink = computed(() => page.value.prev)
const nextNavLink = computed(() => page.value.next)

onMounted((): void => {
  console.log(prevNavLink, nextNavLink);
})
</script>

<template>
  <nav v-if="prevNavLink || nextNavLink" class="page-nav">
    <p class="inner">
      <span v-if="prevNavLink" class="prev">
        <router-link :to="prevNavLink.path">{{
          prevNavLink.title
        }}</router-link>
      </span>

      <span v-if="nextNavLink.path" class="next">
        <router-link :to="nextNavLink.path">{{
          nextNavLink.title === "" ? 404 : nextNavLink.title
        }}</router-link>
      </span>
    </p>
  </nav>
</template>
