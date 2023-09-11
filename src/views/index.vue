<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-09-11 13:28:27
 * @FilePath: /cxy-food-menu/src/views/index.vue
-->
<template>
	<div class="box">375 * 375</div>
	<van-button type="primary" size="small">主要按钮</van-button>
</template>

<script lang="ts" setup>
// import {useLoginStore} from '~/stores';
// const {userInfo} = useLoginStore();
// import api from '~/api';

onMounted(() => {
	// api.login({account: '123'});
});
</script>

<style lang="scss" scoped>
.box {
	width: 187.5px;
	height: 187.5px;
	background: red;
	font-size: 30px;
}
</style>
