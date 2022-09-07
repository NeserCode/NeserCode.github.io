<script setup lang="ts">
import { useRouteLocale } from '@vuepress/client'
import { useThemeLocaleData } from '../composables'

const routeLocale = useRouteLocale()
const themeLocale = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
</script>

<template>
  <div class="theme-container">
    <main class="page">
      <div class="theme-default-content">
        <h1 class="beautifiedNotFound">404</h1>

        <blockquote>{{ getMsg() }}</blockquote>

        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
      </div>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.beautifiedNotFound,
.beautifiedNotFound::after {
  font-size: 12rem;
  line-height: 12rem;
  @apply relative inline-flex justify-center items-center my-12 py-12 select-none;
}
.beautifiedNotFound::after {
  content: "404";
  @apply absolute top-0 left-0 bottom-0 right-0;
  animation: 5s glitch infinite steps(3, jump-none);
}

@keyframes glitch {
  0% {
    clip-path: inset(50% 50% 50% 50%);
    transform: translate(0, 0);
  }
  39% {
    clip-path: inset(50% 50% 50% 50%);
    transform: translate(0, 0);
  }
  40% {
    clip-path: inset(80% 0 0 0);
    transform: translate(10px, 5px);
    color: rgba(11, 11, 11, 0.3);
  }
  43% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(4px, -5px);
  }
  45% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(-14px, 5px);
  }
  55% {
    clip-path: inset(1% 0 80% 0);
    transform: translate(2px, -1px);
    color: rgba(11, 111, 11, 0.3);
  }
  60% {
    clip-path: inset(40% 0 46% 0);
    transform: translate(-10px, 5px);
  }
  65% {
    clip-path: inset(80% 0 2% 0);
    transform: translate(10px, 5px);
  }
  70% {
    clip-path: inset(20% 0 72% 0);
    transform: translate(-8px, -8px);
    color: rgba(111, 11, 11, 0.3);
  }
  85% {
    clip-path: inset(87% 0 10% 0);
    transform: translate(8px, 4px);
  }
  90% {
    clip-path: inset(70% 0 12% 0);
    transform: translate(5px, -5px);
    color: rgba(1, 1, 1, 1);
  }
  95% {
    clip-path: inset(50% 0 38% 0);
    transform: translate(-10px, -5px);
  }
  100% {
    clip-path: inset(10% 0 74% 0);
    transform: translate(10px, 5px);
  }
}
</style>
