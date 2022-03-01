import { defineClientAppEnhance } from '@vuepress/client';
import Modal from '../components/modal.vue';
import Footer from '../components/footer.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component('Modal', Modal);
    app.component('Footer', Footer);
});
