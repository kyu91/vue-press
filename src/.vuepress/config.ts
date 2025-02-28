import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/vue-press/",

  lang: "ko",
  title: "It's Blog",
  description: "VuePress를 활용한 기술 블로그로, SEO, 웹 개발, Python, 그리고 생산성 관련 유익한 글을 제공합니다.",

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
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2964121704331756",
        crossorigin: "anonymous"
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://tally.so/widgets/embed.js",
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "VuePress, 기술 블로그, SEO, 웹 개발, Python, 생산성, Vue, 개발자, Tools, 자동화, levi",
      },
    ],
    // 🔹 네이버 웹마스터도구 사이트 인증 태그 추가
    [
      "meta",
      {
        name: "naver-site-verification",
        content: "c9aa016fd222261011af1571bbf97b7cabc625e8",
      },
    ],

    // Meta Tags
    [
      "link",
      {
        rel: "canonical",
        href: "https://www.levih.me/",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "VuePress로 제작된 기술 블로그로, SEO, 웹 개발, Python 등 유익한 정보를 제공합니다.",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "VuePress로 제작된 기술 블로그로, SEO, 웹 개발, Python 등 유익한 정보를 제공합니다.",
      },
    ],
    [
      "meta",
      {
        name: "robots",
        content: "index, follow",
      },
    ],

    // Twitter Tags
    [
      "meta",
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        name: "twitter:title",
        content: "It's Blog",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content: "VuePress로 제작된 기술 블로그로, SEO, 웹 개발, Python 등 유익한 정보를 제공합니다.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://www.levih.me/about.svg", // 적절한 이미지 URL로 변경
      },
    ],
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
