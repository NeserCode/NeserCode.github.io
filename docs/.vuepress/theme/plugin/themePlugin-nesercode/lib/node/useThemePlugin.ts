import type { PluginObject, Page } from "@vuepress/core"
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
		extendsPage: (page: Page<{ themeDataPlugin?: themeData }>): void => {
			page.data.themeDataPlugin = generateThemeOptions(options ?? null)
		},
	}
}
