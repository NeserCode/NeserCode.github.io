<template>
  <section class="side-anchor">
    <ul v-show="list.length > 0">
      <li
        v-for="(item, index) in list"
        :key="index"
        :style="{ 'padding-left': item.prefix }"
      >
        <a
          :href="item.href"
          :class="['side-anchor-link', { active: index === activeIndex }]"
        >
          {{ item.content }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { usePageData, usePageHeadTitle } from "@vuepress/client";

import { debounce } from "ts-debounce";

const title = ref("");
const activeIndex = ref(0);
const list = ref([]);

const $page = usePageData();
const $headTitle = usePageHeadTitle();

function getAnchorList() {
  if ($page.value.title === title.value && list.value.length > 0) return;
  title.value = $page.value.title;
  let dom_list = document.querySelectorAll(".header-anchor");
  if (dom_list.length === 0) {
    list.value = [];
    return;
  }

  let baseLine = Number(dom_list[0].parentNode.tagName.slice(1)) + 1;
  let tempList = Array().map.call(dom_list, (value) => ({
    content: value.parentNode.innerText.slice(1),
    href: value.href,
    prefix: (value.parentNode.tagName.slice(1) - baseLine) * 0.5 + "rem",
    offsetTop: value.parentNode.offsetTop,
    active: false,
  }));
  list.value = tempList;

  freshAnchor();
}

function freshAnchor() {
  if (document.title !== title.value) getAnchorList();
  let scrollTop = window.pageYOffset;
  let innerhHeight = window.innerHeight;
  let scope = [scrollTop, scrollTop + innerhHeight / 3];
  let middleLine = scrollTop + innerhHeight / 2;
  let tempList = list.value;
  let nextActive = -1;
  tempList.forEach((value, index) => {
    if (
      nextActive === -1 &&
      value.offsetTop > scope[0] &&
      value.offsetTop < scope[1]
    )
      nextActive = index;
    if (nextActive === -1 && middleLine < value.offsetTop)
      nextActive = index - 1;
  });
  if (nextActive === -1 || activeIndex === nextActive) return;
  tempList.forEach((value) => (value.active = false));
  tempList[nextActive].active = true;
  activeIndex.value = nextActive;
}

onMounted(() => {
  title.value = $page.value.title;

  window.onload = getAnchorList();
  console.log($page.value, $headTitle.value);
});
watch(
  () => "$page.value.title",
  debounce(() => {
    nextTick(() => {
      getAnchorList();
    });
  }),
  {
    deep: true,
  }
);
</script>

<style>
.side-anchor {
  position: fixed;
  right: 1rem;
  top: 120px;
  z-index: 1;
  width: 8rem;
  max-height: calc(100% - 135px);
  overflow: auto;
  border-left: 0.5rem #2c3e50 solid;
  font-size: 14px;
  font-weight: 500;
  transition: max-height 0.25s;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.side-anchor ul {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
}
ul .side-anchor-link {
  text-decoration: none;
  color: black;
}
ul .side-anchor-link:hover {
  color: #039be5;
}
.side-anchor-link.active {
  color: #0277bd;
}
.side-anchor::-webkit-scrollbar {
  width: 0;
}
@media (max-width: 1350px) {
  .side-anchor {
    display: none;
  }
}
</style>