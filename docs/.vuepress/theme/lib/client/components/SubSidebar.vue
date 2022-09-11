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
  @apply sticky inline-flex pr-4 w-56 text-sm transition-all rounded py-2 border
  bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-700 bg-opacity-80 dark:bg-opacity-30 backdrop-blur
  overflow-scroll overflow-x-hidden;
  max-height: calc(100vh - 4rem - 12rem);
}
</style>

<style lang="postcss">
.sidebar-item-children
  .sidebar-item-children
  .sidebar-item:not(.sidebar-heading).active::after {
  content: "👀";
  @apply inline-flex items-center transform;
}
</style>