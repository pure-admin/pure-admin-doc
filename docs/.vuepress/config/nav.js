module.exports = [
  {
    text: "指南",
    link: "/pages/introduction/",
    items: [
      { text: "介绍", link: "/pages/introduction/" },
      { text: "快速开始", link: "/pages/start/" },
      { text: "目录结构", link: "/pages/directory/" },
      { text: "vscode文件夹详解", link: "/pages/vscode/" },
      { text: "平台配置", link: "/pages/config/" },
      { text: "布局", link: "/pages/layout/" },
      { text: "路由和菜单", link: "/pages/routerMenu/" },
      { text: "http请求", link: "/pages/request/" },
      { text: "打包和部署", link: "/pages/build/" },
      {
        text: "进阶",
        items: [
          { text: "图标", link: "/pages/icon/" },
          { text: "主题和暗黑模式", link: "/pages/theme/" },
          { text: "国际化", link: "/pages/i18n/" },
          { text: "Tailwind CSS", link: "/pages/tailwindcss/" },
          { text: "RBAC权限", link: "/pages/RBAC/" },
          { text: "类型声明", link: "/pages/typescript/" },
          { text: "单点登录", link: "/pages/sso/" },
          { text: "自定义免登录", link: "/pages/nologin/" },
          { text: "打包优化", link: "/pages/buildgood/" },
          { text: "vite预构建", link: "/pages/optimize/" },
        ],
      },
      {
        text: "生态",
        items: [
          { text: "函数工具库", link: "/pages/utils/" },
          { text: "组件库", link: "/pages/components/" },
          { text: "vite插件", link: "/pages/viteplugin/" },
          { text: "对接平台的前后端项目", link: "/pages/opensource/" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "常见问题", link: "/pages/FAQ/" },
          { text: "非平台问题跟踪记录", link: "/pages/track/" },
          { text: "问题反馈", link: "/pages/support/" },
          { text: "git常用命令", link: "/pages/git/" },
          { text: "技术网站推荐", link: "/pages/recommendation/" },
        ],
      },
    ],
  },
  {
    text: "链接",
    items: [
      {
        text: "预览",
        items: [
          {
            text: "完整版",
            link: "https://pure-admin.github.io/vue-pure-admin/#/login",
          },
          {
            text: "精简版",
            link: "https://pure-admin-thin.netlify.app/#/login",
          },
        ],
      },
      {
        text: "Github源码",
        items: [
          {
            text: "完整版",
            link: "https://github.com/pure-admin/vue-pure-admin",
          },
          {
            text: "精简版",
            link: "https://github.com/pure-admin/pure-admin-thin",
          },
          {
            text: "Tauri版",
            link: "https://github.com/pure-admin/tauri-pure-admin",
          },
          {
            text: "Electron版",
            link: "https://github.com/pure-admin/electron-pure-admin",
          },
          {
            text: "配套后端",
            link: "https://github.com/pure-admin/pure-admin-backend",
          },
          {
            text: "文档",
            link: "https://github.com/pure-admin/pure-admin-doc",
          },
        ],
      },
      {
        text: "Gitee源码",
        items: [
          {
            text: "完整版",
            link: "https://gitee.com/yiming_chang/vue-pure-admin",
          },
          {
            text: "精简版",
            link: "https://gitee.com/yiming_chang/pure-admin-thin",
          },
          {
            text: "Tauri版",
            link: "https://gitee.com/yiming_chang/tauri-pure-admin",
          },
          {
            text: "Electron版",
            link: "https://gitee.com/yiming_chang/electron-pure-admin",
          },
          {
            text: "配套后端",
            link: "https://gitee.com/yiming_chang/pure-admin-backend",
          },
          {
            text: "文档",
            link: "https://gitee.com/yiming_chang/pure-admin-doc",
          },
        ],
      },
    ],
  },
  {
    text: "日志",
    items: [
      {
        text: "Github日志",
        link: "https://github.com/pure-admin/vue-pure-admin/releases",
      },
      {
        text: "Gitee日志",
        link: "https://gitee.com/yiming_chang/vue-pure-admin/releases",
      },
    ],
  },
  {
    text: "优质服务",
    link: "/pages/service/",
    icon: `<svg t="1668145036658" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20"
          height="20">
          <path
            d="M428.6976 107.3152c-6.5024 72.192-36.352 207.2576-160.256 337.408 3.6864-48.0256-7.1168-83.7632-19.0464-107.6736-6.6048-13.1584-26.0608-10.5984-28.8768 3.84-5.7344 29.44-20.5824 75.0592-57.6 137.7792-71.6288 121.3952-62.5664 459.8784 340.736 459.8784s430.4384-352.8192 373.1456-496.0256c-37.376-93.44-93.952-152.5248-128.8192-182.3232-11.4176-9.7792-29.1328-1.9456-29.5936 13.056-0.9216 30.464-7.3216 73.3696-33.0752 102.144-0.6656-52.7872-38.144-208.384-202.4448-296.8576-23.296-12.544-51.7632 2.4576-54.1696 28.7744z"
            fill="#FF5D50" p-id="3479"></path>
          <path
            d="M702.2592 678.4c-4.1984-45.056-60.672-166.5536-212.6336-246.4256-10.5984-5.5808-23.0912 3.1232-21.504 15.0016 6.2464 46.848 12.9536 140.4928-24.064 184.7296 4.0448-40.3968-18.1248-73.8304-36.6592-94.3104-8.3968-9.216-23.552-4.6592-25.4976 7.68-3.5328 22.3232-12.8512 56.2688-36.5568 97.9456-42.0864 74.0352-86.9888 188.672 124.5696 294.656 10.9568 0.5632 22.1696 0.8704 33.7408 0.8704 11.2128 0 22.0672-0.3072 32.7168-0.8704 158.2592-59.4944 173.4656-177.9712 165.888-259.2768z"
            fill="#FFDF99" p-id="3480"></path>
        </svg>`,
  },
  {
    text: "后端项目",
    link: "/pages/opensource/",
  },
];
