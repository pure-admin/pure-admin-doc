(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{542:function(t,a,s){t.exports=s.p+"assets/img/rbac.8088af0f.jpg"},543:function(t,a,s){t.exports=s.p+"assets/img/roles.6ec7dd6e.jpg"},544:function(t,a,s){t.exports=s.p+"assets/img/auths.a25e8140.jpg"},545:function(t,a,s){t.exports=s.p+"assets/img/permissions.463f2180.jpg"},614:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("所谓 "),a("code",[t._v("RBAC")]),t._v("（Role Based Access Control）权限指的是基于角色的访问控制")]),t._v(" "),a("p",[a("img",{attrs:{src:s(542),alt:"rbac"}})]),t._v(" "),a("h2",{attrs:{id:"用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[t._v("#")]),t._v(" 用户")]),t._v(" "),a("p",[t._v("平台用 "),a("code",[t._v("mock")]),t._v(" 模拟出两个账号，一个是 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/mock/login.ts#L14",target:"_blank",rel:"noopener noreferrer"}},[t._v("admin"),a("OutboundLink")],1),t._v("，另一个是 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/mock/login.ts#L30",target:"_blank",rel:"noopener noreferrer"}},[t._v("common"),a("OutboundLink")],1),t._v("，用户名字段为 "),a("code",[t._v("username")]),t._v(" ，为字符串类型，当然平台将用户名在 "),a("code",[t._v("pinia")]),t._v(" 的 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/store/modules/user.ts#L25",target:"_blank",rel:"noopener noreferrer"}},[t._v("state"),a("OutboundLink")],1),t._v(" 里存了一份")]),t._v(" "),a("h2",{attrs:{id:"角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[t._v("#")]),t._v(" 角色")]),t._v(" "),a("p",[t._v("平台用 "),a("code",[t._v("mock")]),t._v(" 模拟出两个角色，一个是 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/mock/login.ts#L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("admin"),a("OutboundLink")],1),t._v("，另一个是 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/mock/login.ts#L32",target:"_blank",rel:"noopener noreferrer"}},[t._v("common"),a("OutboundLink")],1),t._v("，角色存放在 "),a("code",[t._v("roles")]),t._v(" 字段中，为数组类型，可支持多个角色，当然平台将 "),a("code",[t._v("当前登录用户的角色")]),t._v(" 在 "),a("code",[t._v("pinia")]),t._v(" 的 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/store/modules/user.ts#L29",target:"_blank",rel:"noopener noreferrer"}},[t._v("state"),a("OutboundLink")],1),t._v(" 里也存了一份")]),t._v(" "),a("h2",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),a("p",[t._v("整体分为 "),a("a",{attrs:{href:"#%E7%B2%97%E7%B2%92%E5%BA%A6%E6%9D%83%E9%99%90"}},[t._v("粗粒度权限")]),t._v(" 和 "),a("a",{attrs:{href:"#%E7%BB%86%E7%B2%92%E5%BA%A6%E6%9D%83%E9%99%90"}},[t._v("细粒度权限")])]),t._v(" "),a("h3",{attrs:{id:"粗粒度权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#粗粒度权限"}},[t._v("#")]),t._v(" 粗粒度权限")]),t._v(" "),a("h4",{attrs:{id:"菜单权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单权限"}},[t._v("#")]),t._v(" 菜单权限")]),t._v(" "),a("h5",{attrs:{id:"实现原理、代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理、代码"}},[t._v("#")]),t._v(" 实现原理、代码")]),t._v(" "),a("p",[t._v("页面整体的菜单存放在 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/store/modules/permission.ts#L21",target:"_blank",rel:"noopener noreferrer"}},[t._v("wholeMenus"),a("OutboundLink")],1),t._v("，所以我们只需要控制 "),a("code",[t._v("wholeMenus")]),t._v(" 就能控制菜单的显示、隐藏。通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/router/utils.ts#L85",target:"_blank",rel:"noopener noreferrer"}},[t._v("filterNoPermissionTree"),a("OutboundLink")],1),t._v(" 函数从菜单中过滤无权限的菜单")]),t._v(" "),a("h5",{attrs:{id:"如何配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[t._v("#")]),t._v(" 如何配置")]),t._v(" "),a("p",[t._v("只需要通过返回路由的 "),a("code",[t._v("roles")]),t._v(" 配置项，赋予该菜单权限即可，如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(543),alt:"roles"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("实现细节")]),t._v(" "),a("p",[t._v("将菜单与路由解藕，这样可以更灵活的控制二者，不会造成一方改动必会影响另一方")])]),t._v(" "),a("h4",{attrs:{id:"url-链接权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-链接权限"}},[t._v("#")]),t._v(" "),a("code",[t._v("url")]),t._v(" 链接权限")]),t._v(" "),a("h5",{attrs:{id:"实现原理、代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理、代码-2"}},[t._v("#")]),t._v(" 实现原理、代码")]),t._v(" "),a("p",[t._v("平台在路由的 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/router/index.ts#L109",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeEach"),a("OutboundLink")],1),t._v(" 钩子函数中，通过对比当前用户的角色和当前路由中 "),a("code",[t._v("roles")]),t._v(" 字段来判断是否有无权限，无权限跳转 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/error/403.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("403"),a("OutboundLink")],1),t._v(" 页面")]),t._v(" "),a("h5",{attrs:{id:"如何配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置-2"}},[t._v("#")]),t._v(" 如何配置")]),t._v(" "),a("p",[t._v("您不需要做任何配置，只需要像上图一样配置好权限就行，平台会根据有无权限自行判断，如下面视频，当有 "),a("code",[t._v("admin")]),t._v(" 权限时可以看到系统管理目录以及里面的菜单页面并且可以通过 "),a("code",[t._v("url")]),t._v(" 跳转，当然也可以在 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/tree/main/src/layout/components/lay-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜单搜索"),a("OutboundLink")],1),t._v(" 中找到，当无 "),a("code",[t._v("admin")]),t._v(" 权限时反之")]),t._v(" "),a("video",{attrs:{width:"320",height:"240",controls:""}},[a("source",{attrs:{src:t.$withBase("/video/url.mov"),type:"video/mp4"}})]),t._v(" "),a("h4",{attrs:{id:"按钮、组件、类方法权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按钮、组件、类方法权限"}},[t._v("#")]),t._v(" 按钮、组件、类方法权限")]),t._v(" "),a("p",[t._v("针对这三类权限，平台提供两种模式，它们都有"),a("code",[t._v("组件方式判断权限")]),t._v("、"),a("code",[t._v("函数方式判断权限")]),t._v("、"),a("code",[t._v("指令方式判断权限")]),t._v(" 三种方法")]),t._v(" "),a("h5",{attrs:{id:"第一种模式-路由返回按钮级别权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种模式-路由返回按钮级别权限"}},[t._v("#")]),t._v(" 第一种模式，路由返回按钮级别权限")]),t._v(" "),a("p",[t._v("通过路由的 "),a("code",[t._v("auths")]),t._v(" 配置项，赋予对应页面按钮级别权限，如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(544),alt:"auths"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("单个路由的 "),a("code",[t._v("auths")]),t._v(" 字段中按钮级别权限标识必须保持唯一，而在不同路由的 "),a("code",[t._v("auths")]),t._v(" 字段中可以重复使用相同的权限标识")])]),t._v(" "),a("h6",{attrs:{id:"组件方式判断权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件方式判断权限"}},[t._v("#")]),t._v(" 组件方式判断权限")]),t._v(" "),a("p",[t._v("按钮、组件权限可用")]),t._v(" "),a("ul",[a("li",[t._v("实现原理、代码")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/router/utils.ts#L359",target:"_blank",rel:"noopener noreferrer"}},[t._v("hasAuth"),a("OutboundLink")],1),t._v(" 函数，进行权限组件的封装，使用 "),a("code",[t._v("Vue")]),t._v(" 提供的 "),a("a",{attrs:{href:"https://cn.vuejs.org/guide/extras/rendering-mechanism.html#patch-flags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fragment"),a("OutboundLink")],1),t._v(" 标签进行包裹，这样可让被包裹的组件无多余标签，减少渲染成本。"),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/components/ReAuth/src/auth.tsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看具体代码"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("如何配置")])]),t._v(" "),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/index.vue#L25-L46",target:"_blank",rel:"noopener noreferrer"}},[t._v("views/permission/button/index.vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-Vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Auth")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn_add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 拥有code：'btn_add' 权限可见 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("平台已经全局注册 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/main.ts#L48",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auth"),a("OutboundLink")],1),t._v(" 组件，无需重复注册")])]),t._v(" "),a("h6",{attrs:{id:"函数方式判断权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数方式判断权限"}},[t._v("#")]),t._v(" 函数方式判断权限")]),t._v(" "),a("p",[t._v("按钮、组件、类方法权限都可用")]),t._v(" "),a("ul",[a("li",[t._v("实现原理、代码")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/router/utils.ts#L359",target:"_blank",rel:"noopener noreferrer"}},[t._v("hasAuth"),a("OutboundLink")],1),t._v(" 函数判断某些按钮、组件、类方法是否有按钮级别的权限")]),t._v(" "),a("ul",[a("li",[t._v("如何配置")])]),t._v(" "),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/index.vue#L55-L74",target:"_blank",rel:"noopener noreferrer"}},[t._v("views/permission/button/index.vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-Vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hasAuth('btn_add')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  拥有code：'btn_add' 权限可见\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasAuth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn_add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"显示"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"隐藏"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h6",{attrs:{id:"指令方式判断权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令方式判断权限"}},[t._v("#")]),t._v(" 指令方式判断权限")]),t._v(" "),a("p",[t._v("按钮、组件权限可用。指令方式不能动态修改权限")]),t._v(" "),a("ul",[a("li",[t._v("实现原理、代码")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/router/utils.ts#L359",target:"_blank",rel:"noopener noreferrer"}},[t._v("hasAuth"),a("OutboundLink")],1),t._v(" 函数，进行权限指令的封装。"),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/directives/auth/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看具体代码"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("如何配置")])]),t._v(" "),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/index.vue#L85-L102",target:"_blank",rel:"noopener noreferrer"}},[t._v("views/permission/button/index.vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-Vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-auth")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("btn_add'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  拥有code：'btn_add' 权限可见\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h5",{attrs:{id:"第二种模式-登录接口返回按钮级别权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种模式-登录接口返回按钮级别权限"}},[t._v("#")]),t._v(" 第二种模式，登录接口返回按钮级别权限")]),t._v(" "),a("p",[t._v("通过登录接口的"),a("code",[t._v("permissions")]),t._v("字段返回按钮级别权限，如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(545),alt:"permissions"}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("permissions")]),t._v("字段里的按钮级别权限标识需保持唯一")])]),t._v(" "),a("h6",{attrs:{id:"组件方式判断权限-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件方式判断权限-2"}},[t._v("#")]),t._v(" 组件方式判断权限")]),t._v(" "),a("p",[t._v("按钮、组件权限可用")]),t._v(" "),a("ul",[a("li",[t._v("实现原理、代码")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/utils/auth.ts#L131",target:"_blank",rel:"noopener noreferrer"}},[t._v("hasPerms"),a("OutboundLink")],1),t._v(" 函数，进行权限组件的封装，使用 "),a("code",[t._v("Vue")]),t._v(" 提供的 "),a("a",{attrs:{href:"https://cn.vuejs.org/guide/extras/rendering-mechanism.html#patch-flags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fragment"),a("OutboundLink")],1),t._v(" 标签进行包裹，这样可让被包裹的组件无多余标签，减少渲染成本。"),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/components/RePerms/src/perms.tsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看具体代码"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("如何配置")])]),t._v(" "),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/perms.vue#L31-L52",target:"_blank",rel:"noopener noreferrer"}},[t._v("views/permission/button/perms.vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-Vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Perms")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("permission:btn:add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("plain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 拥有code：'permission:btn:add' 权限可见 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Perms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("平台已经全局注册 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/main.ts#L49",target:"_blank",rel:"noopener noreferrer"}},[t._v("Perms"),a("OutboundLink")],1),t._v(" 组件，无需重复注册")])]),t._v(" "),a("h6",{attrs:{id:"函数方式判断权限-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数方式判断权限-2"}},[t._v("#")]),t._v(" 函数方式判断权限")]),t._v(" "),a("p",[t._v("按钮、组件、类方法权限都可用")]),t._v(" "),a("ul",[a("li",[t._v("实现原理、代码")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/utils/auth.ts#L131",target:"_blank",rel:"noopener noreferrer"}},[t._v("hasPerms"),a("OutboundLink")],1),t._v(" 函数判断某些按钮、组件、类方法是否有按钮级别的权限")]),t._v(" "),a("ul",[a("li",[t._v("如何配置")])]),t._v(" "),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/perms.vue#L61-L84",target:"_blank",rel:"noopener noreferrer"}},[t._v("views/permission/button/perms.vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-Vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hasPerms('permission:btn:add')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("plain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  拥有code：'permission:btn:add' 权限可见\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPerms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn_add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"显示"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"隐藏"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h6",{attrs:{id:"指令方式判断权限-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令方式判断权限-2"}},[t._v("#")]),t._v(" 指令方式判断权限")]),t._v(" "),a("p",[t._v("按钮、组件权限可用。指令方式不能动态修改权限")]),t._v(" "),a("ul",[a("li",[t._v("实现原理、代码")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/utils/auth.ts#L131",target:"_blank",rel:"noopener noreferrer"}},[t._v("hasPerms"),a("OutboundLink")],1),t._v(" 函数，进行权限指令的封装。"),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/directives/perms/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看具体代码"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("如何配置")])]),t._v(" "),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/perms.vue#L95-L112",target:"_blank",rel:"noopener noreferrer"}},[t._v("views/permission/button/perms.vue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-Vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-perms")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("permission:btn:add'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("plain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  拥有code：'permission:btn:add' 权限可见\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"细粒度权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细粒度权限"}},[t._v("#")]),t._v(" 细粒度权限")]),t._v(" "),a("h4",{attrs:{id:"数据权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据权限"}},[t._v("#")]),t._v(" 数据权限")]),t._v(" "),a("p",[t._v("数据权限对页面的要求就非常简单了，比如可以将数据权限的配置功能放在 "),a("code",[t._v("角色管理")]),t._v(" 页面进行配置即可")])])}),[],!1,null,null,null);a.default=r.exports}}]);