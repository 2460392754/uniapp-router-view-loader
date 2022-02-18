<template>
    <view class="page-b">
        <CustomSubmit />
    </view>
</template>

<script>
import CustomSubmit from './customSubmit.vue';

export default {
    components: {
        CustomSubmit
    },

    provide() {
        return {
            provideData: this.provideData
        };
    },

    data() {
        return {
            provideData: {
                $refs: this.$refs
            }
        };
    }
};
</script>
