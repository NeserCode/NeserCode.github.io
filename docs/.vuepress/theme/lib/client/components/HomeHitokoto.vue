<template>
  <div class="neser-theme-hitokoto">
    <span class="innerText" :title="computedTitle">{{ hitokoto }}</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
const $axios = axios;

const hitokoto = ref(":D 正在获取一言");
const hitokoto_from = ref("");
const hitokoto_fromWho = ref("");
const computedTitle = computed(
  () => `摘自: ${hitokoto_from.value}
作者: ${hitokoto_fromWho.value ?? "无名"}
Tip: 本功能基于 Hitokoto · 一言`
);

onMounted(() => {
  $axios
    .get("https://v1.hitokoto.cn?c=i&c=d")
    .then(({ data }) => {
      hitokoto.value = data.hitokoto;
      hitokoto_from.value = data.from;
      hitokoto_fromWho.value = data.from_who;
      console.log(data);
    })
    .catch(console.error);
});
</script>

<style lang="postcss" scoped>
.neser-theme-hitokoto {
  @apply inline-flex justify-center items-center w-full py-12 mt-16;
}

.neser-theme-hitokoto .innerText {
  @apply inline-block
  font-thin text-lg;
}

.innerText::before {
  content: "『";
  @apply relative -top-1.5;
}
.innerText::after {
  content: "』";
  @apply relative -bottom-1.5;
}

.innerText::before,
.innerText::after {
  @apply inline-block sm:hidden px-3.5 font-thin;
}
</style>