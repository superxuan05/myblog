import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },
  {
    text: "技术学习",
    icon: "laptop-code",
    children: [
      {
        text: "数据结构",
        icon: "database",
        link: "/posts/数据结构/"
      },
      {
        text: "算法",
        icon: "code",
        link: "/posts/算法/"
      },
      {
        text: "其他",
        icon: "ellipsis-h",
        link: "/posts/其他/"
      },
      {
        text: "考研数学",
        icon: "calculator",
        link: "/posts/考研数学/"
      }
    ],
  },
  { text: "关于", icon: "user", link: "/intro.html" },
  { text: "归档", icon: "archive", link: "/posts/" },
]);
