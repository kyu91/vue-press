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
    link: "/article/",
    icon: "blog",
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
    text: "Secret",
    icon: "user-secret",
    children: [
      {
        text: "Resume",
        icon: "lock",
        prefix: "resume/",
        link: "resume/",
      },
      {
        text: "Portfolio",
        icon: "lock",
        prefix: "portfolio/",
        link: "portfolio/",
      },
    ],
  },
  {
    text: "Contact us",
    link: "#tally-open=3Xq50O&tally-layout=modal&tally-emoji-text=👋&tally-emoji-animation=wave",
    icon: "file-signature",
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },

]);
