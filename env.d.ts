/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-08-31 09:17:35
 * @FilePath: /cxy-v3-template/env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import {DefineComponent} from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare const __APP_ENV__: string;

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare global {
	const ElMessage: typeof import('element-plus')['ElMessage'];
	const ElLoading: typeof import('element-plus')['ElLoading'];
}
