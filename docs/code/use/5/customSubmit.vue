<template>
    <view class="custom-submit">
        <u-button text="提交" @click="onSubmit" />
    </view>
</template>

<script>
export default {
    inject: ['provideData'],

    methods: {
        onSubmit() {
            this.provideData.$refs.uToast.show({
                type: 'success',
                message: '提交成功'
            });
        }
    }
};
</script>
