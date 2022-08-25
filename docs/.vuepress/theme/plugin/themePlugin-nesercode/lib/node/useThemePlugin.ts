import type { PluginObject, Page } from "@vuepress/core"
import { themeData, generateThemeFooter } from "../share"

export interface useThemePluginOptions {
	footer?: {
		display: Boolean
		copyright?: String
		year?: String
		themeInfoDisplay?: Boolean
	}
}

export const useThemePlugin = (
	options?: useThemePluginOptions
): PluginObject => {
	return {
		name: `theme-plugin-nesercode`,
		extendsPage: (page: Page<{ themeDataPlugin?: themeData }>): void => {
			page.data.themeDataPlugin = generateThemeFooter(options)
		},
	}
}
