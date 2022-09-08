export interface themeData {
	footer?: {
		display: Boolean
		copyright?: String
		year?: String
		themeInfoDisplay?: Boolean
	}
	subSidebar?: [
		{
			sidebarDepth?: Number
		},
		Boolean
	]
	readingTime?: Boolean
	readingLine?: String | Boolean
}
