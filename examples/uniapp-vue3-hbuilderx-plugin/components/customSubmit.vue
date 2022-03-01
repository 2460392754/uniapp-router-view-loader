<template>
    <view>
        <view @click="onSubmit">提交成功</view>
    </view>
</template>

<script>
import { componentInject } from 'uniapp-router-view-loader/src/project/vue3';
import { defineComponent,inject } from 'vue';

export default defineComponent({
    setup() {
        const getInjectData = componentInject();
		
		console.log('inject abc',inject('abc' ))

        const onSubmit = () => {
			console.log(getInjectData)
            getInjectData.toastRef().show('提交成功');
        };

        return {
            onSubmit
        };
    }
});
</script>
