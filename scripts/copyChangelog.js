/**
 * 复制 `changelog.md` 文件到 `docs/md` 位置
 */

const fs = require('fs');

fs.copyFileSync('./changelog.md', './docs/md/changelog.md', (err) => {
    if (err) throw err;
});