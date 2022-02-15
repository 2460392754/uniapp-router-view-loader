import { handleGetTemplateRowCode, handleGetTemplateHeaderOrFooterLabelCode } from '../../src/utils'
import ErorrId from '../../src/errorId'

test('解析App.vue文件正常', () => {
    const AppVueTemplate = ` 
        <template>
            <view>My Header1</view>
            <view>My Header2</view>
            <view><text>My Header3</text></view>
            <view>
                <text>My Header4</text>
            </view>
            <view>
                <view>
                    <text>My Header5</text>
                </view>
            </view>
            <!-- <view>AAA</view> -->
            <!-- <BBB /> -->
            <view-router />
            <view>My Footer1</view>
            <view>My Footer2</view>
        </template>
    `
    const formatList = {
        header: [
            '<view>My Header1</view>',
            '<view>My Header2</view>',
            '<view><text>My Header3</text></view>',
            '<view><text>My Header4</text></view>',
            '<view><view><text>My Header5</text></view></view>'
        ],
        footer: [
            '<view>My Footer1</view>',
            '<view>My Footer2</view>'
        ]
    }

    const formatCode = handleGetTemplateRowCode(AppVueTemplate);
    const labelListCode = handleGetTemplateHeaderOrFooterLabelCode(formatCode);

    expect(labelListCode).toEqual(formatList)
})

test('解析App.vue文件异常：缺少<router-view />标签', () => {
    const AppVueTemplate = ` 
        <template>
            <view>My Header1</view>
            <view>My Footer1</view>
        </template>
    `
    const formatList = {
        header: ['<view>My Header1</view>'],
        footer: ['<view>My Footer1</view>']
    }

    const fun = () => {
        const formatCode = handleGetTemplateRowCode(AppVueTemplate);
        const labelListCode = handleGetTemplateHeaderOrFooterLabelCode(formatCode);

        expect(labelListCode).toEqual(formatList)
    }

    expect(fun).toThrow(ErorrId[10101])
})

test('解析App.vue文件异常：<router-view />标签数量大于1', () => {
    const AppVueTemplate = ` 
        <template>
            <view>My Header1</view>
            <view-router />
            <view-router />
            <view>My Footer1</view>
            <view>My Footer2</view>
        </template>
    `
    const formatList = {
        header: ['<view>My Header1</view>'],
        footer: [
            '<view>My Footer1</view>',
            '<view>My Footer1</view>'
        ]
    }

    const fun = () => {
        const formatCode = handleGetTemplateRowCode(AppVueTemplate);
        const labelListCode = handleGetTemplateHeaderOrFooterLabelCode(formatCode);

        expect(labelListCode).toEqual(formatList)
    }

    expect(fun).toThrow(ErorrId[10102])
})
