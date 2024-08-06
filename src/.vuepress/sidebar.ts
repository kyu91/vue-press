import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Blog Home",
      icon: "home",
      prefix: "blog/",
      link: "blog/",
    },
    {
      text: "Posts",
      // icon: "home",
      prefix: "blog/posts/",
      link: "blog/posts/",
      children: "structure",
    },
    {
      text: "Books",
      // icon: "home",
      prefix: "blog/books/",
      link: "blog/books/",
      children: "structure",
    },
    {
      text: "Resume",
      icon: "lock",
      prefix: "resume/",
      link: "resume/",
      // children: "structure",
    },
    {
      text: "Portfolio",
      icon: "lock",
      prefix: "portfolio/",
      link: "portfolio/",
      // children: "structure",
    },
  ],
});
