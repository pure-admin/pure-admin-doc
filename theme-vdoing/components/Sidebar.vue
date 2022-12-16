<template>
  <aside class="sidebar">
    <div style="margin-left: 24px">
      <p style="color:#888;font-weight:400;font-size:14px">平台视频教程推荐</p>
      <div>
        <div class="pure-video"
          style="width:154px;background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;display: flex;align-items: center;">
          <a href="https://www.bilibili.com/video/BV1ag411J7Fh/" target="_blank" style="color: #ed5858">
            快速了解平台生态
          </a>
          <svg t="1668145036658" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20">
            <path
              d="M428.6976 107.3152c-6.5024 72.192-36.352 207.2576-160.256 337.408 3.6864-48.0256-7.1168-83.7632-19.0464-107.6736-6.6048-13.1584-26.0608-10.5984-28.8768 3.84-5.7344 29.44-20.5824 75.0592-57.6 137.7792-71.6288 121.3952-62.5664 459.8784 340.736 459.8784s430.4384-352.8192 373.1456-496.0256c-37.376-93.44-93.952-152.5248-128.8192-182.3232-11.4176-9.7792-29.1328-1.9456-29.5936 13.056-0.9216 30.464-7.3216 73.3696-33.0752 102.144-0.6656-52.7872-38.144-208.384-202.4448-296.8576-23.296-12.544-51.7632 2.4576-54.1696 28.7744z"
              fill="#FF5D50" p-id="3479"></path>
            <path
              d="M702.2592 678.4c-4.1984-45.056-60.672-166.5536-212.6336-246.4256-10.5984-5.5808-23.0912 3.1232-21.504 15.0016 6.2464 46.848 12.9536 140.4928-24.064 184.7296 4.0448-40.3968-18.1248-73.8304-36.6592-94.3104-8.3968-9.216-23.552-4.6592-25.4976 7.68-3.5328 22.3232-12.8512 56.2688-36.5568 97.9456-42.0864 74.0352-86.9888 188.672 124.5696 294.656 10.9568 0.5632 22.1696 0.8704 33.7408 0.8704 11.2128 0 22.0672-0.3072 32.7168-0.8704 158.2592-59.4944 173.4656-177.9712 165.888-259.2768z"
              fill="#FFDF99" p-id="3480"></path>
          </svg>
        </div>
        <a class="pure-video" href="https://www.bilibili.com/video/BV1kg411v7QT/"
          style="background: var(--videoBgColor);padding:8px;border-radius: 6px;margin-bottom: 4px;color: var(--videoTextColor)"
          target="_blank">平台快速开发教程</a>
        <a class="pure-video" href="https://www.bilibili.com/video/BV17g411T7rq/"
          style="background: var(--videoBgColor);padding:8px;border-radius: 6px;color: var(--videoTextColor)"
          target="_blank">前端工程师浅谈后台设计</a>
      </div>
    </div>
    <div class="blogger" v-if="blogger">
      <img :src="blogger.avatar" />
      <div class="blogger-info">
        <h3>{{ blogger.name }}</h3>

        <div class="icons" v-if="blogger.social">
          <a :href="item.link" :title="item.title" :class="['iconfont', item.iconClass]"
            v-for="(item, index) in blogger.social.icons" :key="index" target="_blank"></a>
        </div>
        <span v-else>{{ blogger.slogan }}</span>
      </div>
    </div>

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

  components: { SidebarLinks, NavLinks },

  props: ['items'],

  computed: {
    blogger() {
      return this.$themeConfig.blogger
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
