module.exports = {
    title: "文章标题",
    description: '文章描述',
    theme: 'NeserCode',

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '页面',
                link: '/guide/',
                items: [
                    { text: '前端学习路线', link: '/guide/Another/' },
                    { text: 'NotFound', link: '/pages/0a83b083bdf257cb/' },
                ],
            },
            { text: '关于', link: '/about/' }
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: 'https://tenapi.cn/qqimg/?qq=510648363', // 导航栏logo
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: true, // 启用编辑
        editLinkText: '编辑',
        sidebar: true,

        // 页脚信息
        footer: {
            display: true,
            createYear: 2019, // 博客创建年份
            copyrightInfo: '✨NeserCode - <a target="_blank" href="https://github.com/NeserCode">Github</a>', // 博客版权信息，支持a标签
        }
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', { rel: 'icon', href: 'https://tenapi.cn/qqimg/?qq=510648363' }], //favicons，资源放在public文件夹
        ['meta', { name: 'keywords', content: 'wdnmd' }],
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ],

    postcss: {
        plugins: [
            require("autoprefixer"),
            require("tailwindcss")("./tailwind.config.js")
        ]
    }
}