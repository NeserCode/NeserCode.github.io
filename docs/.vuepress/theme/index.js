const { path } = require('@vuepress/utils')

function NeserTheme(options, ctx) {
    return {
        name: 'vuepress-theme-neser',
        layouts: {
            Layout: path.resolve(__dirname, 'theme/layouts/Layout.vue'),
            404: path.resolve(__dirname, 'theme/layouts/notFound.vue'),
        },
        // ...
    }
}

module.exports = NeserTheme