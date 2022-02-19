<template>
    <view class="page-b">
        <CustomSubmit />
    </view>
</template>

<script>
import { PageProvideMixin } from 'uniapp-router-view-loader/src/project/vue2';
import CustomSubmit from './customSubmit.vue';

export default {
    mixins: [PageProvideMixin],

    components: {
        CustomSubmit
    }
};
</script>
