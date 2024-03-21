<!--
 * @Author: along
 * @Description:
 * @Date: 2024-03-21 11:22:55
 * @LastEditors: along
 * @LastEditTime: 2024-03-21 11:36:21
 * @FilePath: /cxy-food-menu/src/components/header/index.vue
-->
<script setup lang="ts">
const state = reactive({
	iconList: [
		{
			icon: 'icon-jiantou-right-top',
			tooltip: '盒子首页',
			type: 'outside',
			link: 'http://www.alongweb.top',
		},
	],
});

const onGoHome = () => {
	window.location.href = 'http://www.alongweb.top/';
};

const opNextUrl = (record: any) => {
	if (record.type === 'outside') {
		window.location.href = record.link;
	} else if (record.type === 'station') {
		router.push({path: record.link});
	}
};

const onGitHub = () => {
	window.location.href = 'https://github.com/YangWenLong123';
};
</script>

<template>
	<div
		class="cxyHeaderComponents"
		:style="{border: showBottom ? '1px #000000 solid' : ''}"
	>
		<div class="left" @click="onGoHome()">
			<img src="http://www.alongweb.top/image/logo.svg" alt="" />
			<div class="left_title">Web Box</div>
		</div>
		<div class="right">
			<div
				class="items"
				v-for="(record, index) in state.iconList"
				:key="index"
				@click="opNextUrl(record)"
			>
				<div class="item">
					<div class="item_text" :class="path === record.link ? 'active' : ''">
						{{ record.tooltip }}
					</div>
					<img src="@/assets/images/area.png" alt="" class="area" />
				</div>
			</div>
			<div class="lines"></div>
			<div @click="onGitHub()">
				<img src="@/assets/images/github.png" class="git" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import url('./index.scss');
</style>
