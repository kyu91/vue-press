import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Blog Home",
      icon: "home",
      prefix: "blog/",
      link: "blog/",
      children: "structure",
    },
    // {
    //   text: "Posts",
    //   icon: "folder-open",
    //   prefix: "blog/posts/",
    //   link: "blog/posts/",
    //   children: "structure",
    // },
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
  "/books/": [
    {
      text: "Books Home",
      icon: "landmark",
      // children: "structure",
    },
    {
      text: "7가지코드", 
      icon: "book",
      prefix: "Sacred-Seven/",
      link: "Sacred-Seven/",
      // children: "structure",
    },
    {
      text: "무엇이 나를 행복하게 만드는가", 
      icon: "book",
      prefix: "Repacking-Your-Bags/",
      link: "Repacking-Your-Bags/",
      // children: "structure",
    },
  ]
});
