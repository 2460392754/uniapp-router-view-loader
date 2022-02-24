/**
 * 添加百度统计到 `index.html`
 */

const Fs = require('fs');
const Path = require('path')

const scriptsStr = `<script src="https://hm.baidu.com/hm.js?ae7cc2ff26fc29941dee326583e38a5b"></script>`
const htmlPath = Path.join(__dirname, '../', './docs/.vuepress/dist/index.html');
const html = Fs.readFileSync(htmlPath, 'utf8')
const tempHtml = html.replace(/<head>/, s => s + scriptsStr)

Fs.writeFileSync(htmlPath, tempHtml)