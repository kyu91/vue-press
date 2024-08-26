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
    text: "Filter",
    icon: "layer-group",
    children: [
      {
        text: "Category",
        link: "/category/",
        icon: "layer-group",
      },
      {
        text: "Tag",
        link: "/tag/",
        icon: "tags",
      },
      {
        text: "Timeline",
        link: "/timeline/",
        icon: "timeline",
      },
    ],
  },
  // {
  //   text: "Category",
  //   link: "/category/",
  //   icon: "layer-group",
  // },
  // {
  //   text: "Tag",
  //   link: "/tag/",
  //   icon: "tags",
  // },
  // {
  //   text: "Timeline",
  //   link: "/timeline/",
  //   icon: "timeline",
  // },
  {
    text: "Contact us",
    link: "#tally-open=3Xq50O&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0",
    icon: "file-signature",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },

]);
