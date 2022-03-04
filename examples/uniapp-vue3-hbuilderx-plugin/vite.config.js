import { defineConfig } from 'vite'
import { vitePlugin } from 'uniapp-router-view-loader'
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
    plugins: [
        uni(),
        vitePlugin()
    ]
})
