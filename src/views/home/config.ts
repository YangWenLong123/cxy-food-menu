/*
 * @Author: along
 * @Description: 数据配置
 * @Date: 2024-04-11 13:52:34
 * @LastEditors: along
 * @LastEditTime: 2024-04-11 14:58:40
 * @FilePath: /cxy-food-menu/src/views/home/config.ts
 */
import { ref } from "vue";

export const foodList = ref<any>([
  {
    title: "早餐",
    children: [
      {
        url: "https://i2.chuimg.com/698556e7e62143b887d3cfcfe1bb031d_1242w_1570h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "鸡蛋葱油饼",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/55d12045799446928ae2f795acdb569e_1920w_2560h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "减脂一定要吃的土豆丝饼",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/bc287dceb7534e4d991fcc63c1c56d51_781w_1036h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "兄妹早餐：口袋芝麻饼",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/869f1965c1db4273b7d5ee75af1b92da_1080w_1920h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "早餐三明治",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/e117d7ed418d40e5b4575ded639485d0_1280w_1858h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "宝宝爱喝的补钙粥",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/9f2fa8b0032e4ae3901a9a7dc514a060_1280w_960h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "爆浆芝士香肠饭团，只要平底锅就能完成孩子超爱的早餐",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/e117d7ed418d40e5b4575ded639485d0_1280w_1858h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "宝宝爱喝的补钙粥",
        nickName: "along"
      },
      {
        url: "https://i2.chuimg.com/9f2fa8b0032e4ae3901a9a7dc514a060_1280w_960h.jpg?imageView2/1/w/215/h/136/interlace/1/q/75",
        name: "爆浆芝士香肠饭团，只要平底锅就能完成孩子超爱的早餐",
        nickName: "along"
      }
    ]
  },
  {
    title: "午餐",
    children: [
      {
        url: "",
        name: "",
        nickName: "along"
      }
    ]
  },
  {
    title: "晚餐",
    children: [
      {
        url: "",
        name: "",
        nickName: ""
      }
    ]
  },
  {
    title: "宵夜",
    children: [
      {
        url: "",
        name: "",
        avatar: "",
        nickName: ""
      }
    ]
  }
]);
