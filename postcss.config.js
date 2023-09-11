/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 16:18:25
 * @LastEditors: along
 * @LastEditTime: 2023-09-11 13:20:49
 * @FilePath: /cxy-food-menu/postcss.config.js
 */

module.exports = ({webpack}) => {
	return {
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
			'postcss-px-to-viewport': {
				unitToConvert: 'px', // 需要转换的单位，默认为"px"
				viewportWidth: 375, // 设计稿的视口宽度
				unitPrecision: 5, // 单位转换后保留的精度
				propList: ['*'], // 能转化为vw的属性列表
				viewportUnit: 'vw', // 希望使用的视口单位
				fontViewportUnit: 'vw', // 字体使用的视口单位
				selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
				minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
				mediaQuery: false, // 媒体查询里的单位是否需要转换单位
				replace: true, //  是否直接更换属性值，而不添加备用属性
				exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
				include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
				landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
			},
		},
	};
};
