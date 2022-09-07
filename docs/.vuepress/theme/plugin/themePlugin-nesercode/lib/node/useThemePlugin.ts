import type { PluginObject, Page, App } from "@vuepress/core"
import { createPage } from "@vuepress/core"
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

export const useThemePlugin = (
	options?: useThemePluginOptions
): PluginObject => {
	return {
		name: `theme-plugin-nesercode`,

		onInitialized: (app: App) => {
			const tagMap = new Map()
			// 依据内容时间进行排序，也可以在这一步过滤掉不符的内容
			const articleSort = (a, b) =>
				a.frontmatter.date > b.frontmatter.date ? 1 : -1
			const articles = app.pages.sort((a, b) => articleSort(a, b))
			console.log(app.pages)
		},

		extendsPage: (page: Page<{ themeDataPlugin?: themeData }>): void => {
			page.data.themeDataPlugin = generateThemeOptions(options ?? null)
		},
	}
}
