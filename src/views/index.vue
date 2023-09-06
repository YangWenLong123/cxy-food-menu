<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-09-06 15:52:36
 * @FilePath: /cxy-food-menu/src/views/index.vue
-->
<template>
	<van-button type="primary" class="button">主要按钮</van-button>
	<van-button type="success">成功按钮</van-button>
	<van-button type="default">默认按钮</van-button>
	<van-button type="warning">警告按钮</van-button>
	<van-button type="danger">危险按钮</van-button>

	<van-radio-group v-model="checked">
		<van-radio name="1">单选框 1</van-radio>
		<van-radio name="2">单选框 2</van-radio>
	</van-radio-group>
</template>

<script lang="ts" setup>
// import {useLoginStore} from '~/stores';
// const {userInfo} = useLoginStore();
import api from '~/api';

const checked = ref('1');

onMounted(() => {
	api.login({account: '123'});
});
</script>

<style lang="scss" scoped>
.button {
	width: 10rem;
}
</style>
