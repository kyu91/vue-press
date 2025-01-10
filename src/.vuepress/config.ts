import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "ko-KR",
  title: "It's Blog",
  description: "재미있게 성장하자",

  theme,

  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-6PC30T52FB",
      },
    ],
    ["script", {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-6PC30T52FB');"],
    [
      "script",
      {
        async: true,
        src: "https://tally.so/widgets/embed.js",
      }
    ],
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
