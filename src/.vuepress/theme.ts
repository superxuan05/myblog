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

  // 头部脚本配置
  head: [
    // 引入 live2d-widget 样式
    ["link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.css"
    }],
    // 引入 live2d-widget 脚本
    ["script", {
      src: "https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js",
      defer: true
    }],
    // 初始化 live2d-widget 的脚本
    ["script", {
      type: "text/javascript"
    }, `
      // 等待页面加载完成
      window.onload = function() {
        // 初始化 live2d-widget
        L2Dwidget.init({
          model: {
            jsonPath: "https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json"
          },
          display: {
            position: "right",
            width: 150,
            height: 300,
            hOffset: 0,
            vOffset: -20
          },
          mobile: {
            show: true,
            scale: 0.8
          },
          react: {
            opacityDefault: 0.8,
            opacityOnHover: 0.9,
            move: true, // 启用鼠标移动跟踪
            drag: true // 启用鼠标拖动功能
          },
          dialog: {
            enable: true, // 启用对话框
            autoShow: true, // 自动显示对话框
            maxMessage: 5, // 最大消息数量
            messages: {
              welcome: [
                "你好！欢迎来到我的博客~",
                "嗨，很高兴见到你！",
                "Hello！今天过得怎么样？",
                "欢迎光临，希望你喜欢这里！",
                "你好呀，有什么我可以帮助你的吗？"
              ],
              hover: [
                "你在看什么呢？",
                "这个地方很有趣吧！",
                "需要我给你介绍一下吗？",
                "你对这个感兴趣吗？",
                "我也很喜欢这个内容！"
              ],
              click: [
                "哎呀，你戳到我了！",
                "别碰我啦，好痒~",
                "哈哈，你真调皮！",
                "你想和我聊天吗？",
                "我们做好朋友吧！"
              ]
            }
          }
        });
      };
    `]
  ],

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
