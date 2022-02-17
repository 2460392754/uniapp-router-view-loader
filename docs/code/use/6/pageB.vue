<template>
    <view class="page-b">
        <view>有骨架屏</view>
    </view>
</template>

<script>
export default {
    created() {
        this.skeletonVisible = true;

        setTimeout(() => {
            this.skeletonVisible = false;
        }, 1000 * 3);
    }
};
</script>
