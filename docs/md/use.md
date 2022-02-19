---
lang: zh-CN
title: 使用
description: 页面的描述
---

<Modal />

# 使用

::: tip
避免因为插件的处理规则对你产生困扰，请查看
[注意事项](./precautions.md)
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

##### vue2

使用工具提供的 `mixin` 文件在页面级的 `provide` 提供当前页面的 `$refs`。然后在页面的组件里使用对应的 `mixin` 文件注入相应的数据，即可实现任意组件内调用 `App.vue` 文件中注入的组件。

组件文件里 `this.$urvl.$refs` ,可以直接访问页面文件里的 `$refs`

为了抹平各平台差异，需要组件在 `$refs.xxxx` 后面加上 `$v` 指向组件实例

:::: code-group
::: code-group-item App.vue
@[code vue{1-4}](../code/use/5/App.vue)
:::

::: code-group-item pageB.vue
@[code vue{8,12}](../code/use/5/pageB.vue)
:::

::: code-group-item customSubmit.vue
@[code vue{8,11,15-18}](../code/use/5/customSubmit.vue)
:::
::::

##### vue3

:::: code-group
::: code-group-item App.vue
@[code vue{1-4,6}](../code/use/7/App.vue)
:::

::: code-group-item toast.vue
@[code vue](../code/use/7/toast.vue)
:::

::: code-group-item main.ts
@[code ts{3,8}](../code/use/7/main.ts)
:::

::: code-group-item pageA.vue
@[code vue{8,12,26}](../code/use/7/pageA.vue)
:::

::: code-group-item customSubmit.vue
@[code vue{7-8,10,14,17}](../code/use/7/customSubmit.vue)
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
