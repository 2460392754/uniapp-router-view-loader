import { addCodeToHeader, addCodeToFooter } from '../../src/utils'

/**
 * 处理 页面代码
 * @param {string} handlerPageTemp 
 * @param {Object} AddCodeList
 */
function handlePageCode(handlerPageTemp, AddCodeList) {
    handlerPageTemp = addCodeToHeader(handlerPageTemp, AddCodeList.header.join(''))
    handlerPageTemp = addCodeToFooter(handlerPageTemp, AddCodeList.footer.join(''))
    handlerPageTemp = handlerPageTemp.replace(/\s+/g, '')

    return handlerPageTemp
}

test('向路由文件注入页头和页脚代码', () => {
    const PageTemplate = ` 
        <template>
            <view>
                <view>isPage</view>
            </view>
        </template>
    `
    const AddCodeList = {
        header: ['<view>Header1</view>', '<view>Header2</view>'],
        footer: ['<view>Footer1</view>', '<view>Footer2</view>'],
    }

    const PageTemplateAfter = ` 
        <template>
            <view>
                <view>Header1</view>
                <view>Header2</view>
                <view>isPage</view>
                <view>Footer1</view>
                <view>Footer2</view>
            </view>
        </template>
    `.replace(/\s+/g, '');

    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})

test('向路由文件注入页头代码', () => {
    const PageTemplate = ` 
        <template>
            <view>
                <view>isPage</view>
            </view>
        </template>
    `
    const AddCodeList = {
        header: ['<view>Header1</view>'],
        footer: [],
    }

    const PageTemplateAfter = ` 
        <template>
            <view>
                <view>Header1</view>
                <view>isPage</view>
            </view>
        </template>
    `.replace(/\s+/g, '');

    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})

test('向路由文件注入页头和页脚代码, 有<view></view>根标签但没其他代码', () => {
    const PageTemplate = ` 
        <template>
            <view></view>
        </template>
    `
    const AddCodeList = {
        header: ['<view>Header1</view>', '<view>Header2</view>'],
        footer: ['<view>Footer1</view>', '<view>Footer2</view>'],
    }
    const PageTemplateAfter = ` 
        <template>
            <view>
                <view>Header1</view>
                <view>Header2</view>
                <view>Footer1</view>
                <view>Footer2</view>
            </view>
        </template>
    `.replace(/\s+/g, '');

    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})

test('向路由文件注入页头代码，但没有<view></view>根标签', () => {
    const PageTemplate = ` 
        <template></template>
    `
    const AddCodeList = {
        header: ['<view>Header1</view>'],
        footer: [],
    }

    const PageTemplateAfter = ` 
        <template></template>
    `.replace(/\s+/g, '');

    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})

test('向路由文件注入代码, 是完整的vue格式文件', () => {
    const PageTemplate = ` 
        <template>
            <view>234</view>
        </template>
        <script></script>
        <style></style>
    `
    const AddCodeList = {
        header: ['<view>Header1</view>'],
        footer: ['<view>Footer1</view>'],
    }

    const PageTemplateAfter = ` 
        <template>
            <view>
                <view>Header1</view>
                234
                <view>Footer1</view>
            </view>
        </template>
        <script></script>
        <style></style>
    `.replace(/\s+/g, '');

    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})

test('向路由文件注入代码, 但文件内容是空', () => {
    const PageTemplate = ``
    const AddCodeList = {
        header: ['<view>Header1</view>'],
        footer: ['<view>Footer1</view>'],
    }

    const PageTemplateAfter = ``.replace(/\s+/g, '');
    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})

test('向路由文件注入代码, 但缺少<template>标签', () => {
    const PageTemplate = ` 
        <script></script>
        <style></style>
    `
    const AddCodeList = {
        header: ['<view>Header1</view>'],
        footer: ['<view>Footer1</view>'],
    }

    const PageTemplateAfter = ` 
        <script></script>
        <style></style>
    `.replace(/\s+/g, '');

    const handlerPageTemp = handlePageCode(PageTemplate, AddCodeList)

    expect(handlerPageTemp).toBe(PageTemplateAfter)
})