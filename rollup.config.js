const { uglify } = require('rollup-plugin-uglify')

export default {
    // plugins: [uglify()],
    input: './src/index.js',//入口文件
    output: {
        file: './dist/index.js',//打包后的存放文件
        format: 'cjs',//输出格式 amd es6 iife umd cjs
        name: 'bundleName'//如果iife,umd需要指定一个全局变量
    }
}
