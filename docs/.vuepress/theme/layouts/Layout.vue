<template>
    <ParentLayout>
        <template #page-bottom>
            <Modal />
            <div class="footer">
                <span>友情链接: </span>

                <a
                    v-for="(item, i) of LinksData"
                    class="external-link"
                    rel="noopener noreferrer"
                    target="_blank"
                    :href="item.like"
                    :aria-label="item.text"
                >
                    <span class="name">{{ item.text }}</span>
                    <ExternalLinkIcon />
                </a>
                <div class="copyright">Copyright © 2022 | 浙ICP备19047959号-3</div>
            </div>
        </template>
    </ParentLayout>
</template>

<script lang="ts">
import ParentLayout from 'vuepress-theme-quicksand/lib/layouts/Layout.vue';
import Modal from '../../../components/modal.vue';
import { useRouteLocale } from '@vuepress/client';
import { ExternalLinkIcon } from '@vuepress/plugin-external-link-icon/lib/client/index.js';
import LinksData from '../../data/links';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        ParentLayout,
        Modal,
        ExternalLinkIcon
    },

    setup() {
        return {
            LinksData
        };
    }
});
</script>

<style lang="scss" scoped>
.footer {
    text-align: center;

    .external-link {
        color: var(--c-text-accent);
        margin-left: 10px;
    }

    .copyright {
        text-align: center;
        margin-top: 20px;
    }
}
</style>
