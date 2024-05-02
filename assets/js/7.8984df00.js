(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{477:function(s,a,t){s.exports=t.p+"assets/img/report.2d928cf7.jpg"},478:function(s,a,t){s.exports=t.p+"assets/img/cloc.2dd9aedf.jpg"},479:function(s,a,t){s.exports=t.p+"assets/img/dist-small.7326ecf3.jpg"},480:function(s,a,t){s.exports=t.p+"assets/img/dist.193bee67.jpg"},481:function(s,a,t){s.exports=t.p+"assets/img/nginx-config.5d0e66d7.jpg"},482:function(s,a,t){s.exports=t.p+"assets/img/before-gzip.98470d85.jpg"},483:function(s,a,t){s.exports=t.p+"assets/img/after-gzip.5db603db.jpg"},484:function(s,a,t){s.exports=t.p+"assets/img/check-nginx-config.10ef0bbd.jpg"},601:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"本地环境打包预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地环境打包预览"}},[s._v("#")]),s._v(" 本地环境打包预览")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm preview:build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"预发布打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预发布打包"}},[s._v("#")]),s._v(" 预发布打包")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.staging",target:"_blank",rel:"noopener noreferrer"}},[s._v(".env.staging"),a("OutboundLink")],1),s._v(" 文件为预发布打包前的配置文件，"),a("a",{attrs:{href:"https://cn.vitejs.dev/guide/env-and-mode.html#modes",target:"_blank",rel:"noopener noreferrer"}},[s._v("预发布"),a("OutboundLink")],1),s._v(" "),a("Badge",{attrs:{text:"vite文档"}})],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm build:staging\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"正式环境打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正式环境打包"}},[s._v("#")]),s._v(" 正式环境打包")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.production",target:"_blank",rel:"noopener noreferrer"}},[s._v(".env.production"),a("OutboundLink")],1),s._v(" 文件为正式环境打包前的配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"打包分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包分析"}},[s._v("#")]),s._v(" 打包分析")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm report\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(477),alt:"report"}})]),s._v(" "),a("h3",{attrs:{id:"平台文件、语言分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台文件、语言分析"}},[s._v("#")]),s._v(" 平台文件、语言分析")]),s._v(" "),a("p",[s._v("分析平台采用了哪些语言以及代码量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm cloc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(478),alt:"image-cloc"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("打包优化")]),s._v(" "),a("p",[s._v("点击查看更多 "),a("RouterLink",{attrs:{to:"/pages/buildgood/"}},[s._v("打包优化")])],1)]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" "),a("code",[s._v("nginx")])]),s._v(" "),a("p",[s._v("在 "),a("RouterLink",{attrs:{to:"/pages/request/#什么是跨域"}},[s._v("http 请求篇")]),s._v("，平台主推使用 "),a("code",[s._v("nginx")]),s._v(" 部署，因为可以满足绝大多数场景，下面我们讲一下如何配置")],1),s._v(" "),a("h4",{attrs:{id:"打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),a("p",[s._v("平台提供了全局打包路径 "),a("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.production#L2",target:"_blank",rel:"noopener noreferrer"}},[s._v("VITE_PUBLIC_PATH"),a("OutboundLink")],1),s._v(" ，默认 "),a("code",[s._v("/")]),s._v("，可根据需求自行修改。比如平台的预览地址是 "),a("code",[s._v("https://yiming_chang.gitee.io/vue-pure-admin/#/login")]),s._v("，可以看到根目录 "),a("code",[s._v("https://yiming_chang.gitee.io")]),s._v(" 后面又跟了个 "),a("code",[s._v("/vue-pure-admin/")]),s._v(" 子目录，那么我们打包时就应该把 "),a("code",[s._v("VITE_PUBLIC_PATH")]),s._v(" 改成 "),a("code",[s._v("/vue-pure-admin/")]),s._v("，然后执行 "),a("code",[s._v("pnpm build")]),s._v(" 就行，打包完后观察平台根目录会多出个 "),a("code",[s._v("dist")]),s._v(" 目录，如下图")]),s._v(" "),a("p",[a("img",{attrs:{src:t(479),alt:"dist-small"}})]),s._v(" "),a("h4",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" "),a("code",[s._v("nginx")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("拿 "),a("code",[s._v("mac")]),s._v(" 举例，配置都一样，可能您们对应的目录不一样，根据实际情况修改即可")]),s._v(" "),a("p",[s._v("① 上面打包好后，来到 "),a("code",[s._v("/usr/local/var/www")]),s._v(" 目录下，将打包后 "),a("code",[s._v("dist")]),s._v(" 文件里的静态资源都放进去即可，如下图")]),s._v(" "),a("p",[a("img",{attrs:{src:t(480),alt:"dist"}})]),s._v(" "),a("p",[s._v("② 比如我们在 "),a("code",[s._v("vite.config.ts")]),s._v(" 配置了两个后端地址，如下")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[s._v("proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一个代理后端地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"/api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:3000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rewrite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^\\/api")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二个代理后端地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"/otherApi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:3290"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rewrite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^\\/otherApi")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("来到 "),a("code",[s._v("/usr/local/etc/nginx/nginx.conf")]),s._v(" 这个 "),a("code",[s._v("nginx")]),s._v(" 的配置文件，修改成如下配置即可")]),s._v(" "),a("p",[s._v("nginx.config")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location / {\n    root   html;\n    index  index.html index.htm;\n    # 用于配合前端路由为h5模式使用，防止刷新404 https://router.vuejs.org/zh/guide/essentials/history-mode.html#nginx\n    try_files $uri $uri/ /index.html;\n}\n\n# 第一个代理后端地址（vite.config.ts里叫 /api，这里也要保持一致）\nlocation /api {\n    # 如果后端在本地比如127.0.0.1或者localhost请解开下面的rewrite注释即可\n    # rewrite  ^.+api/?(.*)$ /$1 break;\n    # 这里填写后端地址（后面一定不要忘记添加 / ）\n    proxy_pass http://127.0.0.1:3000/;\n    proxy_set_header Host $host;\n    proxy_set_header Cookie $http_cookie;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_redirect default;\n    add_header Access-Control-Allow-Origin *;\n    add_header Access-Control-Allow-Headers X-Requested-With;\n    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;\n}\n\n# 第二个代理后端地址（vite.config.ts里叫 /otherApi，这里也要保持一致）\nlocation /otherApi {\n    # 如果后端在本地比如127.0.0.1或者localhost请解开下面的rewrite注释即可\n    # rewrite  ^.+otherApi/?(.*)$ /$1 break;\n    # 这里填写后端地址（后面一定不要忘记添加 / ）\n    proxy_pass http://127.0.0.1:3290/;\n    proxy_set_header Host $host;\n    proxy_set_header Cookie $http_cookie;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_redirect default;\n    add_header Access-Control-Allow-Origin *;\n    add_header Access-Control-Allow-Headers X-Requested-With;\n    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("将上面的配置放到 "),a("code",[s._v("server")]),s._v(" 里，如下图")]),s._v(" "),a("p",[a("img",{attrs:{src:t(481),alt:"nginx-config"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("上面的配置是平台的 VITE_PUBLIC_PATH = / 情况，也就是只有跟目录的情况。下面的配置为有子目录情况，比如子目录叫 `vue-pure-admin`")]),s._v(" "),a("p",[s._v("① 来到 "),a("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.production#L2",target:"_blank",rel:"noopener noreferrer"}},[s._v(".env.production"),a("OutboundLink")],1),s._v("，将 "),a("code",[s._v("VITE_PUBLIC_PATH")]),s._v(" 等于 "),a("code",[s._v("/vue-pure-admin")]),s._v("，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 线上环境平台打包路径\nVITE_PUBLIC_PATH = /vue-pure-admin/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("② 配置 "),a("code",[s._v("nginx.config")]),s._v(" 如下，可以看到多了个 "),a("code",[s._v("location /vue-pure-admin/")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("nginx.config")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location / {\n    root   html;\n    index  index.html index.htm;\n    try_files $uri $uri/ /index.html;\n}\n\nlocation /vue-pure-admin/ {\n    root   html;\n    index  index.html index.htm;\n    try_files $uri $uri/ /vue-pure-admin/index.html;\n}\n\nlocation /api {\n    # 如果后端在本地比如127.0.0.1或者localhost请解开下面的rewrite注释即可\n    # rewrite  ^.+api/?(.*)$ /$1 break;\n    # 这里填写后端地址（后面一定不要忘记添加 / ）\n    proxy_pass http://127.0.0.1:3000/;\n    proxy_set_header Host $host;\n    proxy_set_header Cookie $http_cookie;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_redirect default;\n    add_header Access-Control-Allow-Origin *;\n    add_header Access-Control-Allow-Headers X-Requested-With;\n    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;\n}\n\nlocation /otherApi {\n    # 如果后端在本地比如127.0.0.1或者localhost请解开下面的rewrite注释即可\n    # rewrite  ^.+otherApi/?(.*)$ /$1 break;\n    # 这里填写后端地址（后面一定不要忘记添加 / ）\n    proxy_pass http://127.0.0.1:3290/;\n    proxy_set_header Host $host;\n    proxy_set_header Cookie $http_cookie;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_redirect default;\n    add_header Access-Control-Allow-Origin *;\n    add_header Access-Control-Allow-Headers X-Requested-With;\n    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"开启-gzip、brotli-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-gzip、brotli-压缩"}},[s._v("#")]),s._v(" 开启 "),a("code",[s._v("gzip")]),s._v("、"),a("code",[s._v("brotli")]),s._v(" 压缩")]),s._v(" "),a("p",[s._v("① 来到 "),a("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/.env.production#L16",target:"_blank",rel:"noopener noreferrer"}},[s._v(".env.production"),a("OutboundLink")],1),s._v("，将 "),a("code",[s._v("VITE_COMPRESSION")]),s._v(" 等于 "),a("code",[s._v("both")]),s._v("，如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 同时开启 gzip 与 brotli 压缩\nVITE_COMPRESSION = "both"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("② 配置 "),a("code",[s._v("nginx.config")]),s._v(" 如下")]),s._v(" "),a("p",[s._v("nginx.config")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('http {\n  # 开启gzip\n  gzip on;\n  # https://blog.csdn.net/fxss5201/article/details/106535475\n  gzip_static on;\n  gzip_proxied any;\n  # 低于1kb的资源不压缩\n  gzip_min_length 1k;\n  gzip_buffers 4 16k;\n  gzip_comp_level 2;\n  # 需要压缩的类型\n  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n  # 配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）\n  gzip_disable "MSIE [1-6]\\.";\n  # 是否添加“Vary: Accept-Encoding”响应头\n  gzip_vary off;\n\n  # 开启brotli压缩，与gzip共存不会冲突，nginx默认不支持ngx_brotli模块，需要自行编译，参考 https://cloud.tencent.com/developer/article/2071894\n  brotli on;\n  brotli_comp_level 6;\n  brotli_buffers 16 8k;\n  brotli_min_length 20;\n  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("下面两张图是平台非国际化精简版开启 "),a("code",[s._v("gzip")]),s._v(" 前后对比")]),s._v(" "),a("p",[s._v("未开启 "),a("code",[s._v("gzip")]),s._v("（资源大小 "),a("code",[s._v("2.6MB")]),s._v("）")]),s._v(" "),a("p",[a("img",{attrs:{src:t(482),alt:"before-gzip"}})]),s._v(" "),a("p",[s._v("开启 "),a("code",[s._v("gzip")]),s._v("（资源被压缩，大小 "),a("code",[s._v("684kb")]),s._v("，比未开启时少了约 "),a("code",[s._v("2MB")]),s._v(" 🐮）")]),s._v(" "),a("p",[a("img",{attrs:{src:t(483),alt:"after-gzip"}})]),s._v(" "),a("h4",{attrs:{id:"nginx-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令"}},[s._v("#")]),s._v(" "),a("code",[s._v("nginx")]),s._v(" 常用命令")]),s._v(" "),a("h5",{attrs:{id:"启动-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-nginx"}},[s._v("#")]),s._v(" 启动 "),a("code",[s._v("nginx")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"重启-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启-nginx"}},[s._v("#")]),s._v(" 重启 "),a("code",[s._v("nginx")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"停止运行-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止运行-nginx"}},[s._v("#")]),s._v(" 停止运行 "),a("code",[s._v("nginx")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo nginx -s stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"判断-nginx-config-配置文件语法是否正确"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断-nginx-config-配置文件语法是否正确"}},[s._v("#")]),s._v(" 判断 "),a("code",[s._v("nginx.config")]),s._v(" 配置文件语法是否正确")]),s._v(" "),a("p",[s._v("常用于当您配置 "),a("code",[s._v("nginx.config")]),s._v(" 文件保存重启后却不生效时")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo nginx -t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当出现 "),a("code",[s._v("ok")]),s._v("、"),a("code",[s._v("successful")]),s._v(" 的字眼时说明配置文件语法没问题")]),s._v(" "),a("p",[a("img",{attrs:{src:t(484),alt:"check-nginx-config"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);