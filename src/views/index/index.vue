<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-10-11 15:39:35
 * @FilePath: /cxy-food-menu/src/views/index/index.vue
-->
<template>
	<div class="CxyIndex">
		<img src="@/assets/images/home.webp" alt="" />

		<div class="button" @click="onNext()">开始干饭</div>
	</div>
</template>

<script lang="ts" setup>
import router from '~/router';

const onNext = () => {
	router.push({name: 'Home'});
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
@import './index';
</style>
