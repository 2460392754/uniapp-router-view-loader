/*
 * @Author: 2460392754@qq.com
 * @Date: 2022-03-01 18:58:45
 * @LastEditTime: 2022-03-02 01:00:43
 * @Description: 压缩 `examples` 文件夹
 * @FilePath: /uniapp-router-view-loader/scripts/compressZipExample.js
 */

const { version } = require('../package.json')
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const compressing = require("compressing");
const dayjs = require("dayjs");
const fse = require('fs-extra');

const getPath = (s) => path.join(__dirname, '../', s)

const exampleDir = getPath('./examples')
const zipDir = getPath('./zip')
const tempDir = getPath('./temp')
const fileName = getPath('./zip' + `/example_${version.replace(/\./g, '-')}_${dayjs().format("YYYY-MM-DD_HH-mm-ss")}.zip`);

// 创建 zip 文件夹
if (!fs.existsSync(zipDir)) {
    fs.mkdirSync(zipDir);
}

// 删除 temp 临时文件夹
if (fs.existsSync(tempDir)) {
    fs.rmdirSync(tempDir, { recursive: true })
}

// 复制 examples 文件夹中的部分文件到 temp 临时文件夹中
fse.copySync(exampleDir, tempDir, {
    filter: (src, dest) => {
        return !/\.git|node_modules|dist|unpackage/.test(src)
    }
}, (err) => {
    console.log(chalk.red("Tip: 复制错误"));
    console.error(err);
})

compressing.zip
    .compressDir(getPath("./temp"), fileName)
    .then(() => {
        console.log(chalk.yellow(`Tip: 文件压缩成功，已压缩至【${fileName}】`));
    })
    .catch(err => {
        console.log(chalk.red("Tip: 压缩报错"));
        console.error(err);
    }).finally(() => {
        fs.rmdirSync(tempDir, { recursive: true })
    })