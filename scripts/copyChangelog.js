/*
 * @Author: 2460392754@qq.com
 * @Date: 2022-03-01 19:16:21
 * @LastEditTime: 2022-03-02 00:47:19
 * @Description: 复制 `changelog.md` 文件到 `docs/md` 位置
 * @FilePath: /uniapp-router-view-loader/scripts/copyChangelog.js
 */

const fs = require('fs');

fs.copyFile('./changelog.md', './docs/md/changelog.md', (err) => {
    if (err) throw err;
});