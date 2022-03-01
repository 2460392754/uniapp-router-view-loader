<template>
    <view :class="['toast', visible ? 'visible' : '']">{{ title }}</view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export interface ToastOpts {
    title: string;
    visible: boolean;
    show: (msg: string) => void;
}

export default defineComponent({
    setup(props, ctx) {
        const title = ref<String>('');
        const visible = ref<Boolean>(false);

        const show = (msg: string) => {
            if (visible.value === true) return;

            title.value = msg;
            visible.value = true;

            setTimeout(() => {
                visible.value = false;
            }, 2000);
        };

        return {
            title,
            visible,
            show
        };
    }
});
</script>

<style lang="scss" scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    background: #2bdd62;
    color: #27a34d;
    border-radius: 6rpx;
    transition: all 1s;
    opacity: 0;

    &.visible {
        opacity: 1;
    }
}
</style>
