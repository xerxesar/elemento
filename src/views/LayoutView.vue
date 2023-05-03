<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened && isSysadmin"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <SidebarComponent v-if="isSysadmin" class="sidebar-container" />
    <div
      :style="isSysadmin ? '' : 'margin-left:0px;margin-right:0px;'"
      class="main-container"
    >
      <NavbarComponent />
      <section class="app-main">
        <!-- <transition name="fade-transform" mode="out-in"> -->
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
        <!-- </transition> -->
      </section>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/layout/NavbarComponent";
import SidebarComponent from "@/components/layout/sidebar/SidebarComponent";
import ResizeMixin from "@/mixins/ResizeHandler";
import store from "@/store";

export default {
  name: "LayoutView",
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  created() {
    // if (!this.isLoginPage()) {
    //   this.$store.dispatch('RefreshTokens').then(() => {
    //     // this.$router.push({ path: this.redirect || '/dashboard' })
    //   }).catch(() => {
    //     this.error = ''
    //     // this.loading = false
    //   })
    // }
  },
  mixins: [ResizeMixin],
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.fullPath;
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
    isSysadmin() {
      return store.getters.role === "admin";
    },
  },
  methods: {
    isLoginPage() {
      return this.$route.name === "Login";
    },
    handleClickOutside() {
      this.$store.dispatch("closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
