<template>
    <view :class="MyClassList" :style="{ color: 'red' }" @click="onAddClass">123</view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const MyClassList: (number | string)[] = ['abc'];

        function onAddClass() {
            MyClassList.push(Date.now());
        }

        return {
            MyClassList,
            onAddClass
        };
    }
});
</script>
