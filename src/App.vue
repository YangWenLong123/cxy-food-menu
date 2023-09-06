<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-08-31 11:30:59
 * @FilePath: /cxy-v3-template/src/App.vue
-->
<script setup lang="ts">
import {RouterView} from 'vue-router';
</script>

<template>
	<keep-alive>
		<RouterView />
	</keep-alive>
</template>

<style lang="scss">
@import '~/assets/css/global.scss';
</style>
