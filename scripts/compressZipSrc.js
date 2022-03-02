/*
 * @Author: 2460392754@qq.com
 * @Date: 2022-03-02 11:52:38
 * @LastEditTime: 2022-03-02 11:55:45
 * @Description:  压缩 `src` 文件夹
 * @FilePath: /uniapp-router-view-loader/scripts/comporessZipSrc.js
 */

const { version } = require('../package.json')
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const compressing = require("compressing");
const dayjs = require("dayjs");

const getPath = (s) => path.join(__dirname, '../', s)

const srcDir = getPath('./src')
const zipDir = getPath('./zip')
const fileName = getPath('./zip' + `/src_${version.replace(/\./g, '-')}_${dayjs().format("YYYY-MM-DD_HH-mm-ss")}.zip`);

// 创建 zip 文件夹
if (!fs.existsSync(zipDir)) {
    fs.mkdirSync(zipDir);
}

compressing.zip
    .compressDir(srcDir, fileName)
    .then(() => {
        console.log(chalk.yellow(`Tip: 文件压缩成功，已压缩至【${fileName}】`));
    })
    .catch(err => {
        console.log(chalk.red("Tip: 压缩报错"));
        console.error(err);
    })