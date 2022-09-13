<script setup>
import { usePageData } from "@vuepress/client";
const pageData = usePageData();

const { adminInfo } = pageData.value.themeDataPlugin;
console.log(adminInfo);
</script>

<template>
  <aside class="neser-theme-about-sidebar">
    <div class="details" v-if="adminInfo.display">
      <span class="avatarArea">
        <img :src="adminInfo.avatar" alt="avatar" />
      </span>
      <span class="username">{{ adminInfo.username }}</span>
      <span class="moto">{{ adminInfo.moto }}</span>
    </div>
  </aside>
</template>

<style lang="postcss" scoped>
.neser-theme-about-sidebar {
  @apply sm:hidden inline-flex px-4 py-2 items-start;
}

.details,
.details span {
  @apply flex justify-center text-center;
}
.details {
  @apply sticky justify-start text-left top-24 flex-col max-h-min;
}
.avatarArea {
  @apply w-36 h-36 overflow-hidden rounded-full;
}
.avatarArea img {
  @apply inline-block w-full h-full;
}
</style>