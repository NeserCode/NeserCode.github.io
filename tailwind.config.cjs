/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/.vuepress/theme/lib/client/*.{html,js,vue}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
