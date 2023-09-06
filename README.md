# EDC CMS

DC管理后台-版本更新内容管理功能，用于发布版本更新通知

## 项目源

统一使用`pnpm`安装运行发布

## 技术架构

vue3 + pinia + element-plus + axios +ts + vite + prettier + eslint + githook

## 运行发布

### 安装

```sh
pnpm install
```

### 运行

```sh
pnpm dev
```

### 发布

```sh
pnpm build:dev
pnpm build:test
pnpm build:uat
pnpm build:prod
```

### 格式化代码

```sh
pnpm lint
```

## pinia

pinia配置persist,会使用持久化保存（uniStorage）, 写法格式如下

```ts
import {defineStore} from 'pinia';

function store() {
	const username = ref('');
	const token = ref('');

	return {
		username,
		token,
	};
}

export const useUserStore = defineStore('user', store, {
	persist: {
		enabled: true,
	},
});
```

## unplugin-auto-import

自动导入组件，首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```ts
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 Vite 的配置文件中

```ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


plugins: [
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
    // 自动导入element
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })
],
```

## gzip

代码gzip压缩配置，首先安装`vite-plugin-compression`插件

```ts
pnpm i vite-plugin-compression -D
```

然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

```ts
plugins: [
	commpressPlugin({
		verbose: true, // 默认即可
		disable: false, // 开启压缩(不禁用)，默认即可
		deleteOriginFile: false, // 删除源文件
		threshold: 1, // 压缩前最小文件大小
		algorithm: 'gzip', // 压缩算法
		ext: '.gz', // 文件类型
	}),
];
```

### 代码规范

遵循eslint规范，代码格式使用prettire进行格式化，提交代码前先执行`pnpm lint`，否者代码不规范git无法提交，git提交遵循commitlint规范

prettire

```json
{
	"arrowParens": "always",
	"bracketSameLine": false,
	"bracketSpacing": false,
	"embeddedLanguageFormatting": "auto",
	"htmlWhitespaceSensitivity": "css",
	"insertPragma": false,
	"jsxSingleQuote": false,
	"printWidth": 80,
	"proseWrap": "preserve",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": true,
	"singleAttributePerLine": false,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "es5",
	"useTabs": true,
	"vueIndentScriptAndStyle": false
}
```

commitlint

```js
module.exports = {
	extends: ['@commitlint/config-conventional'],
	// 校验规则
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'chore',
				'revert',
				'build',
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	},
};
```
