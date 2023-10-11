<!--
 * @Author: along
 * @Description: 主页
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-10-11 15:47:24
 * @FilePath: /cxy-food-menu/src/views/home/index.vue
-->
<template>
	<div class="CxyHome">
		<CxySearch />
		<CxyNav />
	</div>
</template>

<script lang="ts" setup>
import CxySearch from './components/search/index.vue';
import CxyNav from './components/nav/index.vue';

onMounted(() => {});
</script>

<style lang="scss" scoped>
@import './index';
</style>
