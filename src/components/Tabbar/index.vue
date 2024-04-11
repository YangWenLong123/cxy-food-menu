<!--
 * @Author: along
 * @Description: Tabbar
 * @Date: 2024-03-24 01:19:19
 * @LastEditors: along
 * @LastEditTime: 2024-04-10 13:45:46
 * @FilePath: /cxy-food-menu/src/components/Tabbar/index.vue
-->
<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "首页",
    to: {
      name: "Home"
    }
  },
  {
    icon: "apps-o",
    title: "管理",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "user-o",
    title: "我的",
    to: {
      name: "About"
    }
  }
]);
</script>


<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>