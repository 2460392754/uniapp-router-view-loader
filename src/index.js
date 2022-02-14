// const Utils = require('./utils')
// const Config = require('./config')
import * as Utils from './utils'
import Config from './config'

let addLabel = {
    header: [],
    footer: []
}

export default function (source) {
    const config = Object.assign(Config, this.query, {
        publicPath: '../../' + this.query.publicPath
    });
    const routeList = Utils.getRouteFileAll(config);

    if (this.resourcePath === Utils.getPath([config.publicPath, '/App.vue'])) {
        console.log('process: ', process.env.UNI_PLATFORM)
        const handleAppRes = Utils.handleAppTemplateAddCode(source)
        const labelList = Utils.handleGetTemplateRowCode(handleAppRes.addCode)
        const handleLabelList = Utils.handleGetTemplateHeaderOrFooterLabelCode(labelList)

        source = handleAppRes.source
        addLabel = Object.assign(addLabel, handleLabelList)
    }

    if (routeList.includes(this.resourcePath)) {
        console.log('file match: ', this.resourcePath)
        // ============
        // template 的第一个子标签
        // const pageCodeSource = compile(source, {}).ast.children[0]
        // source = Utils.handleClassJoin(source, pageCodeSource);
        // ============
        source = Utils.addCodeToHeader(source, addLabel.header.join(''))
        source = Utils.addCodeToFooter(source, addLabel.footer.join(''))
        // source = Utils.addCodeToHeader(source, '<view>My Header</view>')
        // source = Utils.addCodeToFooter(source, '<view>My Footer</view>')
        // ============

        // ============
        // console.log(Utils.handleClassJoin(source, pageCodeSource))
        // console.log(source)

        // console.log(compileToFunctions(source))
        // console.log(compile(source))
        // ============
    }

    return source
}