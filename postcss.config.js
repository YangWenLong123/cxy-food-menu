/*
 * @Author: zxx
 * @Description:
 * @Date: 2023-08-30 16:18:25
 * @LastEditors: zxx
 * @LastEditTime: 2023-09-06 15:49:24
 * @FilePath: /cxy-food-menu/postcss.config.js
 */
module.exports = {
	plugins: {
		autoprefixer: {
			overrideBrowserslist: [
				'Android 4.1',
				'iOS 7.1',
				'Chrome > 31',
				'not ie <= 11',
				'ff >= 30',
				'> 1%',
				'last 2 versions', // 所有主流浏览器最近2个版本
			],
			grid: true,
		},
		'postcss-pxtorem': {
			rootValue: 75, // 设计稿宽度/10，例如设计稿宽度为375px，则rootValue为37.5
			propList: ['*'],
			selectorBlackList: ['html'], // 过滤不需要转换的选择器，如html选择器不进行转换
		},
	},
};
