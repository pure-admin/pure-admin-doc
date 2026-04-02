<template>
  <div v-if="visible" class="announcement-bar">
    <a class="announcement-link" href="https://github.com/pure-admin/vue-pure-admin/issues/1279" target="_blank"
      rel="noopener noreferrer">点击查看 7.0.0 版本更新预告 <span class="arrow">→</span></a>
    <button class="announcement-close" @click="close" aria-label="关闭">&times;</button>
  </div>
</template>

<script>
const ANNOUNCEMENT_HEIGHT = 36

export default {
  name: 'Announcement',
  data() {
    return {
      visible: true,
    }
  },
  mounted() {
    this.applyOffset()
  },
  methods: {
    applyOffset() {
      document.documentElement.style.setProperty('--announcement-height', ANNOUNCEMENT_HEIGHT + 'px')
    },
    removeOffset() {
      document.documentElement.style.setProperty('--announcement-height', '0px')
    },
    close() {
      this.visible = false
      this.removeOffset()
    }
  }
}
</script>

<style lang="stylus" scoped>
.announcement-bar
  position fixed
  top 0
  left 0
  right 0
  z-index 25
  display flex
  align-items center
  justify-content center
  height 36px
  padding 0 40px
  background var(--blurBg)
  border-bottom 1px solid var(--borderColor)
  font-size 13px
  letter-spacing 0.3px
  .announcement-link
    color $accentColor
    text-decoration none
    font-weight 600
    cursor pointer
    .arrow
      display inline-block
      transition transform 0.3s ease
    &:hover
      .arrow
        transform translateX(5px)
  .announcement-close
    position absolute
    right 16px
    top 50%
    transform translateY(-50%)
    background none
    border none
    color var(--textColor)
    opacity 0.4
    font-size 18px
    cursor pointer
    padding 0 4px
    line-height 1
    transition color 0.2s
    &:hover
      opacity 0.8
</style>
