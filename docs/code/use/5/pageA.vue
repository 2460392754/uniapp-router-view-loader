<template>
    <view class="page-a">
        <u-button text="显示 success toast" @click="showToast" />
    </view>
</template>

<script>
export default {
    methods: {
        showToast() {
            this.$refs.uToast.show({
                type: 'success',
                message: '庄生晓梦迷蝴蝶'
            });
        }
    }
};
</script>
