import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";

// 手动添加 live2d-widget 脚本
if (typeof window !== "undefined") {
  // 创建并添加 live2d-widget 脚本
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js";
  script.async = true;
  
  // 脚本加载完成后初始化
  script.onload = function() {
    // 初始化配置
    window.L2Dwidget.init({
      model: {
        // 使用哪个模型
        jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
        // 也可以使用其他模型
        // jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
        // jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
      },
      display: {
        position: "right", // 看板娘的位置
        width: 150, // 看板娘的宽度
        height: 300, // 看板娘的高度
        hOffset: 0, // 水平偏移
        vOffset: -20, // 垂直偏移
      },
      mobile: {
        show: true, // 是否在移动设备上显示
        scale: 0.8, // 移动设备上的缩放比例
      },
      react: {
        opacityDefault: 0.8, // 默认不透明度
        opacityOnHover: 0.9, // 鼠标悬停时的不透明度
      },
    });
  };
  
  document.head.appendChild(script);
}

export default defineClientConfig({
  //...

layouts: {
    // ...
    Blog,
},
});