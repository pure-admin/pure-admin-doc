<template>
  <div class="footer">
    <!-- <router-link to="/pages/support/#支持" class="sponsor">支持这个开源项目</router-link> -->
    <div class="icons" v-if="social && social.icons">
      <a :href="item.link" :title="item.title" :class="['iconfont', item.iconClass]" v-for="(item, index) in social.icons"
        :key="index" target="_blank"></a>
    </div>
    <div style="display: flex;justify-content: center;margin-bottom: 6px;">
      <div title="GitHub stars" class="no-zoom">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72" height="20">
          <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
          </linearGradient>
          <clipPath id="r">
            <rect width="72" height="20" rx="3" fill="#fff" />
          </clipPath>
          <g clip-path="url(#r)">
            <rect width="37" height="20" fill="#555" />
            <rect x="37" width="35" height="20" fill="#426feb" />
            <rect width="72" height="20" fill="url(#s)" />
          </g>
          <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision" font-size="110"><a target="_blank"
              xlink:href="https://github.com/pure-admin/vue-pure-admin">
              <rect width="37" x="0" height="20" fill="rgba(0,0,0,0)" /><text aria-hidden="true" x="195" y="150"
                fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="270">stars</text><text x="195" y="140"
                transform="scale(.1)" fill="#fff" textLength="270">stars</text>
            </a><a target="_blank" xlink:href="https://github.com/pure-admin/vue-pure-admin/stargazers">
              <rect width="35" x="37" height="20" fill="rgba(0,0,0,0)" /><text aria-hidden="true" x="535" y="150"
                fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="250">{{ stars }}</text><text x="535"
                y="140" transform="scale(.1)" fill="#fff" textLength="250">{{ stars }}</text>
            </a></g>
        </svg>
      </div>
      <div title="GitHub forks" class="no-zoom" style="margin-left: 6px">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68" height="20">
          <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
          </linearGradient>
          <clipPath id="r">
            <rect width="68" height="20" rx="3" fill="#fff" />
          </clipPath>
          <g clip-path="url(#r)">
            <rect width="37" height="20" fill="#555" />
            <rect x="37" width="31" height="20" fill="#426feb" />
            <rect width="68" height="20" fill="url(#s)" />
          </g>
          <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision" font-size="110"><a target="_blank"
              xlink:href="https://github.com/pure-admin/vue-pure-admin/fork">
              <rect width="37" x="0" height="20" fill="rgba(0,0,0,0)" /><text aria-hidden="true" x="195" y="150"
                fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="270">forks</text><text x="195" y="140"
                transform="scale(.1)" fill="#fff" textLength="270">forks</text>
            </a><a target="_blank" xlink:href="https://github.com/pure-admin/vue-pure-admin/network">
              <rect width="31" x="37" height="20" fill="rgba(0,0,0,0)" /><text aria-hidden="true" x="515" y="150"
                fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="210">{{ forks }}</text><text x="515"
                y="140" transform="scale(.1)" fill="#fff" textLength="210">{{ forks }}</text>
            </a></g>
        </svg>
      </div>
    </div>
    <div>
      <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
      Theme by
      <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" title="本站主题">Vdoing</a>
      <template v-if="footer">
        | Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
        <!-- <span v-html="footer.copyrightInfo"></span> -->
        <a href="https://github.com/pure-admin/vue-pure-admin" target="_blank" title="pure-admin">
          pure-admin | MIT License
        </a>
      </template>
    </div>
  </div>
</template>

<script>
// import { fetch } from 'whatwg-fetch'
export default {
  data() {
    return {
      stars: '16.6k',
      forks: '3.1k',
    }
  },
  computed: {
    social() {
      return this.$themeConfig.social
    },
    footer() {
      return this.$themeConfig.footer
    },
  },
  // beforeMount() {
  //   fetch('https://api.github.com/repos/pure-admin/vue-pure-admin', {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => {
  //     return response.json()
  //   }).then((data) => {
  //     const { stargazers_count, forks_count } = data
  //     this.stars = stargazers_count
  //     this.forks = forks_count
  //   }).catch(function (error) {
  //     console.log(error)
  //   })
  // }
}
</script>

<style lang="stylus">
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  margin-top -3.5rem
  text-align center
  color #666
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  .sponsor 
    padding: 8px 20px
    display: inline-block
    color: #426feb
    border-radius: 30px
    box-sizing: border-box
    border: 1px solid #426feb
    margin-bottom 16px
  .icons
    margin-bottom 16px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color $accentColor
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem
</style>
