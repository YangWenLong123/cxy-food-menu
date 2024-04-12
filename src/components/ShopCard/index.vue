<!--
 * @Author: along
 * @Description: 食谱卡片
 * @Date: 2024-04-11 14:15:44
 * @LastEditors: along
 * @LastEditTime: 2024-04-11 15:06:37
 * @FilePath: /cxy-food-menu/src/components/ShopCard/index.vue
-->
<script setup lang="ts">
import { defineProps, useCssModule } from "vue";

type Props = {
  items: any;
};

const props = withDefaults(defineProps<Props>(), {});
const css = useCssModule("card");
</script>

<template>
  <div :class="[css.card]">
    <van-image
      :width="165"
      :height="165"
      :radius="10"
      fit="cover"
      position="center"
      :src="props.items.url"
    />

    <div :class="[css.ellipsis]">
      {{ items.name }}
    </div>

    <div :class="[css.wrap]">
      <div>{{ items.nickName }}</div>
      <van-icon name="ellipsis" />
    </div>
  </div>
</template>

<style lang="less" module="card" scoped>
@import url("./index.module.css");
</style>
