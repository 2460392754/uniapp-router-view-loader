<template>
    <div class="footer">
        <span>友情链接: </span>

        <a
            v-for="(item, i) of LinksData"
            class="external-link"
            rel="noopener noreferrer"
            target="_blank"
            :href="item.link"
            :aria-label="item.text"
        >
            <span class="name">{{ item.text }}</span>
            <ExternalLinkIcon />
        </a>
        <div class="copyright">Copyright © 2022 | 浙ICP备19047959号-3</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ExternalLinkIcon } from '@vuepress/plugin-external-link-icon/lib/client/index.js';
import LinksData from '../.vuepress/data/links';

export default defineComponent({
    components: {
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
