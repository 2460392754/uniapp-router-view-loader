<template>
    <view class="page">
        <view @click="showToast">btn</view>
        <CustomSubmit />
    </view>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { ToastOpts } from './toast.vue';
import CustomSubmit from './customSubmit.vue';
import { pageProvide } from 'uniapp-router-view-loader/dist/project/vue3';

export default defineComponent({
    components: {
        CustomSubmit
    },

    setup() {
        const toastRef = ref<ToastOpts>();

        const showToast = () => {
            toastRef.value?.show('显示成功');
        };

        pageProvide({ toastRef });

        return {
            toastRef,
            showToast
        };
    }
});
</script>

<style></style>
