import * as Utils from './utils'
import * as Config from './config'

let addLabel = {
    header: [],
    footer: []
}

/**
 * 获取 配置
 * @param {*} opts 
 * @returns 
 */
function getConfigure(opts) {
    const config = Object.assign({}, Config, opts, {
        publicPath: '../../' + this.query.publicPath
    });
    const routeFilePathRegList = Utils.getRouteFileMatchRegAll(config);

    return {
        config,
        routeFilePathRegList
    }
}

/**
 * 处理 App.vue文件
 * @returns 
 */
function handleAppVue() {
    Utils.print('App.vue file match, process: ', process.env.UNI_PLATFORM)

    const handleAppRes = Utils.handleAppTemplateAddCode(source)
    const labelList = Utils.handleGetTemplateRowCode(handleAppRes.addCode)
    const handleLabelList = Utils.handleGetTemplateHeaderOrFooterLabelCode(labelList)

    source = handleAppRes.source
    addLabel = Object.assign(addLabel, handleLabelList)

    return source;
}

/**
 * 处理 路由文件
 * @param {*} source 
 * @param {*} path 
 * @returns 
 */
function handleRouteFile(source, path) {
    Utils.print('route file match: ', path)

    source = Utils.addCodeToHeader(source, addLabel.header.join(''))
    source = Utils.addCodeToFooter(source, addLabel.footer.join(''))

    return source;
}

/**
 * webpack
 * @param {string} source 
 * @returns 
 */
export default function (source) {
    const { config, routeFilePathRegList } = getConfigure(this.query)

    // 匹配 App.vue
    if (this.resourcePath === Utils.getPath([config.publicPath, '/App.vue'])) {
        source = handleAppVue(source)
    }

    // 匹配 路由文件
    if (routeFilePathRegList.some(reg => reg.test(this.resourcePath))) {
        source = handleRouteFile(source, this.resourcePath)
    }

    return source
}

/**
 * vite
 * @returns 
 */
export function vitePlugin(opts) {
    const { config, routeFilePathRegList } = getConfigure(opts)

    process.env.UNI_PLATFORM = 'mp-weixin'

    return {
        name: Config.name,
        enforce: 'pre',

        transform(source, path) {
            // 匹配 App.vue
            if (path === Utils.getPath([config.publicPath, '/App.vue'])) {
                source = handleAppVue(source)

                return { code: source }
            }

            // 匹配 路由文件
            if (routeFilePathRegList.some(reg => reg.test(path))) {
                source = handleRouteFile(source, path)

                return { code: source }
            }
        }
    }
}