(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{617:function(v,e,_){"use strict";_.r(e);var o=_(7),s=Object(o.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("从 "),e("code",[v._v("2020年11月16")]),v._v(" 开发平台到现在，已然忘记踩了多少坑，找了多少 "),e("code",[v._v("issues、pull requests")]),v._v(" 以及重构了多少次，但是我并没有做记录，感觉很可惜，当然由于平台使用的技术比较新，也一直在跟随潮流，这也难免会出现一些很令人难以寻味的非平台 "),e("code",[v._v("bug")]),v._v("，从 "),e("code",[v._v("2022年11月11日")]),v._v(" 起决定开始记录对平台影响较大的问题，供使用者参考（无任何抨击！感恩开源！）")]),v._v(" "),e("h2",{attrs:{id:"_2022年11月11日-vue、vue-js-devtools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2022年11月11日-vue、vue-js-devtools"}},[v._v("#")]),v._v(" "),e("code",[v._v("2022年11月11日")]),v._v("（"),e("code",[v._v("vue")]),v._v("、"),e("code",[v._v("Vue.js devtools")]),v._v("）")]),v._v(" "),e("h3",{attrs:{id:"发现-vue-的-bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发现-vue-的-bug"}},[v._v("#")]),v._v(" 发现 "),e("code",[v._v("vue")]),v._v(" 的 "),e("code",[v._v("bug")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("vue v3.2.41")]),v._v(" 及以上版本和 "),e("code",[v._v("Vue.js devtools v6.4.5")]),v._v(" 两者一起使用，页面卡顿明显，尤其当页面元素多以及同一时刻操作较多元素是最为明显。解决办法：卸载 "),e("code",[v._v("Vue.js devtools")]),v._v("，毕竟我也不用 😄，断点调试足以（卸载 "),e("code",[v._v("Vue.js devtools")]),v._v(" 后，页面比 "),e("code",[v._v("vue v3.2.41")]),v._v(" 之前操作还流畅）")])]),v._v(" "),e("h3",{attrs:{id:"排查方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排查方法"}},[v._v("#")]),v._v(" 排查方法")]),v._v(" "),e("ul",[e("li",[v._v("将 "),e("code",[v._v("vue")]),v._v(" 升级到 "),e("code",[v._v("v3.2.41")]),v._v(" 版本后，开发环境页面卡顿明显，当我打包后，线上预览很丝滑。然后我把平台的项目很多依赖都升级了个遍还不行，删除 "),e("code",[v._v("pnpm-lock.yaml")]),v._v(" 和 "),e("code",[v._v("node_modules")]),v._v(" 重新安装也不行，于是我怀疑是 "),e("code",[v._v("pnpm")]),v._v(" 的问题，又把 "),e("code",[v._v("pnpm")]),v._v(" 从 "),e("code",[v._v("6")]),v._v(" 升到 "),e("code",[v._v("7")]),v._v(" 但还是不行，接着我把项目放到火狐浏览器运行，很流畅 😭，因为我平时不咋用火狐，没有安装任何插件，这样我就排查到问题出在谷歌浏览器的 "),e("code",[v._v("Vue.js devtools")]),v._v(" 插件了，当然之前我在 "),e("code",[v._v("vue")]),v._v(" 的 "),e("code",[v._v("issues")]),v._v(" 中看到不少 "),e("code",[v._v("Vue.js devtools")]),v._v(" 会导致页面崩溃和内存泄露的问题")])]),v._v(" "),e("h2",{attrs:{id:"_2022年11月11日-vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2022年11月11日-vite"}},[v._v("#")]),v._v(" "),e("code",[v._v("2022年11月11日")]),v._v("（"),e("code",[v._v("vite")]),v._v("）")]),v._v(" "),e("p",[e("code",[v._v("2022年11月11日")]),v._v(" 我将平台的 "),e("code",[v._v("vite")]),v._v(" 版本固定到了 "),e("code",[v._v("3.1.8")]),v._v(" ，因为之后的版本问题还是有点多，尤其是这个 "),e("a",{attrs:{href:"https://github.com/vitejs/vite/issues/10658",target:"_blank",rel:"noopener noreferrer"}},[v._v("issues"),e("OutboundLink")],1),v._v("，说的是 "),e("code",[v._v("vite v3.1.8")]),v._v(" 以上版本首次启动在 "),e("code",[v._v("windows")]),v._v(" 的表现比 "),e("code",[v._v("mac")]),v._v(" 慢两倍。当然 "),e("code",[v._v("vite v4")]),v._v(" 快来了，应该会解决很多问题，到时我们在升级。这里大家要注意下，依赖包还是跟着平台的版本去使用，不要随便升级，平台每次升级依赖都会去做测试（开发、生产）")])])}),[],!1,null,null,null);e.default=s.exports}}]);