const isProd = process.env.NODE_ENV === 'production'

const themeConfig = {
    logo: 'https://tenapi.cn/qqimg/?qq=510648363',
    repo: 'NeserCode/NeserCode.github.io',
    docsDir: 'docs',
    lastUpdatedText: '更新于',
    editLink: false,

    // footer config
    footer: {
        display: true,
        displayThemeInfo: true,
        copyright: 'NeserCode - <a target="_blank" href="https://github.com/NeserCode">',
        year: '2021-2022'
    },

    // locales config
    locales: {
        '/': {
            // navbar config
            navbar: [{
                text: 'Markdown',
                link: '/mds/guide/markdown.md',
                activeMatch: '/guide/markdown.html'
            }]
        }
    },

    themePlugins: {
        // only enable git plugin in production mode
        git: isProd,
        // use shiki plugin in production mode instead
        prismjs: !isProd,
    },
}

module.exports = { themeConfig }