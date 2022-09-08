import { defaultTheme } from "./theme"

import { viteBundler } from "@vuepress/bundler-vite"
import { webpackBundler } from "@vuepress/bundler-webpack"
import { defineUserConfig } from "@vuepress/cli"
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"
import { shikiPlugin } from "@vuepress/plugin-shiki"
import { path } from "@vuepress/utils"
import { searchPlugin } from "@vuepress/plugin-search"
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links"
import { tocPlugin } from "@vuepress/plugin-toc"
import { gitPlugin } from "@vuepress/plugin-git"
import { nprogressPlugin } from "@vuepress/plugin-nprogress"

import { copyCodePlugin } from "vuepress-plugin-copy-code2"
import { readingTimePlugin } from "vuepress-plugin-reading-time2"
import { useThemePlugin } from "./theme/plugin/themePlugin-nesercode"

const isProd = process.env.NODE_ENV === "production"

export default defineUserConfig({
	base: "/",
	title: "✨NeserCode",
	description: "Welcome to my blog",
	lang: "zh-CN",
	// html head config
	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: "https://tenapi.cn/qqimg/?qq=510648363",
			},
		],
		["meta", { name: "theme-color", content: "#3eaf7c" }],
	],
	// bundler config
	bundler:
		// specify bundler via environment variable
		process.env.DOCS_BUNDLER === "webpack"
			? webpackBundler()
			: viteBundler({
					viteOptions: {
						css: {
							postcss: {
								plugins: [require("tailwindcss"), require("autoprefixer")],
							},
						},
					},
			  }),

	permalinkPattern: ":year/:month/:slug.html",
	// nesercode theme config
	theme: defaultTheme({
		logo: "https://tenapi.cn/qqimg/?qq=510648363",
		repo: "NeserCode/NeserCode.github.io",
		docsDir: "docs",
		lastUpdatedText: "更新于",
		contributorsText: "由",
		editLink: false,

		// locales config
		locales: {
			"/": {
				// navbar config
				navbar: [
					{
						text: "Markdown",
						link: "/mds/guide/markdown.md",
						activeMatch: "/guide/markdown.html",
					},
				],
				backToHome: "回到首页",
				notFound: [
					"好像...出现了意料之外的页面呢",
					"唔嗯...前面的区域以后再来探索吧",
					"啊这...这一页居然被人撕掉了",
					"卧槽...难道这是一个隐藏的彩蛋",
					"好吧...看来这里是一条死路",
					"喂喂...你再怎么刷新没有东西就是没有东西啊",
					"哼哼...世上本没有路，走的人多了说不定还是走不通",
				],
			},
		},

		themePlugins: {
			// only enable git plugin in production mode
			git: isProd,
			// use shiki plugin in production mode instead
			prismjs: !isProd,
		},
	}),

	// plugins config
	plugins: [
		// NeserTheme Config
		useThemePlugin({
			footer: {
				display: true,
				year: "2021-2022",
				copyright:
					"NeserCode - <a target='_blank' href='https://github.com/NeserCode'>Github</a>",
				themeInfoDisplay: true,
			},
			subSidebar: true,
			readingLine: true,
		}),

		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, "./components"),
		}),
		// only enable shiki plugin in production mode
		isProd ? shikiPlugin({ theme: "dark-plus" }) : [],
		searchPlugin(),
		activeHeaderLinksPlugin({
			delay: 50,
			offset: 5,
		}),
		tocPlugin(),
		gitPlugin(),
		nprogressPlugin(),

		copyCodePlugin({
			showInMobile: true,
			locales: {
				"/": {
					hint: "复制这份代码",
					copy: "已复制 ",
				},
			},
		}),
		readingTimePlugin({}),
	],
	// locales config
	locales: {
		"/": {
			lang: "zh-CN",
		},
	},
})
