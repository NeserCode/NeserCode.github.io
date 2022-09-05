import { useThemePluginOptions } from "../node"
import defaultThemeOptions from "./defaultThemeOptions"

export function generateThemeOptions(
	options: useThemePluginOptions | null
): Object {
	if (options === null) return defaultThemeOptions

	const { footer, subSidebar } = options
	return { footer, subSidebar }
}
