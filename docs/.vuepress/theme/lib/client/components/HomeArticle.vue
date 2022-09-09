<template>
  <div class="neser-theme-article-list">
    <div
      class="neser-theme-article-body"
      v-for="(item, index) in acticles"
      :key="item.key"
    >
      <div class="neser-theme-article-title">
        <router-link :to="item.path" class="title-wrapper"
          ><span class="innerTitle">{{ item.title }}</span>
        </router-link>
      </div>
      <div class="neser-theme-article-detail">
        <span class="submitDate" v-if="item.date">{{ item.date }}</span>
        <div class="tags" v-if="item.frontmatter.tag">
          <span
            class="tag"
            v-for="tag in item.frontmatter.tag"
            :title="tag"
            :key="tag"
            >{{ tag }}</span
          >
        </div>
      </div>
      <div class="neser-theme-article-excerpt">
        <span class="innerExcerpt">{{ getComputedExcerpt(item) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { acticles as rawActicles } from "../../../../.temp/articles";

import { onMounted, computed } from "vue";

function useActicles(items = []) {
  // 过滤首页
  items = items.filter((item) => !item.frontmatter.home);
  // 过滤无题页面
  return items.filter((item) => item.title !== "");
}

const acticles = useActicles(rawActicles);

onMounted(() => {
  console.log(acticles);
});

function getComputedExcerpt(item) {
  let stringfiedExcerpt = item.excerpt
    .replace(/<[^>]*>/g, "")
    .replace("# ", "");

  // 删去标题
  if (stringfiedExcerpt.indexOf(item.title) === 0)
    stringfiedExcerpt = stringfiedExcerpt.replace(`${item.title}\n`, "");

  // 空摘要处理
  if (stringfiedExcerpt === "" || stringfiedExcerpt === undefined)
    stringfiedExcerpt = "点击文章标题查看更多内容";

  // 摘要省略号处理
  stringfiedExcerpt += "......";

  return stringfiedExcerpt;
}
</script>

<style lang="postcss" scoped>
.neser-theme-article-list {
  @apply inline-flex  flex-col justify-center w-full py-16 lg:px-16 sm:px-0;
}
.neser-theme-article-body {
  @apply inline-flex flex-col justify-center w-full px-6 py-4 my-4 rounded border
  bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-700 bg-opacity-80 dark:bg-opacity-30 backdrop-blur;
}

.neser-theme-article-title {
  @apply inline-flex pb-1.5
  text-ellipsis text-2xl font-semibold items-center;
}
.neser-theme-article-title .title-wrapper {
  @apply no-underline;
}

.neser-theme-article-detail {
  @apply inline-flex flex-col justify-center pb-1;
}
.neser-theme-article-detail .tags {
  @apply inline-flex items-center py-1 flex-wrap;
}
.tags .tag {
  @apply inline-block py-1 px-2 m-1 border rounded text-ellipsis overflow-hidden whitespace-nowrap
  font-thin
  border-gray-400 dark:border-gray-700 bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-300;
  max-width: 15ch;
  font-family: Consolas;
}
</style>