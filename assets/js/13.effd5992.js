(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{550:function(e,t,r){e.exports=r.p+"assets/img/buildgood.a05286f4.jpg"},551:function(e,t,r){e.exports=r.p+"assets/img/no-output.48778faf.jpg"},552:function(e,t,r){e.exports=r.p+"assets/img/output.e13d001d.jpg"},612:function(e,t,r){"use strict";r.r(t);var s=r(7),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("打包优化关联着网站的稳定与加载速度，在开发中也是非常重要的一项")]),e._v(" "),t("p",[t("img",{attrs:{src:r(550),alt:"buildgood"}})]),e._v(" "),t("h2",{attrs:{id:"vite-自身的构建优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite-自身的构建优化"}},[e._v("#")]),e._v(" "),t("code",[e._v("vite")]),e._v(" 自身的构建优化")]),e._v(" "),t("p",[e._v("点击查看 "),t("a",{attrs:{href:"https://cn.vitejs.dev/guide/features.html#build-optimizations",target:"_blank",rel:"noopener noreferrer"}},[e._v("build-optimizations"),t("OutboundLink")],1),e._v(" "),t("Badge",{attrs:{text:"vite官方文档"}})],1),e._v(" "),t("h2",{attrs:{id:"css-优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-优化"}},[e._v("#")]),e._v(" "),t("code",[e._v("css")]),e._v(" 优化")]),e._v(" "),t("p",[e._v("分两步优化")]),e._v(" "),t("h3",{attrs:{id:"​-压缩-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#​-压缩-css"}},[e._v("#")]),e._v(" ​ 压缩 "),t("code",[e._v("css")])]),e._v(" "),t("p",[e._v("使用 "),t("RouterLink",{attrs:{to:"/pages/tailwindcss/#cssnano"}},[e._v("cssnano")]),e._v(" 去压缩 "),t("code",[e._v("css")])],1),e._v(" "),t("h3",{attrs:{id:"​-自动添加浏览器前缀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#​-自动添加浏览器前缀"}},[e._v("#")]),e._v(" ​ 自动添加浏览器前缀")]),e._v(" "),t("p",[e._v("使用 "),t("RouterLink",{attrs:{to:"/pages/tailwindcss/#autoprefixer"}},[e._v("Autoprefixer")]),e._v(" 自动添加浏览器前缀")],1),e._v(" "),t("h2",{attrs:{id:"组件、工具库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件、工具库"}},[e._v("#")]),e._v(" 组件、工具库")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("无论是组件（如 "),t("code",[e._v("element-plus")]),e._v("），还是工具库（如 "),t("code",[e._v("lodash")]),e._v("、"),t("code",[e._v("axios")]),e._v("）我们都应该尽可能的按需引入，使其有良好的  "),t("code",[e._v("tree-shaking")]),e._v(" 效果，这样项目整体打包出来的无用代码就少之又少了")])]),e._v(" "),t("li",[t("p",[e._v("拿 "),t("code",[e._v("lodash")]),e._v(" 举例，"),t("code",[e._v("lodash")]),e._v(" 默认是 "),t("code",[e._v("cjs")]),e._v(" 格式，不支持 "),t("code",[e._v("es6")]),e._v(" 的 "),t("code",[e._v("import")]),e._v(" 语法，那么我们就可以去 "),t("code",[e._v("github")]),e._v(" 或者某些搜索引擎去寻找替代品，最终平台找到了 "),t("code",[e._v("lodash-unified")]),e._v("，它完全兼容 "),t("code",[e._v("lodash")]),e._v(" 的全部语法并且既支持 "),t("code",[e._v("esm")]),e._v(" 又支持 "),t("code",[e._v("cjs")]),e._v("，这使得它无论在浏览器还是 "),t("code",[e._v("node")]),e._v(" 环境中表现都很良好。当然如果遇到那种只支持 "),t("code",[e._v("cjs")]),e._v(" 格式，网上找遍了都找不到兼容 "),t("code",[e._v("esm")]),e._v(" 格式的咋办呢，这时你可以参考 "),t("code",[e._v("lodash-unified")]),e._v("，看看别人是如何转换的 😊")])]),e._v(" "),t("li",[t("p",[e._v("平台精简版首次启动时间我这边测试是 "),t("code",[e._v("6")]),e._v(" 秒，刷新页面的话开启 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/public/platform-config.json#L19",target:"_blank",rel:"noopener noreferrer"}},[e._v("CachingAsyncRoutes"),t("OutboundLink")],1),e._v(" 可能连 "),t("code",[e._v("1")]),e._v(" 秒都不要，可看下面的视频。如果您使用 "),t("code",[e._v("pure-admin")]),e._v(" 且当前网页"),t("code",[e._v("首启动")]),e._v("和"),t("code",[e._v("刷新页面")]),e._v("的等待时间远远大于前面的数字，也该考虑优化了。当项目具有一定规模的时候，优化并没有那么容易，所以您在写代码前就应该遵循我上面的说法，按需引入才是 "),t("code",[e._v("yyds")]),e._v(" 😄"),t("br"),e._v(" "),t("video",{attrs:{width:"320",height:"240",controls:""}},[t("source",{attrs:{src:e.$withBase("/video/start.mov"),type:"video/mp4"}})])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("vite")]),e._v(" 目前最大的性能瓶颈是大量模块的首页加载，可看 "),t("a",{attrs:{href:"https://github.com/vitejs/vite/issues/1309#issue-777569758",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite-issues"),t("OutboundLink")],1),e._v("，值得期待的是这个 "),t("a",{attrs:{href:"https://github.com/vitejs/vite/pull/10671",target:"_blank",rel:"noopener noreferrer"}},[e._v("pr"),t("OutboundLink")],1),e._v(" 可能会缓解这个麻烦")])])]),e._v(" "),t("h2",{attrs:{id:"压缩-gzip、brotli-格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩-gzip、brotli-格式"}},[e._v("#")]),e._v(" 压缩 "),t("code",[e._v("gzip")]),e._v("、"),t("code",[e._v("brotli")]),e._v(" 格式")]),e._v(" "),t("p",[e._v("使用 "),t("a",{attrs:{href:"https://github.com/vbenjs/vite-plugin-compression",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite-plugin-compression"),t("OutboundLink")],1),e._v(" 对平台进行 "),t("code",[e._v("gzip")]),e._v(" 或者 "),t("code",[e._v("brotli")]),e._v(" 压缩，"),t("code",[e._v("nginx")]),e._v(" 对这两种压缩模式都支持，压缩后部署到 "),t("code",[e._v("nginx")]),e._v(" 将极大提高网页加载速度")]),e._v(" "),t("h3",{attrs:{id:"如何开启压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何开启压缩"}},[e._v("#")]),e._v(" 如何开启压缩")]),e._v(" "),t("p",[e._v("来到 "),t("code",[e._v(".env.production")]),e._v(" 文件，设置 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.production#L13",target:"_blank",rel:"noopener noreferrer"}},[e._v("VITE_COMPRESSION"),t("OutboundLink")],1),e._v(" 即可。设置总体分为下面两种 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/build/compress.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("具体实现代码"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"两种总体设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种总体设置"}},[e._v("#")]),e._v(" 两种总体设置")]),e._v(" "),t("ol",[t("li",[e._v("压缩时不删除原始文件的配置")]),e._v(" "),t("li",[e._v("压缩时删除原始文件的配置")])]),e._v(" "),t("h5",{attrs:{id:"压缩时不删除原始文件的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩时不删除原始文件的配置"}},[e._v("#")]),e._v(" 压缩时不删除原始文件的配置")]),e._v(" "),t("div",{staticClass:"language-.env.production line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('开启 gzip 压缩\nVITE_COMPRESSION = "gzip"\n\n开启 brotli 压缩\nVITE_COMPRESSION = "brotli"\n\n# 同时开启 gzip 与 brotli 压缩\nVITE_COMPRESSION = "both"\n\n# 不开启压缩，默认\nVITE_COMPRESSION = "none"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("h5",{attrs:{id:"压缩时删除原始文件的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩时删除原始文件的配置"}},[e._v("#")]),e._v(" 压缩时删除原始文件的配置")]),e._v(" "),t("div",{staticClass:"language-.env.production line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('开启 gzip 压缩\nVITE_COMPRESSION = "gzip-clear"\n\n开启 brotli 压缩\nVITE_COMPRESSION = "brotli-clear"\n\n# 同时开启 gzip 与 brotli 压缩\nVITE_COMPRESSION = "both-clear"\n\n# 不开启压缩，默认\nVITE_COMPRESSION = "none"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("h2",{attrs:{id:"采用-cdn-模式替换本地依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采用-cdn-模式替换本地依赖"}},[e._v("#")]),e._v(" 采用 "),t("code",[e._v("cdn")]),e._v(" 模式替换本地依赖")]),e._v(" "),t("h3",{attrs:{id:"vite-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite-插件"}},[e._v("#")]),e._v(" "),t("code",[e._v("vite")]),e._v(" 插件")]),e._v(" "),t("p",[e._v("使用 "),t("a",{attrs:{href:"https://github.com/MMF-FE/vite-plugin-cdn-import/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite-plugin-cdn-import"),t("OutboundLink")],1),e._v(" 插件，在打包时将指定的 "),t("code",[e._v("modules")]),e._v(" 替换成 "),t("code",[e._v("cdn")]),e._v(" 链接，从而减少构建时间，提高生产环境中页面加载速度。")]),e._v(" "),t("h3",{attrs:{id:"cdn-厂商-免费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn-厂商-免费"}},[e._v("#")]),e._v(" "),t("code",[e._v("cdn")]),e._v(" 厂商（免费）")]),e._v(" "),t("p",[e._v("平台 "),t("code",[e._v("cdn")]),e._v(" 采用的是国内 "),t("a",{attrs:{href:"https://www.bootcdn.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("bootcdn"),t("OutboundLink")],1),e._v("，主要是稳定并且快，当然您也可以选择 "),t("a",{attrs:{href:"https://unpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("unpkg"),t("OutboundLink")],1),e._v(" 或者 "),t("a",{attrs:{href:"https://www.jsdelivr.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsdelivr"),t("OutboundLink")],1),e._v("，这两个 "),t("code",[e._v("cdn")]),e._v(" 是国外的")]),e._v(" "),t("h3",{attrs:{id:"如何启动-cdn-替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何启动-cdn-替换"}},[e._v("#")]),e._v(" 如何启动 "),t("code",[e._v("cdn")]),e._v(" 替换")]),e._v(" "),t("p",[e._v("来到 "),t("code",[e._v(".env.production")]),e._v(" 文件，将 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.production#L8",target:"_blank",rel:"noopener noreferrer"}},[e._v("VITE_CDN"),t("OutboundLink")],1),e._v(" 设置成 "),t("code",[e._v("true")]),e._v(" 即可")]),e._v(" "),t("h3",{attrs:{id:"默认启动-cdn-替换的模块有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认启动-cdn-替换的模块有哪些"}},[e._v("#")]),e._v(" 默认启动 "),t("code",[e._v("cdn")]),e._v(" 替换的模块有哪些")]),e._v(" "),t("p",[t("code",[e._v("vue")]),e._v("、"),t("code",[e._v("vue-router")]),e._v("、"),t("code",[e._v("vue-demi")]),e._v("、"),t("code",[e._v("pinia")]),e._v("、"),t("code",[e._v("element-plus")]),e._v("、"),t("code",[e._v("axios")]),e._v("、"),t("code",[e._v("dayjs")]),e._v("、"),t("code",[e._v("echarts")]),e._v(" 具体代码 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/build/cdn.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("build/cdn.ts"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"生产环境删除-console-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境删除-console-log"}},[e._v("#")]),e._v(" 生产环境删除 "),t("code",[e._v("console.log")])]),e._v(" "),t("p",[e._v("使用平台开发的 "),t("a",{attrs:{href:"https://github.com/xiaoxian521/vite-plugin-remove-console",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite-plugin-remove-console"),t("OutboundLink")],1),e._v(" 插件，在打包构建时移除平台中所有的 "),t("code",[e._v("console.log")])]),e._v(" "),t("h2",{attrs:{id:"静态资源分类打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源分类打包"}},[e._v("#")]),e._v(" 静态资源分类打包")]),e._v(" "),t("p",[t("code",[e._v("vite")]),e._v(" 是基于 "),t("code",[e._v("esbuild")]),e._v(" 和 "),t("code",[e._v("rollup")]),e._v(" 构建的，在打包时如果不进行 "),t("code",[e._v("output")]),e._v(" 的配置，打包出来的效果如下图（这也是 "),t("code",[e._v("vite")]),e._v(" 默认打包出来的效果，可以看到所有文件都混在一起）")]),e._v(" "),t("p",[t("img",{attrs:{src:r(551),alt:"no-output"}})]),e._v(" "),t("p",[e._v("下图是我们配置 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/vite.config.ts#L63-67",target:"_blank",rel:"noopener noreferrer"}},[e._v("output"),t("OutboundLink")],1),e._v(" 后的效果，可以看到文件都进行了分类存放，这也方便我们查找文件")]),e._v(" "),t("p",[t("img",{attrs:{src:r(552),alt:"output"}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("相关推荐")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/sanyuan0704/vite-plugin-chunk-split/blob/master/README-CN.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite 代码拆包插件。支持多种拆包策略，可避免手动操作 manualChunks 潜在的循环依赖问题"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"svg-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svg-压缩"}},[e._v("#")]),e._v(" "),t("code",[e._v("svg")]),e._v(" 压缩")]),e._v(" "),t("p",[e._v("一般下载的 "),t("code",[e._v("svg")]),e._v(" 或者复制的 "),t("code",[e._v("svg")]),e._v(" 代码，里面存在一些无关紧要的元素，可以将其剔除，毫无影响地降低 "),t("code",[e._v("svg")]),e._v(" 大小"),t("br"),e._v("\n平台使用了 "),t("a",{attrs:{href:"https://www.npmjs.com/package/svgo",target:"_blank",rel:"noopener noreferrer"}},[e._v("svgo"),t("OutboundLink")],1),e._v(" 工具对所有 "),t("code",[e._v("svg")]),e._v(" 进行了压缩，您拉取平台代码时所有 "),t("code",[e._v("svg")]),e._v(" 都已经最简了哦。当然您会问自己新加的 "),t("code",[e._v("svg")]),e._v(" 如何精简呢，来到 "),t("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/package.json#L14",target:"_blank",rel:"noopener noreferrer"}},[e._v("main/package.json"),t("OutboundLink")],1),e._v("，可以看到平台默认使用 "),t("code",[e._v("svgo")]),e._v(" 工具对 "),t("code",[e._v("src/assets/svg")]),e._v(" 文件夹里的所有 "),t("code",[e._v("svg")]),e._v(" 进行压缩，这是可以改动的，只需要将 "),t("code",[e._v("-f")]),e._v(" 和 "),t("code",[e._v("-o")]),e._v(" 后的路径改为您需要压缩的 "),t("code",[e._v("svg")]),e._v(" 路径即可。温馨提示：只需要运行 "),t("code",[e._v("pnpm svgo")]),e._v(" 命令对 "),t("code",[e._v("svg")]),e._v(" 文件进行一次压缩即可")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("推荐阅读")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cn.vuejs.org/guide/best-practices/performance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("性能优化"),t("OutboundLink")],1),e._v(" "),t("Badge",{attrs:{text:"vue文档"}})],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E4%BD%BF%E7%94%A8-vite",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite 中组件按组分块打包"),t("OutboundLink")],1),e._v(" "),t("Badge",{attrs:{text:"vue-router文档"}})],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);