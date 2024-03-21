<!--
 * @Author: along
 * @Description: 搜索
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2024-03-21 14:12:09
 * @FilePath: /cxy-food-menu/src/views/home/components/search/index.vue
-->

<script lang="ts" setup>
// import {useLoginStore} from '~/stores';
// const {userInfo} = useLoginStore();
// import api from '~/api';

const keyword = ref<String>('');

onMounted(() => {
	// api.login({account: '123'});
});
</script>

<template>
	<div class="CxySearch">
		<van-search
			v-model="keyword"
			placeholder="请输入搜索关键词"
			class="search"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import './index';
</style>
