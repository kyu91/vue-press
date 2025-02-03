import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "/",
    icon: "home",
  },
  {
    text: "Star Post",
    link: "/star/",
    icon: "star",
  },
  {
    text: "Category",
    icon: "folder",
    children: [
      {
        text: "Tech Product",
        link: "/category/tech-product/",
        icon: "apple-whole",
      },
      {
        text: "Dev",
        link: "/category/dev/",
        icon: "laptop",
      },
      {
        text: "Books",
        link: "/category/books/",
        icon: "book",
      },
    ],
  },
  {
    text: "About",
    link: "/about/README.md",
    icon: "user",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Contact us",
    link: "#tally-open=3Xq50O&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave",
    icon: "file-signature",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },

]);
