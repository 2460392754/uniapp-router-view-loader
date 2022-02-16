# uniapp-router-view-loader

## 兼容性

| vue-cli | hbuilderx |
| ------- | --------- |
| √       | √         |

| vue2 | vue3 | nvue | ts  | webpack | vite |
| ---- | ---- | ---- | --- | ------- | ---- |
| √    | √    | √    | √   | √       | √    |

| H5  | 微信 | 支付宝 | 字节跳动 | QQ  | 百度 | 360 | 飞书 | 快手 | 华为 | 快应用 | App |
| --- | ---- | ------ | -------- | --- | ---- | --- | ---- | ---- | ---- | ------ | --- |
| √   | √    | √      | √        | √   | √    | √   | √    | ?    | ?    | ?      | √   |

## 单元测试覆盖率

| File     | Statements | Branches | Functions | Lines |
| -------- | ---------- | -------- | --------- | ----- |
| utils.js | 100%       | 95.45%   | 100%      | 100%  |

## 关于

-   支持自动解析`pages.json`的路由文件（包括分包路由），自动全局注入

## 安装

```bash
yarn add uniapp-router-view-loader --registry=https://pocky-npm.pkg.coding.net/npm/uniapp-router-view-loader/
```

## vue2 注册插件

`vue.config.js`文件（没有就创建）

```javascript
module.exports = {
    // ...

    chainWebpack: (config) => {
        // === 使用 cli 脚手架工具创建的项目，使用这行 ===
        config.resolveLoader.alias.set(
            'custom-uniapp-router-view-loader',
            'uniapp-router-view-loader'
        );
        // === 使用 cli 脚手架工具创建的项目，使用这行 ===

        // === 使用 hbuilder 工具创建的项目，使用这行 ===
        config.resolveLoader.alias.set(
            'custom-uniapp-router-view-loader',
            __dirname + '/node_modules/uniapp-router-view-loader'
        );
        // === 使用 hbuilder 工具创建的项目，使用这行 ===

        config.module
            .rule('vue')
            .use('custom-uniapp-router-view-loader')
            .loader('custom-uniapp-router-view-loader')
            .options({
                publicPath: './src',
                VNode: {
                    'VNode-Navbar': '/src/template/navbar',
                    'VNode-Copyright': '/src/template/copyright'
                }
            })
            .end();
    }
};
```

## vue3 注册插件

`vite.config.js`文件（没有就创建）

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

## Loader Options

| 属性名     | 说明                                                                           | 是否必填 |
| ---------- | ------------------------------------------------------------------------------ | -------- |
| publicPath | `App.vue`和`pages.json`基于当前项目所在的相对路径(这 2 个文件需要在同一层级下) | 是       |

## 常见问题

-   Q: 更新 `App.vue` 的 `Template` 内容，页面没更新
-   A: 内容实在构建阶段创建的，遇到这种情况需要重新编译
