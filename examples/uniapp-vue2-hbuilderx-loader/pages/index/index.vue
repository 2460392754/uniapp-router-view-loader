<template>
    <view class="content">
        <u-button type="primary" text="显示 success toast" @click="showToast" />
        <Submit />
        <!--     <u-button type="primary" text="显示 loading page" @click="showLoadingPage" /> -->
    </view>
</template>

<script>
import Submit from '../../components/submit.vue';

export default {
    components: {
        Submit
    },

    methods: {
        showToast() {
            this.$refs.uToast.show({
                type: 'success',
                message: '庄生晓梦迷蝴蝶'
            });
        },

        showLoadingPage() {
            this.$refs.loadingPage.loading = true;

            setTimeout(() => {
                this.$refs.loadingPage.loading = false;
            }, 1000 * 3);
        }
    }
};
</script>

<style></style>
