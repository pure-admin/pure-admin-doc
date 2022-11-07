<template>
  <a
    :href="link"
    @focusout="focusoutAction"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    在线预览
    <OutboundLink />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from "../util";

export default {
  props: {
    item: {
      required: true,
    },
  },

  computed: {
    link() {
      return "https://yiming_chang.gitee.io/vue-pure-admin/#/login";
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.link
        );
      }
      return this.link === "/";
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    focusoutAction() {
      this.$emit("focusout");
    },
  },
};
</script>

<style lang="stylus" scoped>
/deep/.icon.outbound
  color: var(--previewColor) !important
</style>
