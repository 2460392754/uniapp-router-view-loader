import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
// import { copyCode } from 'vuepress-plugin-copy-code2';

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-US',
    title: 'uniapp-router-view-loader',
    description: 'Just playing around',

    plugins: [
        // ['vuepress-plugin-vuepress2.x-code-copy', true]
        // ['vuepress-plugin-copy-code2yarn dev', {}],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search'
                    },
                    '/zh/': {
                        placeholder: '搜索'
                    }
                }
            }
        ]
    ],

    // 主题和它的配置
    // theme: '@vuepress/theme-default',
    // theme: 'antdocs',
    // theme: 'vuepress-theme-gungnir',
    // theme: 'vt',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',

        navbar: [
            { text: '指南', link: '/guide/introduce' },
            { text: '插件市场', link: '/guide/' },
            { text: 'Gitee', link: '/guide/' },
            {
                text: 'Github',
                link: 'https://github.com/2460392754/uniapp-router-view-loader'
            }
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                text: '指南',
                link: '/guide/',
                children: [
                    '/guide/introduce',
                    '/guide/install',
                    '/guide/configure',
                    '/guide/use',
                    '/guide/precautions'
                ]
            }
        ]
    }
});
