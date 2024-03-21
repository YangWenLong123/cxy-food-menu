/*
 * @Author: along
 * @Description: 路由配置
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2024-03-21 11:05:17
 * @FilePath: /cxy-food-menu/src/router/index.ts
 */
import {createRouter, createWebHistory} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Index',
		component: () => import('~/views/index/index.vue'),
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('~/views/home/index.vue'),
	},
	{
		path: '/cook',
		name: 'Cook',
		component: () => import('~/views/cook/index.vue'),
	},
	{
		path: '/my',
		name: 'My',
		component: () => import('~/views/my/index.vue'),
	},
	{
		path: '/record',
		name: 'Record',
		component: () => import('~/views/record/index.vue'),
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import('~/views/search/index.vue'),
	},
	{
		path: '/preview',
		name: 'Preview',
		component: () => import('~/views/preview/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
