/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 17:51:28
 * @LastEditors: along
 * @LastEditTime: 2023-09-06 15:51:43
 * @FilePath: /cxy-food-menu/src/service/axios.ts
 */
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
import Qs from 'qs';

const service = axios.create({
	baseURL: __APP_ENV__,
	timeout: 10000,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
});

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// config.headers['token'] = '';
		return config;
	},
	(error: any) => {
		Promise.reject(error);
	}
);

service.interceptors.response.use(
	async (response: AxiosResponse) => {
		const {status, data} = response;
		if (status === 200) return data;
		if (status === 401) {
			// message.error('Token获取失败');
			return Promise.reject(data);
		}
		return Promise.reject(data);
	},
	(error: any) => {
		// const {status} = error?.response;
		// if (status === 401) {
		// 	//
		// } else {
		// 	// message.error(error);
		// 	return Promise.reject(error);
		// }
	}
);

export function post({url, params, data, headers} = {}) {
	return new Promise((resolve, reject) => {
		service
			.post(url, data, {
				params,
				headers,
			})
			.then((response) => {
				resolve(response?.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}

export function get({url, params, headers}) {
	return new Promise((resolve, reject) => {
		service
			.get(url, {
				params: Qs.parse(params),
				headers,
			})
			.then((response) => {
				resolve(response?.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
