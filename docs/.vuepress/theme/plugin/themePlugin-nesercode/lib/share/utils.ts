import { useThemePluginOptions } from "../node"
import defaultThemeOptions from "./defaultThemeOptions"

export function generateThemeOptions(
	options: useThemePluginOptions | null
): Object {
	if (options === null) return defaultThemeOptions

	const { footer, subSidebar, readingTime, readingLine } = options
	return {
		footer: footer ?? defaultThemeOptions.footer,
		subSidebar: subSidebar ?? defaultThemeOptions.subSidebar,
		readingTime: readingTime ?? defaultThemeOptions.readingTime,
		readingLine: readingLine ?? defaultThemeOptions.readingLine,
	}
}
