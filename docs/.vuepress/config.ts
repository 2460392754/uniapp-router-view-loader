import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import type { ViteBundlerOptions } from '@vuepress/bundler-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // 站点配置
    lang: 'en-US',
    title: 'uniapp-router-view-loader',
    description: 'Just playing around',
    base: '/',

    bundlerConfig: {
        viteOptions: {
            // base: './'
        }
    },

    plugins: [
        // ['vuepress-plugin-vuepress2.x-code-copy', true]
        // ['vuepress-plugin-copy-code2yarn dev', {}],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索'
                    }
                }
            }
        ]
    ],

    theme: 'vuepress-theme-quicksand',
    themeConfig: {
        contributors: false,
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/introduce' },
            { text: '插件市场', link: '' },
            { text: 'Gitee', link: '' },
            {
                text: 'Github',
                link: 'https://github.com/2460392754/uniapp-router-view-loader'
            }
        ],

        sidebarDepth: 1,
        sidebar: [
            {
                text: '指南',
                children: [
                    '/guide/introduce',
                    '/guide/install',
                    '/guide/configure',
                    '/guide/use',
                    '/guide/precautions'
                ]
            },
            {
                text: '更新日志',
                link: '/changeLog'
            },
            {
                text: '关于我',
                link: '/aboutMe'
            },
            {
                text: '实现原理',
                children: []
            }
        ]
    }
});
