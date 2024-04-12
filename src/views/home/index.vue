<!--
 * @Author: along
 * @Description: 首页
 * @Date: 2024-03-24 01:19:19
 * @LastEditors: along
 * @LastEditTime: 2024-04-11 15:06:59
 * @FilePath: /cxy-food-menu/src/views/home/index.vue
-->
<script setup lang="ts" name="Home">
import { ref, useCssModule } from "vue";
import { foodList } from "./config";
import { showToast } from "vant";
import ShopCard from "@/components/ShopCard/index.vue";

const css = useCssModule("Home");

const loading = ref(false);
const active = ref<number>(0);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <van-pull-refresh
    v-model="loading"
    @refresh="onRefresh"
    :class="[css.refresh]"
  >
    <van-tabs v-model:active="active">
      <van-tab v-for="row in foodList" :key="row.title" :title="row.title">
        <div :class="[css.box]">
          <ShopCard
            v-for="(r, index) in row.children"
            :key="index"
            :items="r"
          />
          <div :class="[css.bottom]">- 已经到底了 -</div>
        </div>
      </van-tab>
    </van-tabs>
  </van-pull-refresh>
</template>

<style lang="less" module="Home" scoped>
@import url("./index.module.css");
</style>
