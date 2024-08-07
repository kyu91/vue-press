import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";


export default hopeTheme({
  hostname: "https://kyu91.github.io",

  author: {
    name: "Levi",
    url: "https://levih.me",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // navbar
  navbar,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search", "Outlook"],
  },
  
  encrypt: {
    config: {
      // This will encrypt the entire guide directory, and both passwords are available
      "/resume/": process.env.RESUME_PW,
      // This will only encrypt /config/page.html
      "/portfolio/": process.env.PORTFOLIO_PW,
    },
  },

  // sidebar
  sidebar,

  footer: "Default footer",

  displayFooter: true,

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
      Linkedin: "https://www.linkedin.com/in/seok-kyu-hong/",
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
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,
    docsearch: {
      // appId: process.env.DOCSEARCH_APP_ID,  
      // apiKey: process.env.DOCSEARCH_APP_KEY,
      // indexName: process.env.DOCSEARCH_NAME,
      appId: "PSK0VIVXH5",  
      apiKey: "d5b77e0fca077ba22349d020ff95a75f",
      indexName: "kyu91io",
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: '검색하십쇼',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '쿼리 조건 삭제',
                resetButtonAriaLabel: '쿼리 조건 삭제',
                cancelButtonText: '취소',
                cancelButtonAriaLabel: '취소',
              },
              startScreen: {
                recentSearchesTitle: '검색기록',
                noRecentSearchesText: '검색기록 없습니다.',
                saveRecentSearchButtonTitle: '검색기록 저장',
                removeRecentSearchButtonTitle: '검색 기록에서 삭제',
                favoriteSearchesTitle: '수집',
                removeFavoriteSearchButtonTitle: '즐겨 찾기에서 삭제',
              },
              errorScreen: {
                titleText: '결과를 얻을 수 없습니다',
                helpText: '네트워크 연결을 확인해야 할 수도 있습니다.',
              },
              footer: {
                selectText: '선택',
                navigateText: '전환',
                closeText: '폐쇄',
                searchByText: '검색자',
              },
              noResultsScreen: {
                noResultsText: '관련 검색결과가 없습니다.',
                suggestedQueryText: '당신은 쿼리를 시도할 수 있습니다',
                reportMissingResultsText: '이 쿼리에 결과가 있어야 한다고 생각하시나요?',
                reportMissingResultsLinkText: '피드백을 원하시면 클릭하세요',
              },
            },
          },
        },
      },
    },

    // Install @waline/client before enabling it 
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press", 
    // },

    components: {
      components: ["Badge", "VPCard"],
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
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      chart: true,

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
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

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
  },
});
