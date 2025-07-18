const nav = require("./config/nav.js");
const base = require("../../base.js");
const htmlModules = require("./config/htmlModules.js");

module.exports = {
  title: "Pure Admin 官方文档",
  description: "一款开源完全免费且开箱即用的中后台管理系统模版",
  port: 8889,
  base, // '/<仓库名>/'， 默认'/'
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
    ["link", { rel: "stylesheet", href: "/iconfont/iconfont.css" }],
    [
      "meta",
      {
        name: "keywords",
        content: "vue-pure-admin,pure-admin,pure-admin-thin,pure-admin-docs",
      },
    ],
    // [
    //   "meta",
    //   { name: "google-adsense-account", content: "ca-pub-3324838481135884" },
    // ],
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
    // [
    //   "script",
    //   {
    //     "data-ad-client": "ca-pub-3324838481135884",
    //     async: "async",
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //     crossorigin: "anonymous",
    //   },
    // ],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // [
    //   'meta',
    //   { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    // ],
    // [
    //   'link',
    //   { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }
    // ],
    // [
    //   'link',
    //   {
    //     rel: 'mask-icon',
    //     href: '/img/favicon.ico',
    //     color: '#3eaf7c'
    //   }
    // ],
    // [
    //   'meta',
    //   {
    //     name: 'msapplication-TileImage',
    //     content: '/icons/msapplication-icon-144x144.png'
    //   }
    // ],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve("../../theme-vdoing"), // 使用本地主题
  themeConfig: {
    // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // logo: "https://pure-admin.cn/img/favicon.ico", // 导航栏logo
    // repo: "pure-admin/vue-pure-admin", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    searchPlaceholder: "快速搜索",

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果您不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: {
      // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    defaultMode: "light",
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。

    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "pure-admin", // 必需
      href: "https://github.com/xiaoxian521", // 可选的
    },
    // social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    // icons: [
    //   {
    //     iconClass: "icon-github",
    //     title: "GitHub",
    //     link: "https://github.com/xiaoxian521",
    //   },
    //   {
    //     iconClass: "icon-bilibili",
    //     title: "bilibili",
    //     link: "https://space.bilibili.com/301103230",
    //   },
    // ],
    // },
    footer: {
      // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: "pure-admin | MIT License", // 博客版权信息，支持a标签
    },
    htmlModules,
  },
  plugins: [
    // 插件
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    [
      "thirdparty-search",
      {
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [
          // 可选，默认 []
          {
            title: "在GitHub中搜索",
            frontUrl: "https://github.com/search?q=", // 搜索链接的前面部分
            behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在Gitee中搜索",
            frontUrl: "https://gitee.com/search?q=", // 搜索链接的前面部分
          },
          {
            title: "在npm中搜索",
            frontUrl: "https://www.npmjs.com/search?q=",
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
        ],
      },
    ],

    [
      "vuepress-plugin-baidu-tongji", // 百度统计
      {
        hm: "cffd1d66d68028a9190d066cb1c7dc65",
      },
    ],

    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "已复制", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "demo-block",
      {
        // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require("dayjs"); // https://day.js.org/
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
    ["reading-progress"],
    ["img-lazy"],
    [
      {
        name: "custom-plugins",
        globalUIComponents: ["BlockToggle"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
      },
    ],
    // ['@vuepress/pwa', {
    //   serviceWorker: true,
    //   updatePopup: {
    //     message: "尊贵的主人，检测到新内容可用，是否更新",
    //     buttonText: "更新"
    //   }
    // }]
  ],
  configureWebpack: {
    //webpack别名 如![Image from alias](~@alias/image.png)
    resolve: {
      alias: {
        "@alias": "/docs/.vuepress/public",
      },
    },
  },
};
