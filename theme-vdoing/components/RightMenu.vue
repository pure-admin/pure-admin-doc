<template>
  <div class="right-menu-wrapper">
    <div class="right-menu-margin">
      <section v-if="!isService" id="special-sponsor">
        <a class="pure-video" href="https://pure-admin.cn/pages/service/#max-js-版本">
          <span>
            Max-Js 版本
            <svg style="vertical-align: middle;margin-bottom: 3px;" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                d="M682.7 147H341.3C153.6 147 0 300.7 0 488.5S153.6 830 341.3 830h341.3c187.7 0 341.3-153.7 341.3-341.5C1024 300.7 870.4 147 682.7 147z"
                fill="#E85352" p-id="1495"></path>
              <path
                d="M747.1 453h-49.5v252.2h-33.9V453h-70.4v55.2c-2.6 81.4-20.8 147.1-54.8 194.4l-23.4-26.3c28.7-39.4 41.7-97.2 44.3-168.1V305.9c57.4 0 106.9-13.1 153.8-31.5l20.9 31.5c-41.7 15.8-86.1 26.3-138.2 28.9v86.7h151.3V453z"
                fill="#FFFFFF" p-id="1496"></path>
              <path d="M468.1 563.3l28.7-7.9c15.6 31.5 26.1 57.8 33.9 84L502 650.1c-7.8-28.9-20.8-60.5-33.9-86.8z"
                fill="#FFFFFF" p-id="1497"></path>
              <path
                d="M449.9 668.4c0 26.3-13 39.4-41.7 39.4h-26.1l-5.2-34.1c7.8 2.6 15.6 2.6 20.9 2.6 13 0 18.3-5.3 18.3-15.8v-126H330V503h86v-52.6h-93.9v-31.5h54.8c-7.8-18.4-15.6-36.8-26.1-52.5l31.3-10.5c7.8 18.4 18.3 39.4 26.1 63h52.2c10.4-21 18.3-42 23.5-65.7l31.3 10.5c-7.8 21-15.7 39.4-23.5 55.2h52.2v31.5h-91.3V503h80.8v31.5H450v133.9z"
                fill="#FFFFFF" p-id="1498"></path>
              <path
                d="M343 692.1l-28.7-18.4c20.9-34.2 39.1-71 49.6-113l31.3 5.2c-13.1 47.4-28.8 89.4-52.2 126.2zM327.3 311.2H416c-7.9-15.8-13-28.9-20.9-42l33.9-5.3c7.8 13.1 13 28.9 20.8 47.3h88.7v31.5H327.3v-31.5z"
                fill="#FFFFFF" p-id="1499">
              </path>
            </svg>
          </span>
        </a>
        <a class="pure-video" style="margin-top: 10px;" href="https://pure-admin.cn/pages/service/#max-ts-版本">
          <span>
            Max-Ts 版本
            <svg style="vertical-align: middle;margin-bottom: 3px;" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                d="M682.7 147H341.3C153.6 147 0 300.7 0 488.5S153.6 830 341.3 830h341.3c187.7 0 341.3-153.7 341.3-341.5C1024 300.7 870.4 147 682.7 147z"
                fill="#E85352" p-id="1495"></path>
              <path
                d="M747.1 453h-49.5v252.2h-33.9V453h-70.4v55.2c-2.6 81.4-20.8 147.1-54.8 194.4l-23.4-26.3c28.7-39.4 41.7-97.2 44.3-168.1V305.9c57.4 0 106.9-13.1 153.8-31.5l20.9 31.5c-41.7 15.8-86.1 26.3-138.2 28.9v86.7h151.3V453z"
                fill="#FFFFFF" p-id="1496"></path>
              <path d="M468.1 563.3l28.7-7.9c15.6 31.5 26.1 57.8 33.9 84L502 650.1c-7.8-28.9-20.8-60.5-33.9-86.8z"
                fill="#FFFFFF" p-id="1497"></path>
              <path
                d="M449.9 668.4c0 26.3-13 39.4-41.7 39.4h-26.1l-5.2-34.1c7.8 2.6 15.6 2.6 20.9 2.6 13 0 18.3-5.3 18.3-15.8v-126H330V503h86v-52.6h-93.9v-31.5h54.8c-7.8-18.4-15.6-36.8-26.1-52.5l31.3-10.5c7.8 18.4 18.3 39.4 26.1 63h52.2c10.4-21 18.3-42 23.5-65.7l31.3 10.5c-7.8 21-15.7 39.4-23.5 55.2h52.2v31.5h-91.3V503h80.8v31.5H450v133.9z"
                fill="#FFFFFF" p-id="1498"></path>
              <path
                d="M343 692.1l-28.7-18.4c20.9-34.2 39.1-71 49.6-113l31.3 5.2c-13.1 47.4-28.8 89.4-52.2 126.2zM327.3 311.2H416c-7.9-15.8-13-28.9-20.9-42l33.9-5.3c7.8 13.1 13 28.9 20.8 47.3h88.7v31.5H327.3v-31.5z"
                fill="#FFFFFF" p-id="1499">
              </path>
            </svg>
          </span>
        </a>
        <!-- <div id="special-sponsor-container">
          <a class="logo" href="https://ai-tools.cn/resume/start" target="_blank" rel="sponsored noopener">
            <img src="https://pure-admin.cn/img/sponsors/aitools.svg" alt="aitools">
          </a>
        </div> -->
      </section>
      <div class="right-menu-title">目录</div>
      <div class="right-menu-content">
        <div :class="[
          'right-menu-item',
          'level' + item.level,
          { active: item.slug === hashText }
        ]" v-for="(item, i) in headers" :key="i" :style="dynamicStyles">
          <a :href="'#' + item.slug" :style="{
            fontSize: isService ? '16px' : '',
            marginBottom: isService ? '14px' : ''
          }">
            <span>{{ item.title }}</span>
            <svg v-if="getTitle(item.title)" style="vertical-align: middle;margin-bottom: 3px;" viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M682.7 147H341.3C153.6 147 0 300.7 0 488.5S153.6 830 341.3 830h341.3c187.7 0 341.3-153.7 341.3-341.5C1024 300.7 870.4 147 682.7 147z"
                fill="#E85352" p-id="1495"></path>
              <path
                d="M747.1 453h-49.5v252.2h-33.9V453h-70.4v55.2c-2.6 81.4-20.8 147.1-54.8 194.4l-23.4-26.3c28.7-39.4 41.7-97.2 44.3-168.1V305.9c57.4 0 106.9-13.1 153.8-31.5l20.9 31.5c-41.7 15.8-86.1 26.3-138.2 28.9v86.7h151.3V453z"
                fill="#FFFFFF" p-id="1496"></path>
              <path d="M468.1 563.3l28.7-7.9c15.6 31.5 26.1 57.8 33.9 84L502 650.1c-7.8-28.9-20.8-60.5-33.9-86.8z"
                fill="#FFFFFF" p-id="1497"></path>
              <path
                d="M449.9 668.4c0 26.3-13 39.4-41.7 39.4h-26.1l-5.2-34.1c7.8 2.6 15.6 2.6 20.9 2.6 13 0 18.3-5.3 18.3-15.8v-126H330V503h86v-52.6h-93.9v-31.5h54.8c-7.8-18.4-15.6-36.8-26.1-52.5l31.3-10.5c7.8 18.4 18.3 39.4 26.1 63h52.2c10.4-21 18.3-42 23.5-65.7l31.3 10.5c-7.8 21-15.7 39.4-23.5 55.2h52.2v31.5h-91.3V503h80.8v31.5H450v133.9z"
                fill="#FFFFFF" p-id="1498"></path>
              <path
                d="M343 692.1l-28.7-18.4c20.9-34.2 39.1-71 49.6-113l31.3 5.2c-13.1 47.4-28.8 89.4-52.2 126.2zM327.3 311.2H416c-7.9-15.8-13-28.9-20.9-42l33.9-5.3c7.8 13.1 13 28.9 20.8 47.3h88.7v31.5H327.3v-31.5z"
                fill="#FFFFFF" p-id="1499"></path>
            </svg>
          </a>
          <p v-if="/Js 版本|Max 版本|Max-Js 版本|Max-Ts 版本/.test(item.title) && $route.path === '/pages/service/'"
            :style="{ color: '#0055A4', fontSize: '12px', padding: 0, marginTop: /Max-Js 版本|Max-Ts 版本/.test(item.title) ? '-20px' : '-16px' }">
            永久使用、永久更新
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [],
      hashText: '',
      isService: false,
      beforeHeight: '14px'
    }
  },
  computed: {
    dynamicStyles() {
      return {
        '--before-height': this.beforeHeight
      }
    },
    getTitle() {
      return text => {
        if (/Max-Js 版本|Max-Ts 版本/.test(text)) {
          return true
        } else {
          return false
        }
      }
    }
  },
  mounted() {
    this.getService()
    this.getHeadersData()
    this.getHashText()
  },
  watch: {
    $route() {
      this.getService()
      this.headers = this.$page.headers
      this.getHashText()
    }
  },
  methods: {
    getService() {
      if (this.$page.title === "高级服务") {
        this.isService = true
        this.beforeHeight = '20px'
      } else {
        this.isService = false
        this.beforeHeight = '14px'
      }
    },
    getHeadersData() {
      this.headers = this.$page.headers
    },
    getHashText() {
      this.hashText = decodeURIComponent(window.location.hash.slice(1))
    }
  }
}
</script>

<style scoped>
#special-sponsor {
  /* padding-bottom: 12px; */
}

#special-sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#special-sponsor h3 {
  /* text-align: center; */
  font-size: 17px;
}

#special-sponsor .logo {
  display: flex;
  justify-content: center;
  padding: 0 10px;
}

.pure-video {
  display: inline-block;
  width: 200px;
  padding: 8px;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  transition: all 0.6s;
  background-color: rgba(66, 133, 244, 0.2);
  color: #1a5f7a;
  font-weight: bold;
  border: 1px solid rgba(66, 133, 244, 0.5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pure-video:hover {
  transform: scale(0.9);
}
</style>

<style lang='stylus'>
.theme-style-line
  .right-menu-wrapper
    .right-menu-margin
      border-left 1px solid var(--borderColor)
.right-menu-wrapper
  width $rightMenuWidth
  float right
  margin-right -($rightMenuWidth + 55px)
  // margin-top -($navbarHeight *2 + 1.5rem)
  position sticky
  top 0
  font-size 0.8rem
  .right-menu-margin
    margin-top: ($navbarHeight + 1rem)
    border-radius 3px
    overflow hidden
  .right-menu-title
    padding 10px 15px 0 15px
    background var(--mainBg)
    font-size 1.3rem
    &:after
      content ''
      display block
      width 100%
      height 1px
      background var(--borderColor)
      margin-top 10px
  .right-menu-content
    max-height 80vh
    position relative
    overflow hidden
    background var(--mainBg)
    padding 4px 3px 4px 0
    &::-webkit-scrollbar
      width 3px
      height 3px
    &::-webkit-scrollbar-track-piece
      background none
    &::-webkit-scrollbar-thumb:vertical
      background-color hsla(0, 0%, 49%, 0.3)
    &:hover
      overflow-y auto
      padding-right 0
    .right-menu-item
      padding 4px 15px
      // border-left 1px solid var(--borderColor)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      position relative
      &.level2
        font-size 0.8rem
      &.level3
        padding-left 27px
      &.level4
        padding-left 37px
      &.level5
        padding-left 47px
      &.level6
        padding-left 57px
      &.active
        &:before
          content ''
          position absolute
          top 5px
          left 0
          width 3px
          height var(--before-height, 14px)
          background $accentColor
          border-radius 0 4px 4px 0
        a
          color $accentColor
        span 
          opacity 1
      a
        color var(--textColor)
        display inline-block
        width 100%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      span
        opacity 0.75
        &:hover
          opacity 1
    &:hover
      color $accentColor
.have-body-img
  .right-menu-wrapper
    .right-menu-margin
      // padding 0.3rem 0
      // background var(--sidebarBg)
      // border-radius 5px
      .right-menu-item
        // border-color transparent
        // &.active
        // border-left 0.2rem solid $accentColor
        // &:hover
        // border-left 0.2rem solid $accentColor
</style>
