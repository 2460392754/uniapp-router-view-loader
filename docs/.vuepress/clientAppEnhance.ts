import { defineClientAppEnhance } from '@vuepress/client';
import Modal from '../components/modal.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    addBaiduStatistics();
    app.component('Modal', Modal);
});

/**
 * 添加 百度统计
 */
function addBaiduStatistics() {
    if (process.env.NODE_ENV === 'production') {
        try {
            const hm = document.createElement('script');
            const s = document.getElementsByTagName('script')[0];

            hm.src = 'https://hm.baidu.com/hm.js?ae7cc2ff26fc29941dee326583e38a5b';
            s.parentNode.insertBefore(hm, s);
        } catch (e) {}
    }
}
