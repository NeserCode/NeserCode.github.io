import { defaultTheme } from './theme'

import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { path } from '@vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { tocPlugin } from '@vuepress/plugin-toc'
import { gitPlugin } from '@vuepress/plugin-git'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
    base: '/',
    title: '✨NeserCode',
    description:'Welcome to my blog',
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                href: 'https://tenapi.cn/qqimg/?qq=510648363',
            },
        ],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],

    bundler:
        // specify bundler via environment variable
        process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

    theme: defaultTheme({
        logo: 'https://tenapi.cn/qqimg/?qq=510648363',
        repo: 'NeserCode/NeserCode.github.io',
        docsDir: 'docs',

        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },
    }),

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        // only enable shiki plugin in production mode
        isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
        searchPlugin(),
        activeHeaderLinksPlugin({
            delay: 0,
            offset: 5,
        }),
        tocPlugin(),
        gitPlugin()
    ],

    locales: {
        '/': {
            lang:'zh-CN'
        }
    },
})