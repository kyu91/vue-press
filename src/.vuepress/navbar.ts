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
  {
    text: "Contact us",
    link: "#tally-open=3Xq50O&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0",
    icon: "file-signature",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },

]);
