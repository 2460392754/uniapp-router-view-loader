<template>
    <view class="page-a">
        <view>无骨架屏</view>
    </view>
</template>

<script>
export default {
    created() {
        this.loadingPageVisible = true;

        setTimeout(() => {
            this.loadingPageVisible = false;
        }, 1000 * 3);
    }
};
</script>
