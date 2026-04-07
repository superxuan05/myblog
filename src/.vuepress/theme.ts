import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://superxuan05.github.io",

  author: {
    name: "superxuan",
    url: "https://superxuan05.github.io",
  },

  logo: "/logo.svg",

  repo: "superxuan05/myblog",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "探索科技 · 分享知识",
  displayFooter: true,
  copyright: "© 2026 superxuan. All rights reserved.",

  // 博客相关
  blog: {
    description: "superxuan05的个人博客，分享技术、生活和思考",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/396245561",
      Email: "2758157702@qq.com",
      Github: "https://github.com/superxuan05",
      QQ: "2758157702",
    },
    avatar: "/logo.png",
    roundAvatar: true,
    article: {
      // 文章摘要
      excerpt: true,
      excerptLength: 150,
      readMore: "阅读更多...",
      // 文章信息
      wordCount: true,
      readingTime: true,
      // 文章版权
      copyright: {
        license: "CC BY-NC-SA 4.0",
        message: "本文章采用 CC BY-NC-SA 4.0 许可协议",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  fullscreen: true,
  darkmode: "auto",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // 增强markdown功能
  markdown: {
    // 基础功能
    gfm: true,
    imgLazyload: true,
    tasklist: true,
    // 增强功能
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    imgSize: true,
    include: true,
    mark: true,
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
  },

  // 基础插件
  plugins: {
    blog: true,

    // 启用图片查看器
    photoSwipe: true,

    // 启用代码复制功能
    copyCode: {
      showInMobile: true,
      duration: 2000,
      tooltipText: "复制成功！",
    },

    // 启用评论系统
    comment: {
      provider: "Twikoo",
      envId: "https://twikoo.cc",
      options: {
        lang: "zh-CN",
        dark: "auto",
        placeholder: "写下你的评论...",
        avatar: "mp",
        theme: "auto",
      },
    },
  },
});
