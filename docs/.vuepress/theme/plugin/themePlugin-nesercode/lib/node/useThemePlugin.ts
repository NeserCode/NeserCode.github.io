import type { PluginObject, Page, App } from "@vuepress/core"
import { themeData, generateThemeOptions } from "../share"

export interface useThemePluginOptions {
	footer?: {
		display: Boolean
		copyright?: String
		year?: String
		themeInfoDisplay?: Boolean
	}
	adminInfo?: {
		avatar?: String | Boolean
		username?: String | Boolean
		moto?: String | Boolean
		display: Boolean
	}
	subSidebar?: { sidebarDepth?: Number } | Boolean
	readingTime?: Boolean
	readingLine?: String | Boolean
	giscusOptions?: {
		src: string
		repo: `${string}/${string}`
		repoId: string
		category: string
		categoryId: string
		mapping: "url" | "title" | "og:title" | "pathname"
		strict: boolean
		reactions: boolean
		metadata: boolean
		position: "top" | "bottom"
		term?: string
		theme:
			| "light"
			| "light_high_contrast"
			| "light_protanopia"
			| "dark"
			| "dark_high_contrast"
			| "dark_protanopia"
			| "dark_dimmed"
			| "transparent_dark"
			| "preferred_color_scheme"
			| `${string}.css`
			| `https://${string}`
		lang:
			| "de"
			| "en"
			| "es"
			| "fr"
			| "gsw"
			| "id"
			| "it"
			| "ja"
			| "ko"
			| "pl"
			| "ro"
			| "ru"
			| "tr"
			| "vi"
			| "zh-CN"
			| "zh-TW"
		loading?: boolean
	}
}

export const useThemePlugin =
	(options?: useThemePluginOptions): PluginObject =>
	(app: App) => {
		return {
			name: `theme-plugin-nesercode`,

			onInitialized: async (app: App) => {
				const tagMap = new Map()
				// 依据内容时间进行排序，也可以在这一步过滤掉不符的内容
				const articleSort = (a, b) =>
					a.frontmatter.date > b.frontmatter.date ? -1 : 1
				const articles = app.pages.sort((a, b) => articleSort(a, b))
				articles.forEach((item, index) => {
					// 处理上一页下一页，在主题模板中可以读取到这个数据
					if (index !== 0) {
						const { path, title } = articles[index - 1]
						articles[index].data.prev = { path, title }
					}
					if (index !== articles.length - 1) {
						const { path, title } = articles[index + 1]
						articles[index].data.next = { path, title }
					}
				})
				await app.writeTemp(
					"articles.js",
					`export const acticles = ${JSON.stringify(articles)}`
				)
			},

			extendsPage: (page: Page<{ themeDataPlugin?: themeData }>): void => {
				page.data.themeDataPlugin = generateThemeOptions(options ?? null)
			},
		}
	}
