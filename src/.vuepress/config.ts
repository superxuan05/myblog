import { defineUserConfig } from "vuepress";
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/myblog/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",
  plugins: [
    markdownMathPlugin({
      type: 'katex',
      delimiters:'dollars',
      copy: true,
      mhchem: true,
    }),
    shikiPlugin({
      lineNumbers: true,
      collapsedLines:true,
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'html', 'css', 'js','c','cpp','python'],
    }),
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
