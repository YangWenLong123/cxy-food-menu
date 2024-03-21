<!--
 * @Author: along
 * @Description:
 * @Date: 2024-03-21 11:02:21
 * @LastEditors: along
 * @LastEditTime: 2024-03-21 11:26:46
 * @FilePath: /cxy-food-menu/src/views/preview/index.vue
-->
<script setup lang="ts">
import HeaderComponents from '~/components/header/index.vue';
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

<style lang="scss" module="preview" scoped>
@import url('./index.module.css');
</style>
