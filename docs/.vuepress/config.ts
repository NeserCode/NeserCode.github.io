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
import { readingTimePlugin } from "vuepress-plugin-reading-time2"
import { blogPlugin } from "vuepress-plugin-blog2"
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
		}),

		//Blog Structures Config
		blogPlugin({
			// only files under posts are articles
			filter: ({ filePathRelative }) =>
				filePathRelative ? filePathRelative.startsWith("mds/") : false,

			// getting article info
			getInfo: ({ frontmatter, title }) => ({
				title,
				author: frontmatter.author || "",
				date: frontmatter.date || null,
				category: frontmatter.category || [],
				tag: frontmatter.tag || [],
			}),

			category: [
				{
					key: "category",
					getter: (page) => <string[]>page.frontmatter.category || [],
					layout: "Category",
					itemLayout: "Category",
					frontmatter: () => ({ title: "Categories", sidebar: false }),
					itemFrontmatter: (name) => ({
						title: `Category ${name}`,
						sidebar: false,
					}),
				},
				{
					key: "tag",
					getter: (page) => <string[]>page.frontmatter.tag || [],
					layout: "Tag",
					itemLayout: "Tag",
					frontmatter: () => ({ title: "Tags", sidebar: false }),
					itemFrontmatter: (name) => ({
						title: `Tag ${name}`,
						sidebar: false,
					}),
				},
			],

			type: [
				{
					key: "article",
					// remove archive articles
					filter: (page) => !page.frontmatter.archive,
					path: "/article/",
					layout: "Article",
					frontmatter: () => ({ title: "Articles", sidebar: false }),
					// sort pages with time and sticky
					sorter: (pageA, pageB) => {
						if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
							return (
								(pageB.frontmatter.sticky as number) -
								(pageA.frontmatter.sticky as number)
							)

						if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

						if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

						if (!pageB.frontmatter.date) return 1
						if (!pageA.frontmatter.date) return -1

						return (
							new Date(pageB.frontmatter.date).getTime() -
							new Date(pageA.frontmatter.date).getTime()
						)
					},
				},
				{
					key: "timeline",
					// only article with date should be added to timeline
					filter: (page) => page.frontmatter.date instanceof Date,
					// sort pages with time
					sorter: (pageA, pageB) =>
						new Date(pageB.frontmatter.date as Date).getTime() -
						new Date(pageA.frontmatter.date as Date).getTime(),
					path: "/timeline/",
					layout: "Timeline",
					frontmatter: () => ({ title: "Timeline", sidebar: false }),
				},
			],
			hotReload: true,
		}),

		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, "./components"),
		}),
		// only enable shiki plugin in production mode
		isProd ? shikiPlugin({ theme: "dark-plus" }) : [],
		searchPlugin(),
		activeHeaderLinksPlugin({
			delay: 100,
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
		readingTimePlugin({}),
	],
	// locales config
	locales: {
		"/": {
			lang: "zh-CN",
		},
	},
})
