import path from 'path';

export default {
    name: 'vuepress-theme-my-custom-local',
    extends: 'vuepress-theme-quicksand',
    layouts: {
        Layout: path.resolve(__dirname, 'layouts/Layout.vue')
    }
};
