/*
 * @Author: along
 * @Description: 路由配置
 * @Date: 2024-03-24 01:19:19
 * @LastEditors: along
 * @LastEditTime: 2024-04-10 13:55:53
 * @FilePath: /cxy-food-menu/src/router/routes.ts
 */
import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "管理"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "我的",
          noCache: true
        }
      }
    ]
  },
  {
    path: "/preview",
    name: "Preview",
    component: () => import("@/views/preview/index.vue"),
    meta: {
      title: "预览",
      noCache: true
    }
  }
];

export default routes;
