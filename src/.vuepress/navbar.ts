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
    text: "Article",
    link: "/article/",
    icon: "newspaper",
  },
  {
    text: "Lock",
    icon: "lock",
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
