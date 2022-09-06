<template>
  <ul v-if="sidebarItems.length" class="sub-sidebar">
    <SidebarItem
      v-for="item in sidebarItems"
      :key="`${item.text}${item.link}`"
      :item="item"
    />
  </ul>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";

import { useSidebarItems } from "../composables";

const sidebarItems = useSidebarItems();
</script>

<style lang="postcss" scoped>
.sub-sidebar {
  @apply text-sm;
}
</style>