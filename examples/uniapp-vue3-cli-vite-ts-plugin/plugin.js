
/**
 * vite
 * @returns 
 */
export function vitePlugin(opts) {
    console.log('vitePlugin', opts)
    return {
        name: 'asd',

        // 插件排序(执行顺序)
        enforce: 'pre',

        config(config) {
            console.log('config', config);
            return {}
        },

        transform(code, path) {

            if (path === '/Users/pocky/code/demo/uniapp-ts-vue3-vite-plugin/src/App.vue') {
                console.log(code);
                return {
                    code: `<script lang="ts">
                    console.log('is ts App.vue 1232123');
                    </script>

                    <style lang="scss"></style>
                    `
                }
            }

            if (path === '/Users/pocky/code/demo/uniapp-ts-vue3-vite-plugin/src/pages/home/index.vue') {
                return {
                    code: `<template>
                    <view class="page">
                        <view>AAA</view>
                        <Demo />
                    </view>
                </template>
                
                <script lang="ts">
                import { ref, defineComponent } from 'vue';
                import Demo from '../../components/demo.vue';
                
                console.log(Demo);
                
                export default defineComponent({
                    components: {
                        Demo
                    },
                
                    setup() {
                        return {};
                    }
                });
                </script>
                
                <style></style>
                `
                }
            }

            return { code }
        },
    }
}
