/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 16:03:32
 * @FilePath: /cxy-v3-template/src/stores/login.ts
 */
import {defineStore} from 'pinia';

function store() {
	const state = reactive({
		userInfo: {
			login: false,
		},
	});
	return {
		...toRefs(state),
	};
}
export const useLoginStore = defineStore('login', store, {
	persist: {
		enabled: true,
	},
});
