/*
 * @Author: 2460392754@qq.com
 * @Date: 2022-03-02 00:43:54
 * @LastEditTime: 2022-03-02 11:42:38
 * @Description: 测试文件同步插件版本号
 * @FilePath: /uniapp-router-view-loader/scripts/localPublish.js
 */

const fs = require('fs');
const path = require('path')
const chalk = require("chalk");
const { name, version } = require('../package.json')

const dirPath = './examples'
const dirChildrenPathAll = fs.readdirSync(dirPath)

console.log(chalk.green(`Tip: 测试项目本地部署版本号开始`));

// 修改版本号, 并锁定
for (const childPath of dirChildrenPathAll) {
    const toPackageJsonPath = './' + path.join(dirPath, childPath, 'package.json')
    const content = JSON.parse(fs.readFileSync(toPackageJsonPath, 'utf8'));

    content.devDependencies[name] = version;

    try {
        fs.writeFileSync(toPackageJsonPath, JSON.stringify(content, null, 4), 'utf8')
        console.log(chalk.yellow(`Tip: 测试项目本地部署版本号成功【${toPackageJsonPath}】`));
    } catch (err) {
        console.error(err)
    }
}

console.log(chalk.green(`Tip: 测试项目本地部署版本号结束`));