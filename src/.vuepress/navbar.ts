import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "408",
    icon: "book",
    prefix: "/posts/",
    children: [
        {
        text: "数据结构",
        icon: "pen-to-square",
        prefix: "/posts/数据结构/",
        children: [
          { text: "栈", icon: "pen-to-square", link: "stack" },
          { text: "队列", icon: "pen-to-square", link: "queue" },
          { text: "链表", icon: "pen-to-square", link: "linked-list" },
          { text: "树", icon: "pen-to-square", link: "tree" },
          { text: "图", icon: "pen-to-square", link: "graph" },
        ],
      },
      {
        text:"计算机组成原理",
        icon: "pen-to-square",
        prefix: "/posts/计算机组成原理/",
        children: [
          { text: "CPU", icon: "pen-to-square", link: "cpu" },
          { text: "内存", icon: "pen-to-square", link: "memory" },
          { text: "输入输出", icon: "pen-to-square", link: "input-output" },
        ],
      },
      {
        text: "操作系统",
        icon: "pen-to-square",
        prefix: "operating-system/",
        children: [
          { text: "进程", icon: "pen-to-square", link: "process" },
          { text: "线程", icon: "pen-to-square", link: "thread" },
          { text: "内存管理", icon: "pen-to-square", link: "memory-management" },
          { text: "文件系统", icon: "pen-to-square", link: "file-system" },
        ],
      },
      {
        text:"计算机网络",
        icon: "pen-to-square",
        prefix: "computer-network/",
        children: [
          { text: "协议", icon: "pen-to-square", link: "protocol" },
          { text: "路由", icon: "pen-to-square", link: "routing" },
          { text: "传输", icon: "pen-to-square", link: "transport" },
        ],
      }
    ],
  },
  {
    text: "数学",
    icon: "book",
    prefix: "/posts/",
    children: [
      { text: "概率论", icon: "book", link: "probability-theory" },
      { text: "线性代数", icon: "book", link: "linear-algebra" },
      { text: "微积分", icon: "book", link: "calculus" },
      { text: "数值分析", icon: "book", link: "numerical-analysis" },
      { text: "概率论", icon: "book", link: "probability-theory" },
    ],
  },
  {
    text: "其他",
    icon: "book",
    prefix: "/posts/",
    children: [
      { text: "其他", icon: "book", link: "other" },
    ],
  }
]);
