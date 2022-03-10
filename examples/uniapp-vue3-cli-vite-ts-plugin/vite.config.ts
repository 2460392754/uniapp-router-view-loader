import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { vitePlugin } from 'uniapp-router-view-loader';

export default defineConfig({
    plugins: [
        uni(),
        vitePlugin({
            vLabel: {
                div: 'view',
                span: 'text'
                // 'u-text': 'u--text',
                // 'u-form': 'u--form',
                // 'u-input': 'u--input',
                // 'u-textarea': 'u--textarea'
            }
        })
    ]
});
