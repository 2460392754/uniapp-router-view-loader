import { handleGetTemplateRowCode, handleGetTemplateHeaderOrFooterLabelCode } from '../src/utils'

const html = `
<template>
            <view>My Header1</view>
            <view>My Header2</view>
            <view><text>My Header3</text> </view>
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

const formatCode = handleGetTemplateRowCode(html);

console.log(formatCode)
console.log(handleGetTemplateHeaderOrFooterLabelCode(formatCode))
