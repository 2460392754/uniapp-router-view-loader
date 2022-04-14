<template>
    <view>
        <template>
            <view class="nav-bar-text">首页</view>
        </template>

        <u-button type="primary" text="显示 success toast" @click="showToast" />
        <CustomSubmit />
    </view>
</template>

<script>
import CustomSubmit from '../../components/customSubmit.vue';

export default {
    components: {
        CustomSubmit
    },

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

<style></style>
