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
    

    // {
    //   text: "SW사관학교정글",
    //   icon: "graduation-cap",
    //   prefix: "SW사관학교정글/",
    //   link: "SW사관학교정글/",
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
  "/blog/" : ["Daily/", "Develop/", "PM/", "SaaS/", "SW사관학교정글/"],

  // "/books/": [
  //   {
  //     text: "Books Home",
  //     icon: "landmark",
  //     children: ["Sacred-Seven/", "Repacking-Your-Bags/"],
  //   },
  // ],
  "/books/": ["Repacking-Your-Bags/", "Sacred-Seven/"],
  
});
