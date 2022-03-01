<template>
    <ParentLayout>
        <template #page-bottom>
            <Modal />
            <Footer />
        </template>
    </ParentLayout>
</template>

<script lang="ts">
import ParentLayout from 'vuepress-theme-quicksand/lib/layouts/Layout.vue';
import Modal from '../../../components/modal.vue';
import Footer from '../../../components/footer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        ParentLayout
        // Modal,
        // Footer
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
