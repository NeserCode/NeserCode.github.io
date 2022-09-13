export interface themeData {
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
	subSidebar?: [
		{
			sidebarDepth?: Number
		},
		Boolean
	]
	readingTime?: Boolean
	readingLine?: String | Boolean
}
