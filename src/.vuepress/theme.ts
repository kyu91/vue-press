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
      // indexName: process.env.DOCSEARCH_INDEX_NAME,
      // locales: {
      //   '/': {
      //     placeholder: 'Search Documentation',
      //     translations: {
      //       button: {
      //         buttonText: '검색하십쇼',
      //       },
      //     },
      //   },
      // },
      appId: process.env.DOCSEARCH_APP_ID,
      apiKey: process.env.DOCSEARCH_APP_KEY,
      rateLimit: 8,
      startUrls: [
        // These are urls which algolia start to craw
        // If your site is divided in to mutiple parts,
        // you may want to set mutiple entry links
        'https://www.levih.me/',
      ],
      sitemaps: [
        // if you are using sitemap plugins (e.g.: @vuepress-plugin/sitemap), you may provide one
        'https://www.levih.me/sitemap.xml',
      ],
      ignoreCanonicalTo: false,
      exclusionPatterns: [
        // You can use this to stop algolia crawing some paths
      ],
      // Crawler schedule, set it according to your docs update frequency
      schedule: 'at 02:00 every 1 day',
      actions: [
        // you may have mutiple actions, especially when you are deploying mutiple docs under one domain
        {
          // name the index with name you like
          indexName: process.env.DOCSEARCH_INDEX_NAME,
          // paths where the index take effect
          // pathsToMatch: ['https://YOUR_WEBSITE_URL/**'],
          // controls how algolia extracts records from your site
          recordExtractor: ({ $, helpers }) => {
            // options for @vuepress/theme-default
            return helpers.docsearch({
              recordProps: {
                lvl0: {
                  selectors: '.vp-sidebar-heading.active',
                  defaultValue: 'Documentation',
                },
                lvl1: '.theme-default-content h1',
                lvl2: '.theme-default-content h2',
                lvl3: '.theme-default-content h3',
                lvl4: '.theme-default-content h4',
                lvl5: '.theme-default-content h5',
                lvl6: '.theme-default-content h6',
                content: '.theme-default-content p, .theme-default-content li',
              },
              indexHeadings: true,
            })
          },
        },
      ],
      initialIndexSettings: {
        // controls how index are initialized
        // only has effects before index are initialize
        // you may need to delete your index and recraw after modification
        YOUR_INDEX_NAME: {
          attributesForFaceting: ['type', 'lang'],
          attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
          attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
          attributesToSnippet: ['content:10'],
          camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
          searchableAttributes: [
            'unordered(hierarchy_radio_camel.lvl0)',
            'unordered(hierarchy_radio.lvl0)',
            'unordered(hierarchy_radio_camel.lvl1)',
            'unordered(hierarchy_radio.lvl1)',
            'unordered(hierarchy_radio_camel.lvl2)',
            'unordered(hierarchy_radio.lvl2)',
            'unordered(hierarchy_radio_camel.lvl3)',
            'unordered(hierarchy_radio.lvl3)',
            'unordered(hierarchy_radio_camel.lvl4)',
            'unordered(hierarchy_radio.lvl4)',
            'unordered(hierarchy_radio_camel.lvl5)',
            'unordered(hierarchy_radio.lvl5)',
            'unordered(hierarchy_radio_camel.lvl6)',
            'unordered(hierarchy_radio.lvl6)',
            'unordered(hierarchy_camel.lvl0)',
            'unordered(hierarchy.lvl0)',
            'unordered(hierarchy_camel.lvl1)',
            'unordered(hierarchy.lvl1)',
            'unordered(hierarchy_camel.lvl2)',
            'unordered(hierarchy.lvl2)',
            'unordered(hierarchy_camel.lvl3)',
            'unordered(hierarchy.lvl3)',
            'unordered(hierarchy_camel.lvl4)',
            'unordered(hierarchy.lvl4)',
            'unordered(hierarchy_camel.lvl5)',
            'unordered(hierarchy.lvl5)',
            'unordered(hierarchy_camel.lvl6)',
            'unordered(hierarchy.lvl6)',
            'content',
          ],
          distinct: true,
          attributeForDistinct: 'url',
          customRanking: [
            'desc(weight.pageRank)',
            'desc(weight.level)',
            'asc(weight.position)',
          ],
          ranking: [
            'words',
            'filters',
            'typo',
            'attribute',
            'proximity',
            'exact',
            'custom',
          ],
          highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
          highlightPostTag: '</span>',
          minWordSizefor1Typo: 3,
          minWordSizefor2Typos: 7,
          allowTyposOnNumericTokens: false,
          minProximity: 1,
          ignorePlurals: true,
          advancedSyntax: true,
          attributeCriteriaComputedByMinProximity: true,
          removeWordsIfNoResults: 'allOptional',
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
