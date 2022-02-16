---
lang: zh-CN
title: 配置
description: 页面的描述
---

# 配置

### Vue2 vue-cli

`vue.config.js`文件（没有就创建）

```js
module.exports = {
    chainWebpack: (config) => {
        config.resolveLoader.alias.set(
            'custom-uniapp-router-view-loader',
            'uniapp-router-view-loader'
        );

        config.module
            .rule('vue')
            .use('custom-uniapp-router-view-loader')
            .loader('custom-uniapp-router-view-loader')
            .options({
                publicPath: './src'
            })
            .end();
    }
};
```

### Vue2 HBuilderX

`vue.config.js`文件（没有就创建）

```js
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
            .options({
                publicPath: './'
            })
            .end();
    }
};
```

### Vue3 vue-cli 或 HBuilderX

`vite.config.ts`文件（没有就创建）

```ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { vitePlugin } from 'uniapp-router-view-loader';

export default defineConfig({
    plugins: [
        uni(),
        vitePlugin({
            publicPath: './src'
        })
    ]
});
```

### 配置参数

| 属性名     | 说明                                                                                                                           | 是否必填 | 默认值 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ |
| publicPath | `App.vue`和`pages.json`基于当前项目所在的相对路径(这 2 个文件需要在同一层级下)，默认情况下`HBuilderX`填`./`,`vue-cli`填`./src` | 是       | `./`   |
