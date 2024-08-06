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

]);
