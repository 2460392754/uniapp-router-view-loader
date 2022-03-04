module.exports = {
    chainWebpack: (config) => {
        config.resolveLoader.alias.set(
            'custom-uniapp-router-view-loader',
            __dirname + '/node_modules/uniapp-router-view-loader'
        );

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