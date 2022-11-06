<template>
  <header class="navbar blur">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <el-tooltip effect="dark" content="点击返回主页">
      <router-link :to="$localePath" class="home-link">
        <img class="logo" v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle" />
        <span ref="siteName" class="site-name" v-if="$siteTitle" :class="{ 'can-hide': $site.themeConfig.logo }">{{
            $siteTitle
        }}</span>
      </router-link>
    </el-tooltip>

    <div class="links" :style="linksWrapMaxWidth ? {
      'max-width': linksWrapMaxWidth + 'px'
    } : {}">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  transition transform 0.3s
  background-image radial-gradient(transparent 1px, var(--blurBg) 1px)
  background-size 4px 4px
  backdrop-filter saturate(50%) blur(4px)
  -webkit-backdrop-filter saturate(50%) blur(4px)
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.8rem
    min-width $navbarHeight - 1.8rem
    vertical-align top
  .site-name
    font-size 1rem
    font-weight 600
    color var(--textColor)
    position relative
  .links
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top 1.2px
    display flex
    padding 0.5rem
    background var(--blurBg)
    box-shadow -15px 0 5px 0px var(--blurBg)
    .search-box
      flex 0 0 auto
      vertical-align top
.hide-navbar
  .navbar
    transform translateY(-100%)
// 959
@media (max-width $MQNarrow)
  .navbar
    .site-name
      display none
@media (max-width $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
