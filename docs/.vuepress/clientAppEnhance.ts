import { defineClientAppEnhance } from '@vuepress/client';
import Modal from '../components/modal.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component('Modal', Modal);
});
