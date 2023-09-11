/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-09-11 13:07:33
 * @FilePath: /cxy-food-menu/src/main.ts
 */
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createPersistedState} from 'pinia-persistedstate-plugin';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const store = createPinia();
store.use(createPersistedState());
app.use(store);
app.use(router);
app.mount('#app');

// 延迟加载，会出现pinia报错
import '~/utils/permission';
