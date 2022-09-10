<template>
  <div class="neser-theme-hitokoto">
    <span class="innerText">{{ hitokoto }}</span>
    <span class="restDetail">
      <span class="from">{{ hitokoto_from }}</span>
      <span class="from-who">{{ hitokoto_fromWho }}</span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const $axios = axios;

const hitokoto = ref(":D");
const hitokoto_from = ref("");
const hitokoto_fromWho = ref("");

onMounted(() => {
  $axios
    .get("https://v1.hitokoto.cn?c=i&c=d")
    .then(({ data }) => {
      hitokoto.value = data.hitokoto;

      console.log(data);
    })
    .catch(console.error);
});
</script>