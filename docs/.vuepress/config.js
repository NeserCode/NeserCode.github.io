module.exports = {
    title: "文章标题",
    description: '文章描述',

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
                items: [
                    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                    {
                        text: '前端文章',
                        items: [
                            { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
                        ],
                    },
                    {
                        text: '学习笔记',
                        items: [
                            { text: '《JavaScript教程》', link: '/note/javascript/' },
                            { text: '《JavaScript高级程序设计》', link: '/note/js/' },
                            { text: '《ES6 教程》', link: '/note/es6/' },
                            { text: '《Vue》', link: '/note/vue/' },
                            { text: '《React》', link: '/note/react/' },
                            {
                                text: '《TypeScript 从零实现 axios》',
                                link: '/note/typescript-axios/',
                            },
                            {
                                text: '《Git》',
                                link: '/note/git/',
                            },
                            {
                                text: 'TypeScript',
                                link: '/pages/51afd6/',
                            },
                            {
                                text: 'JS设计模式总结',
                                link: '/pages/4643cd/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '页面',
                link: '/ui/',
                items: [
                    { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
                    { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
                ],
            },
            {
                text: '技术',
                link: '/technology/',
                items: [
                    { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
                    { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
                    { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
                    { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
                ],
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    { text: '学习', link: '/pages/f2a556/' },
                    { text: '面试', link: '/pages/aea6571b7a8bae86/' },
                    { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
                    { text: '实用技巧', link: '/pages/baaa02/' },
                    { text: '友情链接', link: '/friends/' },
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
            createYear: 2019, // 博客创建年份
            copyrightInfo:
                'Evan Xu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
        }
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', { rel: 'icon', href: 'https://tenapi.cn/qqimg/?qq=510648363' }], //favicons，资源放在public文件夹
        ['meta', { name: 'keywords', content: 'wdnmd' }],
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ]
}