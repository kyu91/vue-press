import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/" : [
    // "/blog/",
    // {
    //   text: "Blog Home",
    //   icon: "blog",
    //   prefix: "blog/",
    //   link: "blog/",
    //   children: "structure",
    // },
  ],
  // "/blog/": [
  //   {
  //     text: "Blog Home",
  //     icon: "blog",
  //     children: ["Daily/", "Develop/", "PM/", "SaaS/", "SW사관학교정글/"],
  //     // children: "structure"
  //   },
  // ],
  // "/blog/" : ["daily/", "develop/", "pm/", "saas/", "sw사관학교정글/", "books/"],

  "/blog/": [
    {
      // children: ["", "daily/", "develop/", "pm/", "saas/", "sw사관학교정글/", "books/"],
      children: [
        "",
        {
          text: "PM",
          icon: "compass",
          prefix: "pm/",
          link: "pm/",
        },
        {
          text: "SaaS",
          icon: "diagram-project",
          prefix: "saas/",
          link: "saas/",
        },
        {
          text: "Develop",
          icon: "laptop-code",
          prefix: "develop/",
          link: "develop/",
        },
        {
          text: "Books",
          icon: "landmark",
          prefix: "books/",
          link: "books/",
        },
        {
          text: "SW사관학교정글",
          icon: "graduation-cap",
          prefix: "sw사관학교정글/",
          link: "sw사관학교정글/",
        },
        {
          text: "Daily",
          icon: "calendar-days",
          prefix: "daily/",
          link: "daily/",
        },
      ],
    },
  ],
  
});
