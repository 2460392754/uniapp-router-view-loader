---
lang: zh-CN
title: 配置
description: 页面的描述
---

# 配置

### Vue2

`vue.config.js`文件（没有就创建）

:::: code-group
::: code-group-item Vue-Cli

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
                vLabel: {
                    div: 'view',
                    span: 'text'
                    // 'u-text': 'u--text',
                    // 'u-form': 'u--form',
                    // 'u-input': 'u--input',
                    // 'u-textarea': 'u--textarea'
                }
            })
            .end();
    }
};
```

:::
::: code-group-item HBuilderX

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
                vLabel: {
                    div: 'view',
                    span: 'text'
                    // 'u-text': 'u--text',
                    // 'u-form': 'u--form',
                    // 'u-input': 'u--input',
                    // 'u-textarea': 'u--textarea'
                }
            })
            .end();
    }
};
```

:::
::::

### Vue3

`vite.config.ts`文件（没有就创建）

:::: code-group
::: code-group-item Vue-Cli

```ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { vitePlugin } from 'uniapp-router-view-loader';

export default defineConfig({
    plugins: [
        uni(),
        vitePlugin({
            vLabel: {
                div: 'view',
                span: 'text'
                // 'u-text': 'u--text',
                // 'u-form': 'u--form',
                // 'u-input': 'u--input',
                // 'u-textarea': 'u--textarea'
            }
        })
    ]
});
```

:::
::: code-group-item HBuilderX

```ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { vitePlugin } from 'uniapp-router-view-loader';

export default defineConfig({
    plugins: [
        uni(),
        vitePlugin({
            vLabel: {
                div: 'view',
                span: 'text'
                // 'u-text': 'u--text',
                // 'u-form': 'u--form',
                // 'u-input': 'u--input',
                // 'u-textarea': 'u--textarea'
            }
        })
    ]
});
```

:::
::::

### 配置参数

| 属性名 | 说明                                                | 是否必填 | 默认值 |
| ------ | --------------------------------------------------- | -------- | ------ |
| vLabel | 虚拟标签替换，可以静态全局检索 `vue` 文件代码并进行替换 | 否       | -      |
