<!--
 * @Author: along
 * @Description: 我的
 * @Date: 2024-03-24 01:19:19
 * @LastEditors: along
 * @LastEditTime: 2024-04-12 13:17:13
 * @FilePath: /cxy-food-menu/src/views/about/index.vue
-->
<script setup lang="ts">
import { useCssModule } from "vue";

const css = useCssModule("about");
</script>

<template>
  <div :class="[css.box]">
    <div :class="[css.card]">
      <van-image
        width="50"
        height="50"
        round
        src="https://along-1254323745.cos.ap-nanjing.myqcloud.com/47c3b258-fc5e-4e6f-b8e5-a92d8248ad66--5c8cb2445336474189390e4345e6f24410fq.jpeg"
      />

      <div :class="[css.info]">
        <div :class="[css.nickname]">along</div>
        <van-button
          plain
          hairline
          size="mini"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
        >
          编辑资料
        </van-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" module="about" scoped>
@import url("./index.module.css");
</style>
