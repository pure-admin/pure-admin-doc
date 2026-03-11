<template>
  <aside class="sidebar">
    <div style="margin-top: 0.8em;margin-left: 1.2em;" v-show="isShow">
      <!-- <a class="pure-video" href="https://pure-admin.cn/pages/service/"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor)">
        <span style="color: #ed5858">高级服务（新功能更新）</span>
      </a> -->
      <!-- <a class="pure-video" href="https://pure-admin.cn/pages/service/#%E6%9C%80%E6%96%B0%E6%B4%BB%E5%8A%A8"
          style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;font-size: 16px;">
          <span style="color: #ed5858">Js版本、Max版本优惠活动</span>
        </a> -->
      <!-- <a class="pure-video" href="https://pure-admin.cn/pages/service/#最新活动与动态"
          style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;font-size: 16px;">
          <span style="color: #ed5858">平台最新活动与动态 🔔</span>
        </a> -->

      <!-- <a class="pure-video" href="https://www.bilibili.com/video/BV1VYASzREmJ/"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor);font-size:18px"
        target="_blank">在 VS Code 中使用 <br /> Claude Code 编码</a> -->
      <a class="pure-video" href="https://www.bilibili.com/video/BV1kg411v7QT/"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor)"
        target="_blank">快速开发教程 📺</a>
      <a class="pure-video" href="https://pure-admin.cn/pages/FAQ/#快速入门-新手必看"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor)">
        快速入门，新手必看 📕
      </a>
      <a class="pure-video" href="https://pure-admin-utils.netlify.app/"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor)"
        target="_blank">@pureadmin/utils文档 📕</a>
      <a class="pure-video" href="https://www.bilibili.com/video/BV1Rx4y1U7Mv/"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor)"
        target="_blank">平台页面、功能演示 📺</a>
      <a class="pure-video" href="https://www.bilibili.com/video/BV1Wr421F7oj/"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;color: var(--videoTextColor)"
        target="_blank">迁移JS版本教程 📺</a>
      <!-- <a class="pure-video" href="https://pure-admin.cn/pages/service/#最新活动与动态"
        style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-top: 4px;font-size: 16px;">
        <span style="color: #ed5858">限时活动即将结束！</span>
      </a> -->
    </div>

    <!-- <div class="blogger" v-if="blogger">
        <img :src="blogger.avatar" />
        <div class="blogger-info">
          <h3>{{ blogger.name }}</h3>

          <div class="icons" v-if="blogger.social">
            <a :href="item.link" :title="item.title" :class="['iconfont', item.iconClass]"
              v-for="(item, index) in blogger.social.icons" :key="index" target="_blank"></a>
          </div>
          <span v-else>{{ blogger.slogan }}</span>
        </div> -->
    <!-- </div> -->

    <!-- 移动端Nav -->
    <NavLinks />

    <slot name="top" />

    <SidebarLinks :depth="0" :items="items" />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  data() {
    return {
      isShow: true
    }
  },

  components: { SidebarLinks, NavLinks },

  props: ['items'],

  computed: {
    blogger() {
      return this.$themeConfig.blogger
    }
  },

  mounted() {
    this.getShow()
  },

  watch: {
    $route() {
      this.getShow()
    }
  },

  methods: {
    getShow() {
      if (this.$page.title === '高级服务') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .pure-video
     &:hover
       transition all 0.6s
       transform scale(0.9)
  .nav-links
    display none
    border-bottom 1px solid var(--borderColor)
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 0.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top 0.75rem
  .blogger
    display none
    border-bottom 1px solid var(--borderColor)
    img
      width 60px
      height 60px
      border-radius 5px
      margin 0.75rem 1rem
    .blogger-info
      flex 1
      h3
        margin 0.95rem 0 0.7rem
        font-size 1.1rem
      .icons .iconfont
        font-size 1.2rem
        padding-right 0.6rem
        color #777
  .sidebar-slot
    margin-bottom: -.5rem;
    font-size: .85rem;
    &.sidebar-slot-top
      padding: 1.5rem 1.5rem 0;
    &.sidebar-slot-bottom
      padding: 0 1.5rem 1.5rem;
@media (max-width $MQMobile)
  .sidebar
    .blogger
      display flex
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
