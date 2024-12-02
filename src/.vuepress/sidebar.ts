import { sidebar, sidebarDateSorter } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "All Article",
      icon: "newspaper",
      link: "article/",
    },
    {
      text: "Biz",
      icon: "apple-whole",
      prefix: "biz/",
      children: "structure",
    },
    {
      text: "Dev",
      icon: "laptop-code",
      prefix: "dev/",
      children: "structure",
    },
    {
      text: "Books",
      icon: "landmark",
      prefix: "books/",
      children: [
        "7가지코드/intro",
        "무엇이-나를-행복하게-만드는가",
        "마케팅설계자/intro",
      ],
    },

  ],

  // "/blog/biz/": [
  //   {
  //     text: "Biz",
  //     icon: "b",
  //     link: "/blog/biz/",
  //     children: 'structure',
  //   },
  // ],
  // "/blog/dev/": [
  //   {
  //     text: "Dev",
  //     icon: "b",
  //     link: "/blog/dev/",
  //     children: 'structure',
  //   },
  // ],
  // "/blog/books/": [
  //   {
  //     text: "Books",
  //     icon: "b",
  //     link: "/blog/books/",
  //     children: 'structure',
  //   },
  // ]
  
});
