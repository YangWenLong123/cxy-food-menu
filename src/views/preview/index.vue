<!--
 * @Author: along
 * @Description: 预览
 * @Date: 2024-03-21 11:02:21
 * @LastEditors: along
 * @LastEditTime: 2024-04-10 14:24:27
 * @FilePath: /cxy-food-menu/src/views/preview/index.vue
-->
<script setup lang="ts">
import { useCssModule } from 'vue'
import HeaderComponents from '@/components/header/index.vue';

const css = useCssModule('preview');
</script>

<template>
	<div :class="[css.box]">
  <HeaderComponents />
		<div :class="[css.phone]">
			<iframe
				src="http://food.alongweb.top"
				frameborder="0"
				width="375"
				height="667"
			></iframe>
		</div>
	</div>
</template>

<style lang="less" module="preview" scoped>
@import url('./index.module.css');
</style>