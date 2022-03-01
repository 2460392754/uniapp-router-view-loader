<template>
    <view :class="['toast', visible ? 'visible' : '']">{{ title }}</view>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            visible: false
        };
    },

    methods: {
        show(title) {
            if (this.visible === true) return;

            this.title = title;
            this.visible = true;

            setTimeout(() => {
                this.visible = false;
            }, 2000);
        }
    }
};
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
