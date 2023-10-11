/*
 * @Author: along
 * @Description: 路由配置
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-10-11 15:53:47
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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
