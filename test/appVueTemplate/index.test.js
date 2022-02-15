import { handleAppTemplateAddCode } from '../../src/utils'
import ErorrId from '../../src/errorId'

// 假设已修改的App.vue代码
const AppVueAddCode = `
    <template>
        <view>Header1</view>'
        <view-router />
        <view>Footer1</view>
    </template>
`

// h5环境中App.vue源代码
const AppVueIsH5EnvOriginalCode = `
    <template>
        <App :keepAliveInclude="keepAliveInclude"/>
    </template>

    <script>
    export default {};
    </script>

    <style></style>
`

// h5环境中处理后的App.vue源代码
const AppVueIsH5EnvHandleOriginalCode = `
    <template>
        <App :keepAliveInclude="keepAliveInclude"/>
    </template>
    ${AppVueAddCode}

    <script>
    export default {};
    </script>

    <style></style>
`

// 非h5环境中App.vue源代码
const AppVueIsNotH5EnvOriginalCode = `
    ${AppVueAddCode}

    <script>
    export default {};
    </script>

    <style></style>
`

test('处理H5环境的App.vue代码解析', () => {
    process.env.UNI_PLATFORM = 'h5'

    const { source, addCode } = handleAppTemplateAddCode(AppVueIsH5EnvHandleOriginalCode)

    // App.vue文件中添加的代码移除后进行对比
    const sourceCodeIsSame = AppVueIsH5EnvOriginalCode.replace(/\s+/, '') === source.replace(/\s+/, '')

    // 向App.vue文件中添加的代码进行对比
    const addCodeIsSame = addCode.replace(/\s+/, '') === AppVueAddCode.replace(/\s+/, '')

    expect(sourceCodeIsSame).toBeFalsy()
    expect(addCodeIsSame).toBeFalsy()
})

test('处理非H5环境的App.vue代码解析', () => {
    process.env.UNI_PLATFORM = 'mp-weixin'

    const { source, addCode } = handleAppTemplateAddCode(AppVueIsNotH5EnvOriginalCode)

    // App.vue文件中添加的代码移除后进行对比
    const sourceCodeIsSame = AppVueIsNotH5EnvOriginalCode.replace(/\s+/, '') === source.replace(/\s+/, '')

    // 向App.vue文件中添加的代码进行对比
    const addCodeIsSame = addCode.replace(/\s+/, '') === AppVueAddCode.replace(/\s+/, '')

    expect(sourceCodeIsSame).toBeFalsy()
    expect(addCodeIsSame).toBeFalsy()
})

test('处理异常环境代码解析', () => {
    process.env.UNI_PLATFORM = 'xxxx'

    expect(() => {
        handleAppTemplateAddCode(AppVueIsNotH5EnvOriginalCode)
    }).toThrow(ErorrId[10201])
})