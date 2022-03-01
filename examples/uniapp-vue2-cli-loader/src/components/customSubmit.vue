<template>
    <view class="custom-submit">
        <u-button text="提交" @click="onSubmit" />
    </view>
</template>

<script>
import { ComponentInjectMixin } from 'uniapp-router-view-loader/src/project/vue2';

export default {
    mixins: [ComponentInjectMixin],

    methods: {
        onSubmit() {
            this.$urvl.$refs.uToast.$v.show({
                type: 'success',
                message: '提交成功'
            });
        }
    }
};
</script>
