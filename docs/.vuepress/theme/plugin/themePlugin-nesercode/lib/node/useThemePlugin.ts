import type { PluginObject, Page, App } from "@vuepress/core"
import { themeData, generateThemeOptions } from "../share"

export interface useThemePluginOptions {
	footer?: {
		display: Boolean
		copyright?: String
		year?: String
		themeInfoDisplay?: Boolean
	}
	subSidebar?: { sidebarDepth?: Number } | Boolean
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
					a.frontmatter.date > b.frontmatter.date ? 1 : -1
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
