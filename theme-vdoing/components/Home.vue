<template>
  <div class="home-wrapper">
    <!-- banner块 s -->
    <div class="banner" :class="{ 'hide-banner': !showBanner }" :style="bannerBgStyle">
      <div class="banner-conent" :style="!homeData.features && !homeData.heroImage && `padding-top: 7rem`
        ">
        <header class="hero">
          <img v-if="homeData.heroImage" :src="$withBase(homeData.heroImage)" :alt="homeData.heroAlt" />
          <div style="display: flex; align-items: center; justify-content: center">
            <h1 v-if="homeData.heroText" id="main-title">
              {{ homeData.heroText }}
            </h1>
            <div title="当前版本" style="width: 80px;height: 20px;margin: 0;padding: 0;padding-left: 10px;padding-top: 5px;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="111" height="20"
                role="img">
                <title>release: {{ release }}</title>
                <linearGradient id="s" x2="0" y2="100%">
                  <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
                  <stop offset="1" stop-opacity=".1" />
                </linearGradient>
                <clipPath id="r">
                  <rect width="111" height="20" rx="3" fill="#fff" />
                </clipPath>
                <g clip-path="url(#r)">
                  <rect width="66" height="20" fill="#555" />
                  <rect x="66" width="45" height="20" fill="#426feb" />
                  <rect width="111" height="20" fill="url(#s)" />
                </g>
                <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
                  text-rendering="geometricPrecision" font-size="110">
                  <image x="5" y="3" width="14" height="14"
                    xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDBCM0UwIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QXBwVmV5b3I8L3RpdGxlPjxwYXRoIGQ9Ik0gMTIsMCBDIDE4LjYsMCAyNCw1LjQgMjQsMTIgMjQsMTguNiAxOC42LDI0IDEyLDI0IDUuNCwyNCAwLDE4LjYgMCwxMiAwLDUuNCA1LjQsMCAxMiwwIFogbSAyLjk0LDE0LjM0IEMgMTYuMjYsMTIuNjYgMTYuMDgsMTAuMjYgMTQuNCw5IDEyLjc4LDcuNzQgMTAuMzgsOC4wNCA5LDkuNzIgNy42OCwxMS40IDcuODYsMTMuOCA5LjU0LDE1LjA2IGMgMS42OCwxLjI2IDQuMDgsMC45NiA1LjQsLTAuNzIgeiBtIC02LjQyLDcuOCBjIDAuNzIsMC4zIDIuMjgsMC42IDMuMDYsMC42IGwgNS4yMiwtNy41NiBjIDEuNjgsLTIuNTIgMS4yNiwtNS45NCAtMS4wOCwtNy44IC0yLjEsLTEuNjggLTUuMDQsLTEuNjIgLTcuMTQsMCBsIC03LjI2LDUuNTggYyAwLjE4LDEuOTIgMC43MiwyLjg4IDAuNzIsMi45NCBsIDQuMTQsLTQuNSBjIC0wLjMsMS45OCAwLjQyLDQuMDIgMi4xLDUuMjggMS40NCwxLjE0IDMuMTgsMS40NCA0Ljg2LDEuMDggeiIvPjwvc3ZnPg==" />
                  <text aria-hidden="true" x="425" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)"
                    textLength="390">release</text><text x="425" y="140" transform="scale(.1)" fill="#fff"
                    textLength="390">release</text><text aria-hidden="true" x="875" y="150" fill="#010101"
                    fill-opacity=".3" transform="scale(.1)" textLength="350">{{ release }}</text><text x="875" y="140"
                    transform="scale(.1)" fill="#fff" textLength="350">{{ release }}</text>
                </g>
              </svg>
            </div>
          </div>
          <p v-if="homeData.tagline" class="description">
            {{ homeData.tagline }}
          </p>
          <!-- <p style="font-size:15px">
            <el-link style="color: #426feb" :underline="false" href="https://www.bilibili.com/video/BV1Xv4y1U7UN/"
              target="_blank">点我查看如何使用PWA访问文档</el-link>
          </p> -->
          <p class="action" v-if="homeData.actionText && homeData.actionLink">
            <NavLink class="action-button" :item="actionLink" />
            <PreView class="preview-button" :item="actionLink" />
          </p>
        </header>

        <!-- <section id="special-sponsor">
          <h3>赞助商</h3>
          <div id="special-sponsor-container">
            <a class="logo" href="https://ai-tools.cn/resume/start" target="_blank" rel="sponsored noopener">
              <img src="https://pure-admin.cn/img/sponsors/aitools.svg" alt="aitools">
            </a>
          </div>
        </section> -->

        <!-- PC端features块 s -->
        <div class="features" v-if="hasFeatures && !isMQMobile">
          <div class="feature" v-for="(feature, index) in homeData.features" :key="index">
            <router-link v-if="feature.link" :to="feature.link">
              <img class="feature-img" v-if="feature.imgUrl" :src="$withBase(feature.imgUrl)" :alt="feature.title" />
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </router-link>
            <a v-else href="javascript:;">
              <img class="feature-img" v-if="feature.imgUrl" :src="$withBase(feature.imgUrl)" :alt="feature.title" />
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </a>
          </div>
        </div>
        <!-- PC端features块 e -->
      </div>

      <!-- 移动端features块 s -->
      <!-- isMQMobile放到v-if上线后会报错 -->
      <div class="slide-banner" v-if="hasFeatures" v-show="isMQMobile">
        <div class="banner-wrapper">
          <div class="slide-banner-scroll" ref="slide">
            <div class="slide-banner-wrapper">
              <div class="slide-item" v-for="(feature, index) in homeData.features" :key="index">
                <router-link v-if="feature.link" :to="feature.link">
                  <img class="feature-img" v-if="feature.imgUrl" :src="$withBase(feature.imgUrl)" :alt="feature.title" />
                  <h2>{{ feature.title }}</h2>
                  <p>{{ feature.details }}</p>
                </router-link>
                <a v-else href="javascript:;">
                  <img class="feature-img" v-if="feature.imgUrl" :src="$withBase(feature.imgUrl)" :alt="feature.title" />
                  <h2>{{ feature.title }}</h2>
                  <p>{{ feature.details }}</p>
                </a>
              </div>
            </div>
          </div>
          <div class="docs-wrapper">
            <span class="doc" v-for="(item, index) in homeData.features.length" :key="index"
              :class="{ active: currentPageIndex === index }"></span>
          </div>
        </div>
      </div>
      <!-- 移动端features块 e -->
    </div>
    <!-- banner块 e -->

    <MainLayout>
      <template #mainLeft>
        <!-- 简约版文章列表 -->
        <UpdateArticle class="card-box" v-if="homeData.postList === 'simple'"
          :length="homeData.simplePostListLength || 10" :moreArticle="$themeConfig.updateBar && $themeConfig.updateBar.moreArticle
            " />

        <!-- 详情版文章列表 -->
        <template v-else-if="!homeData.postList || homeData.postList === 'detailed'">
          <PostList :currentPage="currentPage" :perPage="perPage" />
          <Pagination :total="total" :perPage="perPage" :currentPage="currentPage" @getCurrentPage="handlePagination"
            v-show="Math.ceil(total / perPage) > 1" />
        </template>

        <Content class="theme-vdoing-content custom card-box" />
      </template>

      <template v-if="!homeData.hideRightBar" #mainRight>
        <BloggerBar v-if="$themeConfig.blogger" />
        <CategoriesBar v-if="$themeConfig.category !== false &&
          $categoriesAndTags.categories.length
          " :categoriesData="$categoriesAndTags.categories" :length="10" />
        <TagsBar v-if="$themeConfig.tag !== false && $categoriesAndTags.tags.length" :tagsData="$categoriesAndTags.tags"
          :length="30" />
        <div class="custom-html-box card-box" v-if="homeSidebarB" v-html="homeSidebarB"></div>
      </template>
    </MainLayout>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink"
import PreView from "@theme/components/PreView"
import BScroll from "@better-scroll/core"
import Slide from "@better-scroll/slide"
import MainLayout from "@theme/components/MainLayout"
import PostList from "@theme/components/PostList"
import UpdateArticle from "@theme/components/UpdateArticle"
import Pagination from "@theme/components/Pagination"
import BloggerBar from "@theme/components/BloggerBar"
import CategoriesBar from "@theme/components/CategoriesBar"
import TagsBar from "@theme/components/TagsBar"
// import { fetch } from 'whatwg-fetch'

const MOBILE_DESKTOP_BREAKPOINT = 720 // refer to config.styl

BScroll.use(Slide)

export default {
  data() {
    return {
      release: "5.9.0",
      isMQMobile: false,

      slide: null,
      currentPageIndex: 0,
      playTimer: 0,
      mark: 0,

      total: 0, // 总长
      perPage: 10, // 每页长
      currentPage: 1, // 当前页
      addressHerf: 'https://pure-admin.cn'
    }
  },
  computed: {
    homeData() {
      return {
        ...this.$page.frontmatter
      }
    },
    hasFeatures() {
      return !!(this.homeData.features && this.homeData.features.length)
    },
    homeSidebarB() {
      const { htmlModules } = this.$themeConfig
      return htmlModules ? htmlModules.homeSidebarB : ''
    },
    showBanner() { // 当分页不在第一页时隐藏banner栏
      return this.$route.query.p
        && this.$route.query.p != 1
        && (!this.homeData.postList || this.homeData.postList === 'detailed')
        ? false : true
    },
    bannerBgStyle() {
      let bannerBg = this.homeData.bannerBg
      if (!bannerBg || bannerBg === 'auto') { // 默认
        if (this.$themeConfig.bodyBgImg) { // 当有bodyBgImg时，不显示背景
          return ''
        } else { // 网格纹背景
          return 'background: rgb(40,40,45) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVFhH7c6xCQAgDAVRR9A6E4hLu4uLiWJ7tSnuQcIvr2TRYsw3/zOGGEOMIcYQY4gxxBhiDDGGGEOMIcYQY4gxxBhiDLkx52W4Gn1tuslCtHJvL54AAAAASUVORK5CYII=)'
        }
      } else if (bannerBg === 'none') { // 无背景
        if (this.$themeConfig.bodyBgImg) {
          return ''
        } else {
          return 'background: var(--mainBg);color: var(--textColor)'
        }
      } else if (bannerBg.indexOf('background:') > -1) { // 自定义背景样式
        return bannerBg
      } else if (bannerBg.indexOf('.') > -1) { // 大图
        return `background: url(${this.$withBase(bannerBg)}) center center / cover no-repeat`
      }

    },
    actionLink() {
      return {
        link: this.homeData.actionLink,
        text: this.homeData.actionText
      }
    }
  },
  components: { NavLink, PreView, MainLayout, PostList, UpdateArticle, BloggerBar, CategoriesBar, TagsBar, Pagination },
  created() {
    this.total = this.$sortPosts.length
  },
  beforeMount() {
    this.isMQMobile =
      window.innerWidth < MOBILE_DESKTOP_BREAKPOINT ? true : false // vupress在打包时不能在beforeCreate(),created()访问浏览器api（如window）

    this.addressHerf = window.location.href

    // fetch('https://api.github.com/repos/pure-admin/vue-pure-admin/releases/latest', {
    //   method: 'get',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then((response) => {
    //   return response.json()
    // }).then((data) => {
    //   const { tag_name } = data
    //   this.release = tag_name
    // }).catch(function (error) {
    //   console.log(error)
    // })
  },
  mounted() {
    if (this.$route.query.p) {
      this.currentPage = Number(this.$route.query.p)
    }

    if (this.hasFeatures && this.isMQMobile && (!this.$route.query.p || this.$route.query.p == 1)) {
      this.init()
    }

    if (this.hasFeatures) {
      window.addEventListener('resize', () => {
        this.isMQMobile = window.innerWidth < MOBILE_DESKTOP_BREAKPOINT ? true : false
        if (this.isMQMobile && !this.slide && !this.mark) {
          this.mark++
          setTimeout(() => {
            this.init()
          }, 60)
        }
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.playTimer)
    this.slide && this.slide.destroy()
  },
  watch: {
    '$route.query.p'() {
      if (!this.$route.query.p) {
        this.currentPage = 1
      } else {
        this.currentPage = Number(this.$route.query.p)
      }

      if (this.hasFeatures && this.currentPage === 1 && this.isMQMobile) {
        setTimeout(() => {
          this.slide && this.slide.destroy()
          this.init()
        }, 0)
      }
    }
  },
  methods: {
    init() {
      clearTimeout(this.playTimer)
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true, // x轴滚动
        scrollY: false, // y轴滚动
        slide: {
          loop: true,
          threshold: 100
        },
        useTransition: true, // 使用css3 transition动画
        momentum: false,
        bounce: false, // 回弹
        stopPropagation: false, // 是否阻止事件冒泡
        probeType: 2,
        preventDefault: false
      })

      // user touches the slide area
      this.slide.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer)
      })
      // user touched the slide done
      this.slide.on('scrollEnd', () => {
        this.autoGoNext()
      })
      this.slide.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX
      })
      this.autoGoNext()
    },
    autoGoNext() {
      clearTimeout(this.playTimer)
      this.playTimer = setTimeout(() => {
        this.slide.next()
      }, 4000)
    },
    handlePagination(i) { // 分页
      this.currentPage = i
    },
    getScrollTop() {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    },
  },

}
</script>

<style scoped>
#special-sponsor {
  border-top: 1px solid rgba(60, 60, 60, .12);
  border-bottom: 1px solid rgba(60, 60, 60, .12);
  padding-bottom: 12px;
}

#special-sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#special-sponsor h3 {
  text-align: center;
  font-size: 18px;
}

#special-sponsor .logo {
  display: flex;
  justify-content: center;
  padding: 0 10px;
}
</style>

<style lang="stylus" scoped>
.home-wrapper
  height calc(100vh - 58px)
  .banner
    width 100%
    min-height 450px
    margin-top $navbarHeight
    color $bannerTextColor
    position relative
    overflow hidden
    .banner-conent
      max-width $homePageWidth
      margin 0px auto
      position relative
      z-index 1
      overflow hidden
      .hero
        text-align center
        margin-top 3rem
        img
          max-width 100%
          max-height 160px
          display block
          margin 2rem auto 1.5rem
        h1
          margin 0
          font-size 2.8rem
        .description, .action
          margin 1.5rem auto
        .description
          max-width 40rem
          font-size 1.1rem
          line-height 1.3
          opacity 0.9
        .action-button
          display inline-block
          font-size 1.2rem
          background-color $accentColor
          padding 0.8rem 1.6rem
          border-radius 4px
          transition background-color 150ms ease-in-out,border-color 150ms ease-in-out,color 150ms ease-in-out
          box-sizing border-box
          border-bottom 1px solid darken($accentColor, 10%)
          color #fff
          &:hover
            background-color lighten($accentColor, 10%)
        .preview-button
          display inline-block
          font-size 1.2rem
          padding 0.68rem 1.6rem
          border-radius 4px
          margin-left 0.6rem
          transition background-color 150ms ease-in-out,border-color 150ms ease-in-out,color 150ms ease-in-out
          box-sizing border-box
          border 2px solid darken($accentColor, 10%)
          color var(--previewColor)
          &:hover
            color #fff
            background-color $accentColor
          &:hover /deep/.icon.outbound
            color #fff !important
      // pc端features
      .features
        padding 1.6rem 0
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content space-between
      .feature
        flex-grow 1
        flex-basis 30%
        max-width 30%
        text-align center
        a
          // color lighten($bannerTextColor,10%)
          color inherit
          .feature-img
            width 10rem
            height 10rem
            animation heart 1.2s ease-in-out 0s infinite alternate
            animation-play-state paused
          h2
            font-weight 500
            font-size 1.2rem
            border-bottom none
            padding-bottom 0
          p
            opacity 0.8
            padding 0 0.8rem
            font-size 0.94rem
      .feature:hover
        .feature-img
          animation-play-state running
        h2, p
          color $accentColor
    // 移动端滑动图标
    .slide-banner
      .banner-wrapper
        position relative
      .slide-banner-scroll
        min-height 1px
        overflow hidden
      .slide-banner-wrapper
        height 300px
        .slide-item
          display inline-block
          height 300px
          width 100%
          text-align center
          a
            // color lighten($bannerTextColor,10%)
            color inherit
            .feature-img
              width 10rem
              height 10rem
            h2
              font-size 1.1rem
              font-weight 500
              border-bottom none
              padding-bottom 0
            p
              opacity 0.8
              padding 0 0.8rem
      .docs-wrapper
        position absolute
        bottom 25px
        left 50%
        transform translateX(-50%)
        .doc
          display inline-block
          margin 0 4px
          width 8px
          height 8px
          border-radius 50%
          background var(--textColor)
          opacity 0.9
          &.active
            opacity 0.5
  // 分页不在第一页时，隐藏banner栏
  .banner.hide-banner
    display none
    & + .main-wrapper
      margin-top: ($navbarHeight + 0.9rem)
  .main-wrapper
    margin-top 2rem
    .main-left
      .card-box
        margin-bottom 0.9rem
      .pagination
        margin-bottom 4rem
      .theme-vdoing-content
        padding 0 2rem
        overflow hidden
        &>:first-child
          padding-top 2rem
        &>:last-child
          padding-bottom 2rem
    .main-right
      .custom-html-box
        padding 0
        overflow hidden
@keyframes heart
  from
    transform translate(0, 0)
  to
    transform translate(0, 8px)
// 1025px以下
@media (max-width 1025px)
  .home-wrapper
    .banner
      .banner-conent
        .hero
          h1
            font-size 2.5rem
          .description
            font-size 1rem
        .feature
          a
            h2
              font-size 1.1rem
            .feature-img
              width 9rem
              height 9rem
// 719px以下
@media (max-width $MQMobile)
  .home-wrapper
    .banner
      .banner-conent
        .features
          display none !important
// 419px以下
@media (max-width $MQMobileNarrow)
  .home-wrapper
    .banner-conent
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 2rem
        h1, .description, .action
          margin 1.2rem auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
      .feature
        h2
          font-size 1.25rem
</style>
