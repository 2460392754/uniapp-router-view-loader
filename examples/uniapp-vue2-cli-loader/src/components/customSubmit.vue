<template>
    <view class="custom-submit">
        <u-button text="提交" @click="onSubmit" />
    </view>
</template>

<script>
export default {
    methods: {
        onSubmit() {
            this.$root.$refs.uToast.show({
                type: 'success',
                message: '提交成功'
            });
        }
    }
};
</script>
