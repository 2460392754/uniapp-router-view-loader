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

    markdown: {
        extractHeaders: {
            level: [2, 3, 4]
        }
    },

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

        sidebarDepth: 4,
        sidebar: [
            '/md/introduce',
            '/md/install',
            '/md/configure',
            '/md/use',
            '/md/precautions',
            '/md/changeLog',
            '/md/aboutMe',
            '/md/followUpPlan'

            // {
            //     text: '实现原理',
            //     children: []
            // }
        ]
    }
});
