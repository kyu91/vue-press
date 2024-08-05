import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "/",
    icon: "home",
  },
  {
    text: "About",
    link: "/about/README.md",
    icon: "user",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Blog",
    link: "/blog/README.md",
    icon: "book",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Category",
    link: "/category/",
    icon: "layer-group",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Tag",
    link: "/tag/",
    icon: "tags",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Timeline",
    link: "/timeline/",
    icon: "timeline",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  // "/",
  // "/blog/",
  // {
  //   text: "Posts",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Apple",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "Apple1", icon: "pen-to-square", link: "1" },
  //         { text: "Apple2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "Banana",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "Cherry", icon: "pen-to-square", link: "cherry" },
  //     { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // "/portfolio",
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
