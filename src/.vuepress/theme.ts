import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import path from "path";


export default hopeTheme({
  hostname: "https://www.levih.me",

  author: {
    name: "Levi",
    url: "https://levih.me",
  },

  logo: "/logo.svg",

  repo: "kyu91/kyu91.github.io",
  repoLabel: "GitHub",
  repoDisplay: true,

  externalLinkIcon: true,

  docsDir: "src", 

  navbar,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook", "Search"],
  },
  
  encrypt: {
    config: {
      // This will encrypt the entire guide directory, and both passwords are available
      // "/resume/": process.env.RESUME_PW,
      // This will only encrypt /config/page.html
      // "/portfolio/": process.env.PORTFOLIO_PW,
    },
  },

  // sidebar
  sidebar,

  //sidebar 정렬
  //readme: README.md또는 readme.md첫 번째
  // order: 양수 순서가 처음에 있고 값이 오름차순으로 정렬되고, 음수 순서가 마지막에 있고 값이 내림차순으로 정렬됩니다.
  // date: 날짜 오름차순 정렬
  // date-desc: 날짜 내림차순 정렬
  // title: 제목별 알파벳순 정렬
  // filename: 파일 이름별로 알파벳순 정렬
  sidebarSorter: ["date"],

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
    // blog: true,
    blog: {
      type: [
        {
          key: "article-biz",
          filter: (page) => Array.isArray(page.frontmatter.category) && page.frontmatter.category.includes("Biz"),
          frontmatter: () => ({ title: "Biz" }),
          // sorter를 사용하여 날짜 기준으로 내림차순 정렬
          sorter: (pageA, pageB) => {
            return new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime();
          },
        },
        {
          key: "article-dev",
          filter: (page) => Array.isArray(page.frontmatter.category) && page.frontmatter.category.includes("Dev"),
          frontmatter: () => ({ title: "Dev" }),
          // sorter를 사용하여 날짜 기준으로 내림차순 정렬
          sorter: (pageA, pageB) => {
            return new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime();
          },
        },
        {
          key: "article-books",
          filter: (page) => Array.isArray(page.frontmatter.category) && page.frontmatter.category.includes("Books"),
          frontmatter: () => ({ title: "Books" }),
          // sorter를 사용하여 날짜 기준으로 내림차순 정렬
          sorter: (pageA, pageB) => {
            return new Date(pageB.frontmatter.date).getTime() - new Date(pageA.frontmatter.date).getTime();
          },        
        },
      ],
    },

    icon: {
      assets: "fontawesome-with-brands",
    },

    //검색기능 추가
    slimsearch: {
      indexContent: true,
      suggestion: false,
      hotKeys: [{key: "k", ctrl: true}]
    },

    components: {
      components: ["Badge", "VPCard"],
    },


  },

  markdown: {
    alert: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    include: {
      deep: true,
      resolvePath: (file) => {
        if (file.startsWith("@components/"))
          return file.replace(
            "@components",
            path.resolve(__dirname, "../../../components/src"),
          );

        if (file.startsWith("@echarts/"))
          return file.replace(
            "@echarts",
            path.resolve(__dirname, "../../../md-enhance/src/echarts"),
          );

        if (file.startsWith("@md-enhance/"))
          return file.replace(
            "@md-enhance",
            path.resolve(__dirname, "../../../md-enhance/src"),
          );

        return file;
      },
      resolveLinkPath: false,
    },
    math: true,
    mark: true,
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      themes: [
        "auto",
        "beige",
        "black",
        "blood",
        "league",
        "moon",
        "night",
        "serif",
        "simple",
        "sky",
        "solarized",
        "white",
      ],
    },
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({
          tag,
        }): {
          tag: string;
          attrs: Record<string, string>;
          content: string;
        } | void => {
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

    highlighter: {
      type: "shiki",
      lineNumbers: 15,
      notationDiff: true,
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
    },

    chartjs: true,
    demo: true,
    echarts: true,
    flowchart: true,
    kotlinPlayground: true,
    markmap: true,
    mermaid: true,
    plantuml: true,
    playground: {
      presets: ["ts", "vue", "unocss"],
    },
    sandpack: true,
    vuePlayground: true,
  },
});
