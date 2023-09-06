/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 17:53:24
 * @LastEditors: along
 * @LastEditTime: 2023-09-06 15:51:11
 * @FilePath: /cxy-food-menu/src/api/module/login.ts
 */
import {post} from '~/service/axios';

export const login = (data: any) => {
	return post({
		url: '/api/login',
		method: 'post',
		data: data,
	});
};
