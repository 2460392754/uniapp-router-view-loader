const chokidar = require('chokidar');
const chalk = require("chalk");
const shell = require('shelljs');

console.log(chalk.green(`Tip: 开始监听`));

chokidar.watch('./src').on('all', (event, path) => {
    // 文件更新
    if (event === 'change') {
        console.log(chalk.green(`Tip: 文件更新[${path}]`));
        shell.exec('npm run dev')
    }
});
