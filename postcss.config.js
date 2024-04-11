/*
 * @Author: along
 * @Description: 
 * @Date: 2024-03-24 01:19:19
 * @LastEditors: along
 * @LastEditTime: 2024-04-10 14:24:45
 * @FilePath: /cxy-food-menu/postcss.config.js
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    "cnjm-postcss-px-to-viewport": {
      viewportWidth: 375, // 根据设计稿设定
      minPixelValue: 1, // 最小的转换数值
      unitPrecision: 2, // 转化精度，转换后保留位数
      exclude: [/preview/, /Header/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    },
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
    }
  }
};
