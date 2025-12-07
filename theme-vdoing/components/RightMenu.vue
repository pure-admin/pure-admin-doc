<template>
  <div class="right-menu-wrapper">
    <div class="right-menu-margin">
      <section v-if="!isService" id="special-sponsor">
        <!-- <a class="pure-video" href="https://pure-admin.cn/pages/service/#最新活动">
          <span>
            国庆限时优惠活动
            <svg style="vertical-align: middle;margin-bottom: 3px;" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M428.6976 107.3152c-6.5024 72.192-36.352 207.2576-160.256 337.408 3.6864-48.0256-7.1168-83.7632-19.0464-107.6736-6.6048-13.1584-26.0608-10.5984-28.8768 3.84-5.7344 29.44-20.5824 75.0592-57.6 137.7792-71.6288 121.3952-62.5664 459.8784 340.736 459.8784s430.4384-352.8192 373.1456-496.0256c-37.376-93.44-93.952-152.5248-128.8192-182.3232-11.4176-9.7792-29.1328-1.9456-29.5936 13.056-0.9216 30.464-7.3216 73.3696-33.0752 102.144-0.6656-52.7872-38.144-208.384-202.4448-296.8576-23.296-12.544-51.7632 2.4576-54.1696 28.7744z"
                fill="#FF5D50" p-id="3479"></path>
              <path
                d="M702.2592 678.4c-4.1984-45.056-60.672-166.5536-212.6336-246.4256-10.5984-5.5808-23.0912 3.1232-21.504 15.0016 6.2464 46.848 12.9536 140.4928-24.064 184.7296 4.0448-40.3968-18.1248-73.8304-36.6592-94.3104-8.3968-9.216-23.552-4.6592-25.4976 7.68-3.5328 22.3232-12.8512 56.2688-36.5568 97.9456-42.0864 74.0352-86.9888 188.672 124.5696 294.656 10.9568 0.5632 22.1696 0.8704 33.7408 0.8704 11.2128 0 22.0672-0.3072 32.7168-0.8704 158.2592-59.4944 173.4656-177.9712 165.888-259.2768z"
                fill="#FFDF99" p-id="3480"></path>
            </svg>
          </span>
        </a> -->
        <!-- <a class="pure-video" href="https://pure-admin.cn/pages/service/#max-js-版本">
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
        </a> -->
        <!-- <a class="pure-video" style="margin-top: 10px;" href="https://pure-admin.cn/pages/service/#max-ts-版本">
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
        </a> -->
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
            <svg v-if="getTitles(item.title)" style="vertical-align: middle;margin-bottom: 3px;" t="1719296352907"
              class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32"
              height="28">
              <path
                d="M146.285714 73.142857a73.142857 73.142857 0 0 0-73.142857 73.142857v731.428572a73.142857 73.142857 0 0 0 73.142857 73.142857h1755.428572a73.142857 73.142857 0 0 0 73.142857-73.142857V146.285714a73.142857 73.142857 0 0 0-73.142857-73.142857H146.285714z m0-73.142857h1755.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v731.428572a146.285714 146.285714 0 0 1-146.285714 146.285714H146.285714a146.285714 146.285714 0 0 1-146.285714-146.285714V146.285714a146.285714 146.285714 0 0 1 146.285714-146.285714z m176.128 456.850286v433.664h75.629715V345.014857c29.769143-51.492571 53.906286-106.203429 73.216-164.132571l-69.997715-32.182857A878.08 878.08 0 0 1 219.428571 472.137143l22.528 75.629714c28.964571-28.964571 55.515429-59.538286 80.457143-90.916571zM444.708571 337.773714V411.794286h155.282286c-17.700571 190.683429-78.848 333.092571-181.833143 428.032l56.32 49.078857c114.249143-106.203429 180.224-265.508571 198.729143-477.110857h33.792v391.021714c0 49.883429 23.332571 74.825143 71.606857 74.825143h101.376c22.528-1.609143 41.033143-9.654857 53.906286-24.941714 11.264-15.286857 20.918857-66.779429 27.355429-153.673143l-68.388572-21.723429c-2.413714 68.388571-6.436571 107.812571-12.068571 117.467429-6.436571 8.045714-12.873143 12.873143-19.309715 12.873143h-62.756571c-12.873143 0-18.505143-6.436571-18.505143-18.505143V411.794286h160.914286V337.773714H677.229714c0.804571-12.873143 1.609143-26.550857 1.609143-39.424V150.308571H605.622857v148.041143c0 12.873143-0.804571 25.746286-1.609143 39.424H444.708571z m337.92-177.810285l-49.883428 47.469714c53.101714 38.619429 94.939429 75.629714 124.708571 109.421714l52.297143-52.297143c-34.596571-35.401143-77.238857-69.997714-127.122286-104.594285z m257.462858 35.401142v64.365715h321.024v35.401143h-252.635429v240.566857h252.635429v38.619428c-91.721143 1.609143-193.097143 2.413714-304.128 4.022857l9.654857 66.779429c271.945143-7.241143 470.674286-15.286857 595.382857-24.137143 15.286857 16.091429 28.964571 32.182857 41.837714 48.274286l56.32-38.619429c-24.137143-27.355429-57.124571-59.538286-98.962286-94.939428h28.16V295.131429h-252.635428v-35.401143h321.024v-64.365715h-321.024V146.285714h-75.629714v49.078857H1040.091429z m567.222857 371.712c-50.688 1.609143-107.812571 4.022857-170.569143 5.632v-37.010285h164.132571l-16.091428 10.459428 22.528 20.918857z m9.654857-87.698285h-180.224v-39.424h180.224v39.424z m-255.853714 0h-180.224v-39.424h180.224v39.424z m-180.224-88.502857v-39.424h180.224v39.424h-180.224z m255.853714-39.424h180.224v39.424h-180.224v-39.424zM1107.675429 669.257143a474.185143 474.185143 0 0 1-74.825143 152.868571l62.756571 40.228572c34.596571-50.688 61.147429-110.226286 80.457143-179.419429l-68.388571-13.677714z m406.308571 208.384c28.964571 0 49.883429-5.632 63.561143-16.896 14.482286-12.068571 24.941714-48.274286 30.573714-109.421714l-69.193143-22.528c-2.413714 37.814857-7.241143 60.342857-13.677714 68.388571-4.827429 6.436571-13.677714 10.459429-24.941714 10.459429h-177.810286c-19.309714 0-28.16-8.045714-28.16-23.332572V666.038857h-74.020571v134.363429c0 51.492571 26.550857 77.238857 79.652571 77.238857h214.016z m-106.203429-231.716572l-57.124571 35.401143c38.619429 36.205714 69.193143 69.193143 91.721143 98.962286l57.124571-39.424c-21.723429-27.355429-52.297143-58.733714-91.721143-94.939429z m241.371429 4.827429l-57.929143 36.205714c49.883429 58.733714 89.307429 111.835429 118.272 160.109715l60.342857-40.228572c-28.16-45.056-68.388571-97.353143-120.685714-156.086857z"
                fill="#d81e06" p-id="3649"></path>
            </svg>
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
    },
    getTitles() {
      return text => {
        return text === 'Js 版本' || text === 'Max 版本'
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
  padding: 3px;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  transition: all 0.6s;
  font-weight: bold;
  background-color: rgba(150, 180, 230, 0.1);
  color: #2c6d8c;
  border: 1px solid rgba(150, 180, 230, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
