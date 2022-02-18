import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import type { ViteBundlerOptions } from '@vuepress/bundler-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // 站点配置
    lang: 'en-US',
    title: 'uniapp-router-view-loader',
    description: 'Just playing around',
    base: '/uniapp-router-view-loader/',

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
            { text: '配置', link: '/md/configure' },
            { text: '插件市场', link: '' },
            { text: 'Gitee', link: '' },
            {
                text: 'Github',
                link: 'https://github.com/2460392754/uniapp-router-view-loader'
            }
        ],

        // sidebarDepth: 2,
        // sidebar: 'auto'
        sidebar: [
            //     {
            //         text: '指南',
            //         children: [
            //             '/guide/introduce',
            //             '/guide/install',
            //             '/guide/configure',
            //             '/guide/use',
            //             '/guide/precautions'
            //         ]
            //     },
            {
                text: '介绍',
                link: '/md/introduce'
            },
            {
                text: '安装',
                link: '/md/install'
            },
            {
                text: '配置',
                link: '/md/configure'
            },
            {
                text: '使用',
                link: '/md/use'
            },
            {
                text: '注意事项',
                link: '/md/precautions'
            },
            {
                text: '更新日志',
                link: '/md/changeLog'
            },
            {
                text: '关于我',
                link: '/md/aboutMe'
            }
            // {
            //     text: '实现原理',
            //     children: []
            // }
        ]
    }
});
