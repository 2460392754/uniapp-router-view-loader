<template>
    <view>
        <u-button type="primary" text="显示 success toast" @click="showToast" />
        <CustomSubmit />
    </view>
</template>

<script>
import CustomSubmit from '../../components/customSubmit.vue';
import { PageProvideMixin } from 'uniapp-router-view-loader/src/project/vue2';

export default {
    mixins: [PageProvideMixin],

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
