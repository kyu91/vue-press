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
      // text: "Books Home",
      // icon: "blog",
      children: ["", "daily/", "develop/", "pm/", "saas/", "sw사관학교정글/", "books/"],
    },
  ],
  
});
