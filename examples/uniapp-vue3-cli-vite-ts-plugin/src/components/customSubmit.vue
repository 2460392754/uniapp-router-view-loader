<template>
    <view>
        <view @click="onSubmit">提交成功</view>
    </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ToastOpts } from './toast.vue';
import { componentInject } from 'uniapp-router-view-loader/src/project/vue3';

export default defineComponent({
    setup() {
        const getInjectData = componentInject<{ toastRef: ToastOpts }>();

        const onSubmit = () => {
            getInjectData.toastRef().show('提交成功');
        };

        return {
            onSubmit
        };
    }
});
</script>
