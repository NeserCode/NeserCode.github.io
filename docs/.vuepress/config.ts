import { defaultTheme } from "./theme"

import { viteBundler } from "@vuepress/bundler-vite"
import { webpackBundler } from "@vuepress/bundler-webpack"
import { defineUserConfig } from "@vuepress/cli"
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"
import { shikiPlugin } from "@vuepress/plugin-shiki"
import { path } from "@vuepress/utils"
import { searchPlugin } from "@vuepress/plugin-search"
import { tocPlugin } from "@vuepress/plugin-toc"
import { gitPlugin } from "@vuepress/plugin-git"

import { copyCodePlugin } from "vuepress-plugin-copy-code2"
import { readingTimePlugin } from "vuepress-plugin-reading-time2"
// import { commentPlugin } from "vuepress-plugin-comment2"
import { useThemePlugin } from "./theme/plugin/themePlugin-nesercode"

import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

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
								plugins: [tailwindcss, autoprefixer],
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
		sidebarDepth: 2,

		// locales config
		locales: {
			"/": {
				// navbar config
				navbar: [
					{
						text: "关于",
						link: "/mds/about/aboutme.md",
						activeMatch: "/about",
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
			adminInfo: {
				display: true,
				avatar: "https://q1.qlogo.cn/g?b=qq&nk=510648363&s=640",
				username: "NeserCode",
				moto: "知识是无穷无尽的，这应当是一个公识。",
			},
			subSidebar: true,
			readingLine: true,
			readingTime: true,
			giscusOptions: {
				repo: "NeserCode/NeserCode.github.io",
				repoId: "R_kgDOHf8WIA",
				category: "General",
				categoryId: "DIC_kwDOHf8WIM4CRa-j",
				mapping: "title",
				strict: true,
				reactions: true,
				metadata: true,
				position: "top",
				theme: "light", // preferred_color_scheme dark_dimmed
				darkTheme: "dark_dimmed",
				lang: "zh-CN",
				loading: false,
			},
		}),

		// commentPlugin({
		// 	repo: "NeserCode/NeserCode.github.io",
		// 	repoId: "R_kgDOHf8WIA",
		// 	category: "General",
		// 	categoryId: "DIC_kwDOHf8WIM4CRa-j",
		// 	mapping: "title",
		// 	strict: true,
		// 	reactions: true,
		// 	metadata: true,
		// 	position: "top",
		// 	theme: "light", // preferred_color_scheme dark_dimmed
		// 	darkTheme: "dark_dimmed",
		// 	lang: "zh-CN",
		// 	loading: false,
		// }),

		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, "./components"),
		}),
		// only enable shiki plugin in production mode
		isProd ? shikiPlugin({ theme: "dark-plus" }) : [],
		searchPlugin(),
		tocPlugin(),
		gitPlugin(),

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
