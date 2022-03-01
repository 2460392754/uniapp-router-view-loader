import { createSSRApp } from 'vue';
import App from './App.vue';
import Toast from './components/toast.vue';

export function createApp() {
    const app = createSSRApp(App);

    app.component('Toast', Toast);

    return {
        app
    };
}
