module.exports = {
    // ...

    chainWebpack: (config) => {
        // === 使用 hbuilder 工具创建的项目，使用这行 ===
        config.resolveLoader.alias.set(
            'custom-uniapp-router-view-loader',
            __dirname + '/node_modules/uniapp-router-view-loader'
        );
        // === 使用 hbuilder 工具创建的项目，使用这行 ===

        config.module
            .rule('vue')
            .use('custom-uniapp-router-view-loader')
            .loader('custom-uniapp-router-view-loader')
            // .options({
            //     publicPath: './',
            // })
            .end();
    }
};