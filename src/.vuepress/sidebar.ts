import { sidebar, sidebarDateSorter } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    
    {
      text: "Tech Product",
      icon: "apple-whole",
      prefix: "tech-product/",
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
  
});
