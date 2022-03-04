module.exports = {
    publicPath: './',

    transpileDependencies: ['uview-ui'],

    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/uni.scss";`,
            }
        }
    },

    devServer: {
        open: false
    },

    chainWebpack: config => {
        // console.log(config.module)
        // config.module
        //     .rule('vue')
        //     .use('vue-loader')[]
        //     .tap((options) => {
        //         // console.log(options.compiler.compile.toString())
        //         // console.log(options.compiler.parseComponent.toString())
        //         // console.log(options.compiler.compileToFunctions.toString())
        //         // console.log(options.compiler.generateCodeFrame.toString())
        //         // console.log(options.compilerOptions.modules[1].preTransformNode.toString())
        //         options.compiler = require('./babel/index')(options.compiler)
        //         return options
        //     })


        config.resolveLoader.alias.set('custom-uniapp-router-view-loader', 'uniapp-router-view-loader')

        config.module
            .rule('vue')
            .use('custom-uniapp-router-view-loader')
            .loader('custom-uniapp-router-view-loader')
            // .options({
            //     publicPath: './src',
            //     VNode: {
            //         'VNode-Navbar': '/src/template/navbar',
            //         'VNode-Copyright': '/src/template/copyright',
            //     }
            // })
            .end()
    }
}