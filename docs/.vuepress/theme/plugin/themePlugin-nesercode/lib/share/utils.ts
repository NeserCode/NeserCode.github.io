import { useThemePluginOptions } from "../node"
import defaultThemeOptions from "./defaultThemeOptions"

export function generateThemeOptions(
	options: useThemePluginOptions | null
): Object {
	if (options === null) return defaultThemeOptions

	const { adminInfo, footer, subSidebar, readingTime, readingLine } = options
	return {
		footer: footer ?? defaultThemeOptions.footer,
		adminInfo: adminInfo ?? defaultThemeOptions.adminInfo,
		subSidebar: subSidebar ?? defaultThemeOptions.subSidebar,
		readingTime: readingTime ?? defaultThemeOptions.readingTime,
		readingLine: readingLine ?? defaultThemeOptions.readingLine,
	}
}
