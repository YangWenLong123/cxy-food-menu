<!--
 * @Author: zxx
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-09-06 15:58:50
 * @FilePath: /cxy-food-menu/src/views/index.vue
-->
<template>
	<van-button type="primary" class="button">主要按钮</van-button>
	<div class="box">375 * 375</div>
</template>

<script lang="ts" setup>
// import {useLoginStore} from '~/stores';
// const {userInfo} = useLoginStore();
import api from '~/api';

onMounted(() => {
	api.login({account: '123'});
});
</script>

<style lang="scss" scoped>
.button {
	width: 10rem;
	height: 1rem;
}
.box {
	width: 5rem;
	height: 5rem;
	background: red;
	font-size: 0.4rem;
}
</style>
