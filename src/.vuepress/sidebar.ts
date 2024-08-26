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
      icon: "folder-open",
      prefix: "blog/posts/",
      link: "blog/posts/",
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
  "/books/": [
    {
      text: "Books Home",
      icon: "Book",
      prefix: "",
      link: "",
    },
    {
      text: "7가지 코드",
      icon: "folder-open",
      prefix: "Sacred-Seven/",
      link: "Sacred-Seven/",
      children: "structure",
    },
  ]
});
