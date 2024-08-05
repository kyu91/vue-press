// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  {
    text: "Home",
    link: "/",
    icon: "home"
  },
  {
    text: "About",
    link: "/about/README.md",
    icon: "user"
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Blog",
    link: "/blog/README.md",
    icon: "book"
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Category",
    link: "/category/",
    icon: "layer-group"
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Tag",
    link: "/tag/",
    icon: "tags"
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  },
  {
    text: "Timeline",
    link: "/timeline/",
    icon: "timeline"
    // only active in `/guide/`
    // activeMatch: "^/test/$",
  }
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

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": [
    {
      text: "Blog Home",
      icon: "home",
      prefix: "blog/",
      link: "blog/"
    },
    {
      text: "Posts",
      // icon: "home",
      prefix: "blog/posts/",
      link: "blog/posts/",
      children: "structure"
    },
    {
      text: "Books",
      // icon: "home",
      prefix: "blog/books/",
      link: "blog/books/",
      children: "structure"
    },
    {
      text: "Portfolio",
      icon: "address-card",
      prefix: "blog/portfolio/",
      link: "blog/portfolio/"
      // children: "structure",
    }
    // {
    //   text: "Test",
    //   icon: "laptop-code",
    //   prefix: "test/",
    //   link: "test/",
    //   children: "structure",
    // },
    // {
    //   text: "Posts",
    //   icon: "book",
    //   prefix: "posts/",
    //   link: "posts/",
    //   children: "structure",
    // },
    // "portfolio",
    // "intro",
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://kyu91.github.io",
  author: {
    name: "Levi",
    url: "https://levih.me"
  },
  iconAssets: "fontawesome-with-brands",
  // logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  logo: "/logo.svg",
  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: "Default footer",
  displayFooter: true,
  encrypt: {
    config: {
      "/blog/portfolio/": ["0622"]
    }
  },
  blog: {
    description: "Product Manager",
    intro: "/about/",
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:hongsk5689@gmail.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/kyu91",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      Linkedin: "https://www.linkedin.com/in/seok-kyu-hong/"
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    }
  },
  metaLocales: {
    editLink: "Edit this page on GitHub"
  },
  // enable it to preview all changes in time
  // hotReload: true,
  plugins: {
    blog: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    // notice: [
    //   {
    //     path: "/",
    //     title: "Notice Title",
    //     content: "Notice Content",
    //     actions: [
    //       {
    //         text: "Primary Action",
    //         link: "https://theme-hope.vuejs.press/",
    //         type: "primary",
    //       },
    //       { text: "Default Action" },
    //     ],
    //   },
    //   {
    //     path: "/zh/",
    //     title: "Notice Title",
    //     content: "Notice Content",
    //     actions: [
    //       {
    //         text: "Primary Action",
    //         link: "https://theme-hope.vuejs.press/",
    //         type: "primary",
    //       },
    //       { text: "Default Action" },
    //     ],
    //   },
    // ],
    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      alert: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // install katex before enabling it
      // katex: true,
      // install mathjax-full before enabling it
      // mathjax: true,
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "ko-KR",
  title: "It's Blog",
  description: "\uC7AC\uBBF8\uC788\uAC8C \uC131\uC7A5\uD558\uC790",
  theme: theme_default,
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-6PC30T52FB"
      }
    ],
    ["script", {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-6PC30T52FB');"]
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFld29vbmdwZXQvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvQmxvZ19PYnNpZGlhbi9reXU5MS5naXRodWIuaW8vc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2RhZXdvb25ncGV0L0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Jsb2dfT2JzaWRpYW4va3l1OTEuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kYWV3b29uZ3BldC9MaWJyYXJ5L01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Jsb2dfT2JzaWRpYW4va3l1OTEuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuXG4gIGxhbmc6IFwia28tS1JcIixcbiAgdGl0bGU6IFwiSXQncyBCbG9nXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlx1QzdBQ1x1QkJGOFx1Qzc4OFx1QUM4QyBcdUMxMzFcdUM3QTVcdUQ1NThcdUM3OTBcIixcblxuICB0aGVtZSxcblxuICBoZWFkOiBbXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIixcbiAgICAgIHtcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIHNyYzogXCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctNlBDMzBUNTJGQlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcInNjcmlwdFwiLCB7fSwgXCJ3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTsgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fSBndGFnKCdqcycsIG5ldyBEYXRlKCkpOyBndGFnKCdjb25maWcnLCAnRy02UEMzMFQ1MkZCJyk7XCJdLFxuICBdLFxuXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2RhZXdvb25ncGV0L0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Jsb2dfT2JzaWRpYW4va3l1OTEuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kYWV3b29uZ3BldC9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9CbG9nX09ic2lkaWFuL2t5dTkxLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kYWV3b29uZ3BldC9MaWJyYXJ5L01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Jsb2dfT2JzaWRpYW4va3l1OTEuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL2t5dTkxLmdpdGh1Yi5pb1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiTGV2aVwiLFxuICAgIHVybDogXCJodHRwczovL2xldmloLm1lXCIsXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogXCJmb250YXdlc29tZS13aXRoLWJyYW5kc1wiLFxuXG4gIC8vIGxvZ286IFwiaHR0cHM6Ly90aGVtZS1ob3BlLWFzc2V0cy52dWVqcy5wcmVzcy9sb2dvLnN2Z1wiLFxuICBsb2dvOiBcIi9sb2dvLnN2Z1wiLFxuXG4gIC8vIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXG5cbiAgZG9jc0RpcjogXCJzcmNcIixcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyLFxuXG4gIC8vIHNpZGViYXJcbiAgc2lkZWJhcixcblxuICBmb290ZXI6IFwiRGVmYXVsdCBmb290ZXJcIixcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIFwiL2Jsb2cvcG9ydGZvbGlvL1wiOiBbXCIwNjIyXCJdXG4gICAgfSxcbiAgfSxcblxuICBibG9nOiB7XG4gICAgZGVzY3JpcHRpb246IFwiUHJvZHVjdCBNYW5hZ2VyXCIsXG4gICAgaW50cm86IFwiL2Fib3V0L1wiLFxuICAgIG1lZGlhczoge1xuICAgICAgLy8gQmFpZHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gQml0YnVja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIERpbmdkaW5nOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIERpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gRHJpYmJibGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRW1haWw6IFwibWFpbHRvOmhvbmdzazU2ODlAZ21haWwuY29tXCIsXG4gICAgICAvLyBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBGYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9reXU5MVwiLFxuICAgICAgLy8gR2l0bGFiOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEdtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXG4gICAgICAvLyBJbnN0YWdyYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGFyazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBMaW5lczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBMaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2Vvay1reXUtaG9uZy9cIixcbiAgICAgIC8vIFBpbnRlcmVzdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUXpvbmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFJzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBTdGVhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBUd2l0dGVyOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdlY2hhdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBXZWlibzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBXaGF0c2FwcDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBZb3V0dWJlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFpoaWh1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFZ1ZVByZXNzVGhlbWVIb3BlOiB7XG4gICAgICAvLyAgIGljb246IFwiaHR0cHM6Ly90aGVtZS1ob3BlLWFzc2V0cy52dWVqcy5wcmVzcy9sb2dvLnN2Z1wiLFxuICAgICAgLy8gICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzc1wiLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGFMb2NhbGVzOiB7XG4gICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gIH0sXG5cbiAgLy8gZW5hYmxlIGl0IHRvIHByZXZpZXcgYWxsIGNoYW5nZXMgaW4gdGltZVxuICAvLyBob3RSZWxvYWQ6IHRydWUsXG5cbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHRydWUsXG5cbiAgICAvLyBJbnN0YWxsIEB3YWxpbmUvY2xpZW50IGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIE5vdGU6IFRoaXMgaXMgZm9yIHRlc3RpbmcgT05MWSFcbiAgICAvLyBZb3UgTVVTVCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZSBpbiBwcm9kdWN0aW9uLlxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgIC8vICAgc2VydmVyVVJMOiBcImh0dHBzOi8vd2FsaW5lLWNvbW1lbnQudnVlanMucHJlc3NcIixcbiAgICAvLyB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcblxuICAgIC8vIG5vdGljZTogW1xuICAgIC8vICAge1xuICAgIC8vICAgICBwYXRoOiBcIi9cIixcbiAgICAvLyAgICAgdGl0bGU6IFwiTm90aWNlIFRpdGxlXCIsXG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiTm90aWNlIENvbnRlbnRcIixcbiAgICAvLyAgICAgYWN0aW9uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHRleHQ6IFwiUHJpbWFyeSBBY3Rpb25cIixcbiAgICAvLyAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzL1wiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJwcmltYXJ5XCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7IHRleHQ6IFwiRGVmYXVsdCBBY3Rpb25cIiB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcGF0aDogXCIvemgvXCIsXG4gICAgLy8gICAgIHRpdGxlOiBcIk5vdGljZSBUaXRsZVwiLFxuICAgIC8vICAgICBjb250ZW50OiBcIk5vdGljZSBDb250ZW50XCIsXG4gICAgLy8gICAgIGFjdGlvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICB0ZXh0OiBcIlByaW1hcnkgQWN0aW9uXCIsXG4gICAgLy8gICAgICAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy9cIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgeyB0ZXh0OiBcIkRlZmF1bHQgQWN0aW9uXCIgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcblxuICAgIC8vIFRoZXNlIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBhbGVydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgcGxhbnR1bWw6IHRydWUsXG4gICAgICBzcG9pbGVyOiB0cnVlLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdGFza2xpc3Q6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIGNoYXJ0LmpzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgICAgLy8gY2hhcnQ6IHRydWUsXG5cbiAgICAgIC8vIGluc2VydCBjb21wb25lbnQgZWFzaWx5XG5cbiAgICAgIC8vIGluc3RhbGwgZWNoYXJ0cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGVjaGFydHM6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgZmxvd2NoYXJ0LnRzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBnZm0gcmVxdWlyZXMgbWF0aGpheC1mdWxsIHRvIHByb3ZpZGUgdGV4IHN1cHBvcnRcbiAgICAgIC8vIGdmbTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBrYXRleCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGthdGV4OiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIG1hdGhqYXgtZnVsbCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIG1hdGhqYXg6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgbWVybWFpZCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIG1lcm1haWQ6IHRydWUsXG5cbiAgICAgIC8vIHBsYXlncm91bmQ6IHtcbiAgICAgIC8vICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBpbnN0YWxsIHJldmVhbC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHJldmVhbEpzOiB7XG4gICAgICAvLyAgIHBsdWdpbnM6IFtcImhpZ2hsaWdodFwiLCBcIm1hdGhcIiwgXCJzZWFyY2hcIiwgXCJub3Rlc1wiLCBcInpvb21cIl0sXG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBpbnN0YWxsIEB2dWUvcmVwbCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHNhbmRwYWNrOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBpbnN0YWxsIEB2dWVwcmVzcy9wbHVnaW4tcHdhIGFuZCB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBQV0FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZUltYWdlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGxlOiB7XG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1zVGlsZToge1xuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgLy8gICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYW5pZmVzdDoge1xuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIHNob3J0Y3V0czogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgc2hvcnRfbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgLy8gICAgICAgICBpY29uczogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2RhZXdvb25ncGV0L0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Jsb2dfT2JzaWRpYW4va3l1OTEuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kYWV3b29uZ3BldC9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9CbG9nX09ic2lkaWFuL2t5dTkxLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGFld29vbmdwZXQvTGlicmFyeS9Nb2JpbGUlMjBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9CbG9nX09ic2lkaWFuL2t5dTkxLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIHtcbiAgICB0ZXh0OiBcIkhvbWVcIixcbiAgICBsaW5rOiBcIi9cIixcbiAgICBpY29uOiBcImhvbWVcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiQWJvdXRcIixcbiAgICBsaW5rOiBcIi9hYm91dC9SRUFETUUubWRcIixcbiAgICBpY29uOiBcInVzZXJcIixcbiAgICAvLyBvbmx5IGFjdGl2ZSBpbiBgL2d1aWRlL2BcbiAgICAvLyBhY3RpdmVNYXRjaDogXCJeL3Rlc3QvJFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJCbG9nXCIsXG4gICAgbGluazogXCIvYmxvZy9SRUFETUUubWRcIixcbiAgICBpY29uOiBcImJvb2tcIixcbiAgICAvLyBvbmx5IGFjdGl2ZSBpbiBgL2d1aWRlL2BcbiAgICAvLyBhY3RpdmVNYXRjaDogXCJeL3Rlc3QvJFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJDYXRlZ29yeVwiLFxuICAgIGxpbms6IFwiL2NhdGVnb3J5L1wiLFxuICAgIGljb246IFwibGF5ZXItZ3JvdXBcIixcbiAgICAvLyBvbmx5IGFjdGl2ZSBpbiBgL2d1aWRlL2BcbiAgICAvLyBhY3RpdmVNYXRjaDogXCJeL3Rlc3QvJFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJUYWdcIixcbiAgICBsaW5rOiBcIi90YWcvXCIsXG4gICAgaWNvbjogXCJ0YWdzXCIsXG4gICAgLy8gb25seSBhY3RpdmUgaW4gYC9ndWlkZS9gXG4gICAgLy8gYWN0aXZlTWF0Y2g6IFwiXi90ZXN0LyRcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiVGltZWxpbmVcIixcbiAgICBsaW5rOiBcIi90aW1lbGluZS9cIixcbiAgICBpY29uOiBcInRpbWVsaW5lXCIsXG4gICAgLy8gb25seSBhY3RpdmUgaW4gYC9ndWlkZS9gXG4gICAgLy8gYWN0aXZlTWF0Y2g6IFwiXi90ZXN0LyRcIixcbiAgfSxcbiAgLy8gXCIvXCIsXG4gIC8vIFwiL2Jsb2cvXCIsXG4gIC8vIHtcbiAgLy8gICB0ZXh0OiBcIlBvc3RzXCIsXG4gIC8vICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgcHJlZml4OiBcIi9wb3N0cy9cIixcbiAgLy8gICBjaGlsZHJlbjogW1xuICAvLyAgICAge1xuICAvLyAgICAgICB0ZXh0OiBcIkFwcGxlXCIsXG4gIC8vICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAvLyAgICAgICBwcmVmaXg6IFwiYXBwbGUvXCIsXG4gIC8vICAgICAgIGNoaWxkcmVuOiBbXG4gIC8vICAgICAgICAgeyB0ZXh0OiBcIkFwcGxlMVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIxXCIgfSxcbiAgLy8gICAgICAgICB7IHRleHQ6IFwiQXBwbGUyXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjJcIiB9LFxuICAvLyAgICAgICAgIFwiM1wiLFxuICAvLyAgICAgICAgIFwiNFwiLFxuICAvLyAgICAgICBdLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdGV4dDogXCJCYW5hbmFcIixcbiAgLy8gICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgICAgIHByZWZpeDogXCJiYW5hbmEvXCIsXG4gIC8vICAgICAgIGNoaWxkcmVuOiBbXG4gIC8vICAgICAgICAge1xuICAvLyAgICAgICAgICAgdGV4dDogXCJCYW5hbmEgMVwiLFxuICAvLyAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gIC8vICAgICAgICAgICBsaW5rOiBcIjFcIixcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIHtcbiAgLy8gICAgICAgICAgIHRleHQ6IFwiQmFuYW5hIDJcIixcbiAgLy8gICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAvLyAgICAgICAgICAgbGluazogXCIyXCIsXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBcIjNcIixcbiAgLy8gICAgICAgICBcIjRcIixcbiAgLy8gICAgICAgXSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7IHRleHQ6IFwiQ2hlcnJ5XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImNoZXJyeVwiIH0sXG4gIC8vICAgICB7IHRleHQ6IFwiRHJhZ29uIEZydWl0XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcbiAgLy8gICAgIFwidG9tYXRvXCIsXG4gIC8vICAgICBcInN0cmF3YmVycnlcIixcbiAgLy8gICBdLFxuICAvLyB9LFxuICAvLyBcIi9wb3J0Zm9saW9cIixcbiAgLy8ge1xuICAvLyAgIHRleHQ6IFwiVjIgRG9jc1wiLFxuICAvLyAgIGljb246IFwiYm9va1wiLFxuICAvLyAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzL1wiLFxuICAvLyB9LFxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9kYWV3b29uZ3BldC9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9CbG9nX09ic2lkaWFuL2t5dTkxLmdpdGh1Yi5pby9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGFld29vbmdwZXQvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvQmxvZ19PYnNpZGlhbi9reXU5MS5naXRodWIuaW8vc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kYWV3b29uZ3BldC9MaWJyYXJ5L01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Jsb2dfT2JzaWRpYW4va3l1OTEuZ2l0aHViLmlvL3NyYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkJsb2cgSG9tZVwiLFxuICAgICAgaWNvbjogXCJob21lXCIsXG4gICAgICBwcmVmaXg6IFwiYmxvZy9cIixcbiAgICAgIGxpbms6IFwiYmxvZy9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUG9zdHNcIixcbiAgICAgIC8vIGljb246IFwiaG9tZVwiLFxuICAgICAgcHJlZml4OiBcImJsb2cvcG9zdHMvXCIsXG4gICAgICBsaW5rOiBcImJsb2cvcG9zdHMvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQm9va3NcIixcbiAgICAgIC8vIGljb246IFwiaG9tZVwiLFxuICAgICAgcHJlZml4OiBcImJsb2cvYm9va3MvXCIsXG4gICAgICBsaW5rOiBcImJsb2cvYm9va3MvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUG9ydGZvbGlvXCIsXG4gICAgICBpY29uOiBcImFkZHJlc3MtY2FyZFwiLFxuICAgICAgcHJlZml4OiBcImJsb2cvcG9ydGZvbGlvL1wiLFxuICAgICAgbGluazogXCJibG9nL3BvcnRmb2xpby9cIixcbiAgICAgIC8vIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogXCJUZXN0XCIsXG4gICAgLy8gICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXG4gICAgLy8gICBwcmVmaXg6IFwidGVzdC9cIixcbiAgICAvLyAgIGxpbms6IFwidGVzdC9cIixcbiAgICAvLyAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogXCJQb3N0c1wiLFxuICAgIC8vICAgaWNvbjogXCJib29rXCIsXG4gICAgLy8gICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gICAgLy8gICBsaW5rOiBcInBvc3RzL1wiLFxuICAgIC8vICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgLy8gfSxcbiAgICAvLyBcInBvcnRmb2xpb1wiLFxuICAgIC8vIFwiaW50cm9cIixcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiBcIlNsaWRlc1wiLFxuICAgIC8vICAgaWNvbjogXCJwZXJzb24tY2hhbGtib2FyZFwiLFxuICAgIC8vICAgbGluazogXCJodHRwczovL3BsdWdpbi1tZC1lbmhhbmNlLnZ1ZWpzLnByZXNzL2d1aWRlL2NvbnRlbnQvcmV2ZWFsanMvZGVtby5odG1sXCIsXG4gICAgLy8gfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyZSxTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRWxnQixJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtERixDQUFDOzs7QUM1RjRlLFNBQVMsZUFBZTtBQUVyZ0IsSUFBTyxrQkFBUSxRQUFRO0FBQUEsRUFDckIsS0FBSztBQUFBLElBQ0g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBO0FBQUEsTUFFTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFBLE1BRU4sUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUE7QUFBQSxJQUVSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFzQkY7QUFDRixDQUFDOzs7QUZoREQsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUVBLFlBQVk7QUFBQTtBQUFBLEVBR1osTUFBTTtBQUFBO0FBQUEsRUFJTixTQUFTO0FBQUE7QUFBQSxFQUdUO0FBQUE7QUFBQSxFQUdBO0FBQUEsRUFFQSxRQUFRO0FBQUEsRUFFUixlQUFlO0FBQUEsRUFFZixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixvQkFBb0IsQ0FBQyxNQUFNO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtQLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNUixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBa0JaO0FBQUEsRUFDRjtBQUFBLEVBRUEsYUFBYTtBQUFBLElBQ1gsVUFBVTtBQUFBLEVBQ1o7QUFBQTtBQUFBO0FBQUEsRUFLQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVVOLFlBQVk7QUFBQSxNQUNWLFlBQVksQ0FBQyxTQUFTLFFBQVE7QUFBQSxJQUNoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdDQSxXQUFXO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFNO0FBQ3JCLGdCQUFJLFFBQVE7QUFDVixxQkFBTztBQUFBLGdCQUNMLEtBQUs7QUFBQSxnQkFDTCxPQUFPLEVBQUUsTUFBTSxNQUFNO0FBQUEsZ0JBQ3JCLFNBQVM7QUFBQSxjQUNYO0FBQUEsVUFDSjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMERGO0FBQ0YsQ0FBQzs7O0FEalFELElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBRWI7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxVQUFVLENBQUMsR0FBRyxnSkFBZ0o7QUFBQSxFQUNqSztBQUFBO0FBQUE7QUFJRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
