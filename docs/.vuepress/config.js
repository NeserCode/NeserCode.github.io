const { path } = require('@vuepress/utils')
const NeserTheme = require(path.resolve(__dirname, 'theme/index.js'))


console.log(NeserTheme);
module.exports = {
    lang: "zh-CN",
    title: "Hello",
    description: "This is a Hello Page",
    theme: NeserTheme({
        navbar: true,
        sideBar: 'auto',
        search: true,
    })
}