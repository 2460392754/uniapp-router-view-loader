---
lang: zh-CN
title: 使用
description: 页面的描述
---

<Modal />

# 使用

::: tip
避免因为插件的处理规则对你产生困扰，请查看
[常见问题](./precautions.md)
:::

## 基本

#### 注入

:::: code-group
::: code-group-item App.vue

@[code vue{1-7}](../code/use/1/App.vue)

:::
::::

#### 使用

:::: code-group
::: code-group-item 运行前 pageA.vue 项目文件代码

@[code vue](../code/use/1/beforePageA.vue)

:::
::: code-group-item 插件修改后的代码

@[code vue{3-4,6-7}](../code/use/1/afterPageA.vue)

:::
::::

## 使用组件

支持使用 `easycom` 和 `Vue.component` 注册的全局组件

#### Vue.component

:::: code-group
::: code-group-item main.js

@[code js{4}](../code/use/2/main.js)

:::
::: code-group-item customCopyright.vue

@[code vue](../code/use/2/customCopyright.vue)

:::
::: code-group-item App.vue

@[code vue{1-4}](../code/use/2/App.vue)

:::
::::

#### easycom

使用 [uView 2](https://www.uviewui.com) 框架为例

:::: code-group
::: code-group-item pages.json

@[code json](../code/use/3/pages.json)

:::
::: code-group-item uni.scss

@[code scss](../code/use/3/uni.scss)

:::
::: code-group-item main.js

@[code js](../code/use/3/main.js)

:::
::: code-group-item App.vue

@[code vue{1-4}](../code/use/3/App.vue)

:::
::: code-group-item pageA.vue

@[code vue{11-14}](../code/use/3/pageA.vue)

:::
::::

## 设置组件属性

使用 `Vue.mixin` 注册文件进行混入全局默认属性

使用 [uView 2](https://www.uviewui.com) 框架为例

:::: code-group
::: code-group-item mixin.js
@[code js{4}](../code/use/4/mixin.js)
:::

::: code-group-item main.js
@[code js{4}](../code/use/4/main.js)
:::

::: code-group-item App.vue
@[code vue{1-4}](../code/use/4/app.vue)
:::

::: code-group-item pageA.vue
@[code vue{3}](../code/use/4/pageA.vue)
:::

::: code-group-item pageB.vue
@[code vue{3,12}](../code/use/4/pageB.vue)
:::
::::

## 获取组件实例

给组件添加 `ref` 属性，就在页面渲染后的任意位置获取当前组件实例

使用 [uView 2](https://www.uviewui.com) 框架为例

#### 页面级

:::: code-group
::: code-group-item App.vue
@[code vue{1-4}](../code/use/5/App.vue)
:::

::: code-group-item pageA.vue
@[code vue{11-15}](../code/use/5/pageA.vue)
:::
::::

#### 组件级

:::: code-group
::: code-group-item App.vue
@[code vue{1-4}](../code/use/5/App.vue)
:::

::: code-group-item pageB.vue
@[code vue{15-27}](../code/use/5/pageB.vue)
:::

::: code-group-item customSubmit.vue
@[code vue{9,13-16}](../code/use/5/customSubmit.vue)
:::
::::

## 非全局注入

使用 `Vue.mixin` 注册文件进行混入全局默认属性

使用 [uView 2](https://www.uviewui.com) 框架为例

:::: code-group
::: code-group-item mixin.js
@[code js](../code/use/6/mixin.js)
:::

::: code-group-item main.js
@[code js{4}](../code/use/6/main.js)
:::

::: code-group-item App.vue
@[code vue{1-7}](../code/use/6/App.vue)
:::

::: code-group-item pageA.vue
@[code vue{9-15}](../code/use/6/pageA.vue)
:::

::: code-group-item pageB.vue
@[code vue{9-15}](../code/use/6/pageB.vue)
:::
::::
