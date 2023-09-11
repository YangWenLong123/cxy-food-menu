/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: zxx
 * @LastEditTime: 2023-09-06 15:28:15
 * @FilePath: /cxy-food-menu/vite.config.ts
 */
import path from 'node:path';
import {defineConfig, loadEnv, splitVendorChunkPlugin} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import commpressPlugin from 'vite-plugin-compression';
import {VantResolver} from '@vant/auto-import-resolver';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	const config = loadEnv(mode, __dirname);

	console.log(config);

	return {
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
				imports: ['vue', 'pinia', 'vue-router'],
				// 调整自动引入的文件位置
				dts: './auto-import.d.ts',
				// 解决自动引入eslint报错问题 需要在eslintrc的extend选项中引入
				eslintrc: {
					enabled: true,
					// 配置文件的位置
					filepath: './.eslintrc-auto-import.json',
					globalsPropValue: true,
				},
			}),
			Components({resolvers: [VantResolver()]}),
			commpressPlugin({
				verbose: true, // 默认即可
				disable: false, // 开启压缩(不禁用)，默认即可
				deleteOriginFile: false, // 删除源文件
				threshold: 1, // 压缩前最小文件大小
				algorithm: 'gzip', // 压缩算法
				ext: '.gz', // 文件类型
			}),
			splitVendorChunkPlugin(),
		],
		css: {
			preprocessorOptions: {
				scss: {
					javascriptEnabled: true,
				},
			},
		},
		server: {
			host: '0.0.0.0',
			port: config.VITE_APP_PORT,
			open: true,
		},
		build: {
			chunkSizeWarningLimit: 2000,
			rollupOptions: {
				output: {
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
				},
			},
		},
		esbuild: {
			pure: ['console.log'],
			minify: true,
		},
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
		define: {
			__APP_ENV__: JSON.stringify(config.VITE_APP_API_BASE_URL),
		},
	};
});
