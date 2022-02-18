import { defineClientAppEnhance } from '@vuepress/client';
// import Layout from '../components/layout.vue';
import Modal from '../components/modal.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component('Modal', Modal);
    // app.component('Layout', Layout);
});
