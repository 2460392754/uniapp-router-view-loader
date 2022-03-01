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
