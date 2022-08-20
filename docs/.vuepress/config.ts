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

import { copyCodePlugin } from "vuepress-plugin-copy-code2"

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
		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, "./components"),
		}),
		// only enable shiki plugin in production mode
		isProd ? shikiPlugin({ theme: "dark-plus" }) : [],
		searchPlugin(),
		activeHeaderLinksPlugin({
			delay: 0,
			offset: 5,
		}),
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
	],
	// locales config
	locales: {
		"/": {
			lang: "zh-CN",
		},
	},
})
