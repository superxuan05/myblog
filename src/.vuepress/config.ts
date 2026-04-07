import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/myblog/",

  lang: "zh-CN",
  title: "探索科技 · 分享知识 - superxuan的博客",
  description: "superxuan05的个人博客",
  theme,

  shouldPrefetch: true,
});
