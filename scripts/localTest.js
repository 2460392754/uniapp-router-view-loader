/*
 * @Author: 2460392754@qq.com
 * @Date: 2022-03-02 00:43:54
 * @LastEditTime: 2022-03-02 11:04:30
 * @Description: 本地部署，替换 `examples` 里各项目的 `node_modules/**\/dist` 文件内容
 * @FilePath: /uniapp-router-view-loader/scripts/localTest.js
 */

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path')
const { name } = require('../package.json')
const chalk = require("chalk");

const dirPath = './examples'
const dirChildrenPathAll = fs.readdirSync(dirPath)

console.log(chalk.green(`Tip: 本地部署开始`));

for (const childPath of dirChildrenPathAll) {
    const { name } = require('../package.json')
    const toDir = './' + path.join(dirPath, childPath, 'node_modules', name, 'dist')

    try {
        fse.copySync('./dist', toDir)
        console.log(chalk.yellow(`Tip: 本地部署成功【${toDir}】`));
    } catch (err) {
        console.error(err)
    }
}

console.log(chalk.green(`Tip: 本地部署结束`));