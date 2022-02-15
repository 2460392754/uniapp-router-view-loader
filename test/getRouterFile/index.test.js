import { getPath, getFileMatchReg, getRouteFileMatchRegAll } from '../../src/utils'
import ErorrId from '../../src/errorId'

const redirectPath = './test/getRouterFile'

/**
 * 处理 路由文件正则匹配（vue和nvue文件）
 * @param {*} routerFileList 
 * @param {*} filePath 
 * @param {*} routeFilePathRegList 
 * @returns 
 */
function handleRouteFileRegMatch(routerFileList, filePath, routeFilePathRegList) {
    return routerFileList.every(s => {
        const path = __dirname + filePath + s;
        const vuePath = path + '.vue'
        const nvuePath = path + '.nvue'

        return routeFilePathRegList.some(reg => reg.test(vuePath)) && routeFilePathRegList.some(reg => reg.test(nvuePath))
    })
}

test('获取相对路径', () => {
    expect(getPath([redirectPath])).toBe(__dirname)
})

test('匹配vue和nvue文件', () => {
    const pathReg = getFileMatchReg(redirectPath, 'demo')
    const vuePath = __dirname + '/demo.vue'
    const nvuePath = __dirname + '/demo.nvue'

    expect(pathReg.test(vuePath)).toBeTruthy()
    expect(pathReg.test(nvuePath)).toBeTruthy()
})

test('解析pages.json文件中对应路径的vue或nvue文件', () => {
    const filePath = '/data/1';
    const routeFilePathRegList = getRouteFileMatchRegAll({
        publicPath: redirectPath + filePath
    })
    const routerFileList = [
        '/src/pages/A',
        '/src/pages/B/B1',
    ]
    const flag = handleRouteFileRegMatch(routerFileList, filePath, routeFilePathRegList);

    expect(flag).toBeTruthy()
})

test('解析pages.json文件中对应路径的vue或nvue文件(分包)', () => {
    const filePath = '/data/2';
    const routeFilePathRegList = getRouteFileMatchRegAll({
        publicPath: redirectPath + filePath
    })
    const routerFileList = [
        '/src/pages/A',
        '/src/pages/B/B1',
        '/src/packages/C/views/C1',
        '/src/packages/D/views/D1',
        '/src/packages/D/views/D2',
        '/src/packages/D/views/D3/D31',
    ]
    const flag = handleRouteFileRegMatch(routerFileList, filePath, routeFilePathRegList);

    expect(flag).toBeTruthy()
})

test('pages.json文件路径匹配错误，未找到该文件', () => {
    console.log = () => { };

    expect(() => {
        const filePath = '/data/xxxx';
        getRouteFileMatchRegAll({
            publicPath: redirectPath + filePath
        })
    }).toThrow(ErorrId[10001])
})

