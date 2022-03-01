<template>
    <view class="content">
        <view @click="showToast">btn</view>
        <CustomSubmit />
    </view>
</template>

<script>
import CustomSubmit from '../../components/customSubmit.vue';
import { pageProvide } from 'uniapp-router-view-loader/src/project/vue3';
import { defineComponent, ref,provide } from 'vue';

export default defineComponent({
    components: {
        CustomSubmit
    },

    setup() {
        const toastRef = ref();

        const showToast = () => {
            console.log('click showToast', toastRef.value?.show);
            toastRef.value?.show('显示成功');
        };


		provide('abc','isABC')
        pageProvide({ toastRef });

        return {
            toastRef,
            showToast
        };
    }
});
</script>

<style></style>
