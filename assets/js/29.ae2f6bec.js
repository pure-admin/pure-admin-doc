(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{541:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整版"),n("OutboundLink")],1),s._v("目录结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("├── .github  # GitHub 配置文件\n│   ├── ISSUE_TEMPLATE  # 问题提交参考模板\n│   ├── workflows git  # 工作流\n├── .husky  # 代码提交前校验配置文件\n├── .vscode  # IDE 工具推荐配置文件\n│   │   ├── extensions.json  # 一键安装平台推荐的 vscode 插件\n│   │   ├── settings.json  # 设置扩展程序或 vscode 编辑器的一些属性\n│   │   ├── vue3.0.code-snippets  # vue3.0 代码片段\n│   │   └── vue3.2.code-snippets  # vue3.2 代码片段\n│   │   └── vue3.3.code-snippets  # vue3.3 代码片段\n├── build  # 构建工具\n│   │   ├── cdn.ts  # 打包时采用 cdn 模式\n│   │   ├── compress.ts  # 打包时启用 gzip 压缩或 brotli 压缩\n│   │   ├── info.ts  # 输出打包信息（大小、用时）\n│   │   ├── optimize.ts  # vite 依赖预构建配置项\n│   │   ├── plugins.ts  # vite 相关插件存放处\n│   │   ├── utils.ts  # 构建工具常用方法抽离\n├── locales  # 国际化文件存放处\n│   │   ├── en.yaml  # 英文配置\n│   │   ├── zh-CN.yaml  # 中文配置\n├── mock  # mock 模拟后台数据\n│   │   ├── asyncRoutes.ts  # 模拟后台返回动态路由\n│   │   ├── ...\n├── node_modules  # 模块依赖\n├── public  # 静态资源\n│   │   ├── audio  # 音频文件\n│   │   ├── html  # 静态 iframe 页面\n│   │   ├── wasm  # wasm 文件以及胶水代码\n│   │   ├── favicon.ico  # favicon\n│   │   ├── logo.svg  # logo\n│   │   ├── platform-config.json  # 全局配置文件（打包后修改也可生效）\n├── src\n│   ├── api  # 接口请求统一管理\n│   ├── assets  # 字体、图片等静态资源\n│   ├── components  # 自定义通用组件\n│   │   ├── ReAnimateSelector  # [animate.css](https://animate.style/) 选择器组件\n│   │   ├── ReAuth  # 按钮级别权限组件（根据路由meta中的auths字段进行判断）\n│   │   ├── ReBarcode  # 条形码组件\n│   │   ├── ReCol  # 封装 element-plus 的 el-col 组件\n│   │   ├── ReCountTo  # 数字动画组件\n│   │   ├── ReCropper  # 图片裁剪组件\n│   │   ├── ReCropperPreview  # 图片裁剪预览组件\n│   │   ├── ReDialog  # 基于 element-plus 中 el-dialog 组件开发的函数式弹框\n│   │   ├── ReFlicker  # 圆点、方形闪烁动画组件\n│   │   ├── ReFlop  # 时间翻牌组件\n│   │   ├── ReFlowChart  # LogicFlow 流程图组件\n│   │   ├── ReIcon  # 图标组件\n│   │   ├── ReImageVerify  # 图形验证码组件\n│   │   ├── ReMap  # 高德地图组件\n│   │   ├── RePerms  # 按钮级别权限组件（根据登录接口返回的permissions字段进行判断）\n│   │   ├── RePureTableBar  # 配合 `@pureadmin/table` 实现快速便捷的表格操作 https://github.com/pure-admin/pure-admin-table */\n│   │   ├── ReQrcode  # 二维码组件\n│   │   ├── ReSeamlessScroll  # 无缝滚动组件\n│   │   ├── ReSegmented  # 分段控制器组件\n│   │   ├── ReSelector  # 选择器组件\n│   │   ├── ReSplitPane  # 切割面板组件\n│   │   ├── ReText  # 支持 Tooltip 提示的文本省略组件\n│   │   ├── ReTreeLine  # 树形连接线组件（基于element-plus）\n│   │   ├── ReTypeit  # 打字机效果组件\n│   │   ├── ReVxeTableBar  # 配合 vxe-table 实现快速便捷的表格操作\n│   ├── config  # 获取平台动态全局配置\n│   ├── directives  # 自定义指令\n│   │   ├── auth  # 按钮级别权限指令（根据路由meta中的auths字段进行判断）\n│   │   ├── copy  # 文本复制指令（默认双击复制）\n│   │   ├── longpress  # 长按指令\n│   │   ├── optimize  # 防抖、节流指令\n│   │   ├── perms  # 按钮级别权限指令（根据登录接口返回的permissions字段进行判断）\n│   │   ├── ripple  # 水波纹效果指令\n│   ├── layout  # 主要页面布局\n│   ├── plugins  # 处理一些库或插件，导出更方便的 api\n│   ├── router  # 路由配置\n│   ├── store  # pinia 状态管理\n│   ├── style  # 全局样式\n│   │   ├── dark.scss  # 暗黑模式样式适配文件\n│   │   ├── element-plus.scss  # 全局覆盖 element-plus 样式文件\n│   │   ├── reset.scss  # 全局重置样式文件\n│   │   ├── sidebar.scss  # layout 布局样式文件\n│   │   ├── tailwind.css  # tailwindcss 自定义样式配置文件\n│   │   ├── ...\n│   ├── utils  # 全局工具方法\n│   │   ├── http  # 封装 axios 文件\n│   │   ├── localforage  # 二次封装 localforage (https://localforage.docschina.org/) 支持设置过期时间，提供完整的类型提示\n│   │   ├── progress  # 封装 nprogress\n│   │   └── auth.ts  # 处理用户信息和 token 相关\n│   │   └── chinaArea.ts  # 汉字转区域码\n│   │   └── globalPolyfills.ts  # 解决项目可能因为安装某个依赖出现 `global is not defined` 报错\n│   │   └── message.ts  # 消息提示函数\n│   │   ├── mitt.ts  # 触发公共事件，类似 EventBus\n│   │   ├── preventDefault.ts  # 阻止键盘F12、浏览器默认右键菜单、页面元素选中、图片默认可拖动的方法\n│   │   ├── print.ts  # 打印函数\n│   │   ├── propTypes.ts  # 二次封装 vue 的 propTypes\n│   │   ├── responsive.ts  # 全局响应式 storage 配置\n│   │   ├── sso.ts  # 前端单点登录逻辑处理\n│   │   ├── tree.ts  # 树结构相关处理函数\n│   ├── views  # 存放编写业务代码页面\n│   ├── App.vue  # 入口页面\n│   ├── main.ts  # 入口文件\n├── types  # 全局 TS 类型配置\n│   │   ├── directives.d.ts  # 全局自定义指令类型声明\n│   │   ├── global-components.d.ts  # 自定义全局组件获得 Volar 提示（自定义的全局组件需要在这里声明下才能获得 Volar 类型提示哦）\n│   │   ├── global.d.ts  # 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示\n│   │   ├── index.d.ts  # 此文件跟同级目录的 global.d.ts 文件一样也是全局类型声明，只不过这里存放一些零散的全局类型，无需引入直接在 .vue 、.ts 、.tsx 文件使用即可获得类型提示\n│   │   ├── router.d.ts  # 全局路由类型声明\n│   │   ├── shims-tsx.d.ts  # 该文件是为了给 .tsx 文件提供类型支持，在编写时能正确识别语法\n│   │   └── shims-vue.d.ts  # .vue、.scss 文件不是常规的文件类型，typescript 无法识别，所以我们需要通过下图的代码告诉 typescript 这些文件的类型，防止类型报错\n├── .browserslistrc  # 配置目标浏览器的环境\n├── .dockerignore  # 排除不需要上传到 docker 服务端的文件或目录\n├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/\n├── .env  # 全局环境变量配置（当 .env 文件与 .env.development、.env.production、.env.staging 这三个文件之一存在相同的配置 key 时，.env 优先级更低）\n├── .env.development  # 开发环境变量配置\n├── .env.production  # 生产环境变量配置\n├── .env.staging  # 预发布环境变量配置\n├── .gitattributes  # 自定义指定文件属性\n├── .gitignore  # git 提交忽略文件\n├── .gitpod.yml  # gitpod 部署配置\n├── .lintstagedrc  # lint-staged 配置\n├── .markdownlint.json  # markdown 格式检查配置\n├── .npmrc  # npm 配置文件\n├── .nvmrc  # 用于指定在使用 Node Version Manager（NVM）时要使用的特定 Node.js 版本\n├── .prettierignore  # prettier 语法检查忽略文件\n├── .prettierrc.js  # prettier 插件配置\n├── .stylelintignore  # stylelint 语法检查忽略文件\n├── CHANGELOG.en_US.md  # 版本更新日志（英文版）\n├── CHANGELOG.md  # 版本更新日志（英文版）\n├── CHANGELOG.zh_CN.md  # 版本更新日志（中文版）\n├── Dockerfile  # 用来构建 docker 镜像\n├── LICENSE  # 证书\n├── README.en-US.md  # README（英文版）\n├── README.md  # README\n├── commitlint.config.js  # git 提交前检查配置\n├── eslint.config.js  # eslint 语法检查配置\n├── index.html  # html 主入口\n├── package.json  # 依赖包管理以及命令配置\n├── pnpm-lock.yaml  # 依赖包版本锁定文件\n├── postcss.config.js  # postcss 插件配置\n├── stylelint.config.js  # stylelint 配置\n├── tailwind.config.ts  # tailwindcss 配置\n├── tsconfig.json  # typescript 配置\n└── vite.config.ts  # vite 配置\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);