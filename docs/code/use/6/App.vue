<template>
    <u-skeleton v-if="skeletonVisible" rows="3" title loading />

    <view-router />

    <u-loading-page :loading="loadingPageVisible" />
</template>

<script>
export default {};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
</style>
