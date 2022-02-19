import { createSSRApp } from 'vue';
import App from './App.vue';
import Toast from './toast.vue';

export function createApp() {
    const app = createSSRApp(App);

    app.component('Toast', Toast);

    return {
        app
    };
}
