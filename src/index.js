import * as Utils from './utils'
import * as Config from './config'

let addLabel = {
    header: [],
    footer: []
}

/**
 * webpack
 * @param {string} source 
 * @returns 
 */
export default function (source) {
    const config = Object.assign({}, Config, this.query, {
        publicPath: '../../' + this.query.publicPath
    });
    const routeFilePathRegList = Utils.getRouteFileMatchRegAll(config);

    // 匹配 App.vue
    if (this.resourcePath === Utils.getPath([config.publicPath, '/App.vue'])) {
        Utils.print('App.vue file match, process: ', process.env.UNI_PLATFORM)

        const handleAppRes = Utils.handleAppTemplateAddCode(source)
        const labelList = Utils.handleGetTemplateRowCode(handleAppRes.addCode)
        const handleLabelList = Utils.handleGetTemplateHeaderOrFooterLabelCode(labelList)

        source = handleAppRes.source
        addLabel = Object.assign(addLabel, handleLabelList)
    }

    // 匹配 路由文件
    if (routeFilePathRegList.some(reg => reg.test(this.resourcePath))) {
        Utils.print('route file match: ', this.resourcePath)

        source = Utils.addCodeToHeader(source, addLabel.header.join(''))
        source = Utils.addCodeToFooter(source, addLabel.footer.join(''))
    }

    return source
}

/**
 * vite
 * @returns 
 */
export function vitePlugin(opts) {
    const config = Object.assign({}, Config, opts, {
        publicPath: '../../' + opts.publicPath
    });
    const routeFilePathRegList = Utils.getRouteFileMatchRegAll(config);

    process.env.UNI_PLATFORM = 'mp-weixin'

    return {
        name: Config.name,
        enforce: 'pre',

        transform(source, path) {
            if (path === Utils.getPath([config.publicPath, '/App.vue'])) {
                Utils.print('App.vue file match, process: ', process.env.UNI_PLATFORM)

                const handleAppRes = Utils.handleAppTemplateAddCode(source)
                const labelList = Utils.handleGetTemplateRowCode(handleAppRes.addCode)
                const handleLabelList = Utils.handleGetTemplateHeaderOrFooterLabelCode(labelList)

                source = handleAppRes.source
                addLabel = Object.assign(addLabel, handleLabelList)

                return { code: source }
            }

            // 匹配 路由文件
            if (routeFilePathRegList.some(reg => reg.test(path))) {
                Utils.print('route file match: ', path)

                source = Utils.addCodeToHeader(source, addLabel.header.join(''))
                source = Utils.addCodeToFooter(source, addLabel.footer.join(''))

                return { code: source }
            }
        }
    }
}