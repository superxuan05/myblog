import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "示例演示",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "技术学习",
      icon: "book",
      prefix: "posts/",
      children: [
        {
          text: "数据结构",
          icon: "database",
          prefix: "数据结构/",
          children: "structure",
        },
        {
          text: "其他",
          icon: "ellipsis-h",
          prefix: "其他/",
          children: "structure",
        },
        {
          text: "考研数学",
          icon: "calculator",
          prefix: "考研数学/",
          children: "structure",
        },
      ],
    },
    "intro",
  ],
});
