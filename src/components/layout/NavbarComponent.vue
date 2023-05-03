<template>
  <div>
    <div v-if="device !== 'mobile'" class="navbar">
      <HamburgerComponent
        v-if="isSysadmin"
        :toggle-click="toggleSideBar"
        :is-active="sidebar.opened"
        class="hamburger-container"
      />
      <el-menu
        class="right-menu"
        mode="horizontal"
        text-color="#474543"
        :ellipsis="false"
        :default-active="activeIndex"
        @select="() => {}"
      >
        <div class="flex-grow" />
        <el-sub-menu index="1">
          <template #title><mdicon name="translate" /></template>
          <el-menu-item dir="rtl" index="2-1">فارسی</el-menu-item>
          <el-menu-item dir="ltr" index="2-2">English</el-menu-item>
        </el-sub-menu>
        <el-sub-menu v-if="!isLoginPage()" index="2">
          <template #title><mdicon name="account" /></template>
          <span class="greet-user">Hi, {{ name }}!</span>
          <el-divider style="margin: 4px 8px"></el-divider>
          <el-menu-item index="2-1"
            ><mdicon name="account-cog" />Settings</el-menu-item
          >
          <el-menu-item @click="logout" index="2-2"
            ><mdicon name="logout" />Logout</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </div>

    <div v-else>
      <div class="navbar">
        <hamburger
          v-if="isSysadmin"
          :toggle-click="toggleSideBar"
          :is-active="sidebar.opened"
          class="hamburger-container"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import HamburgerComponent from "@/components/HamburgerComponent.vue";
export default {
  components: {
    HamburgerComponent,
  },
  computed: {
    ...mapGetters(["sidebar", "name", "avatar", "device"]),
    activeIndex() {
      return -1;
    },
    isSysadmin() {
      return store.getters.role === "admin";
    },
    privileges() {
      return store.getters.privileges;
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
  created() {
    console.log(store.getters.role);
    console.log(store.getters.name);
    console.log(store.getters.privileges);
    console.log(store);
  },
  methods: {
    isLoginPage() {
      return this.$route.name === "Login";
    },
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push("/login");
      });
    },
    openChangePasswordDialog() {
      this.$refs.changePasswordDialog.open();
    },
    openUpdatePermissionsDialog() {
      this.$refs.updatePermissionsDialog.open();
    },
    openBoardSettings() {
      let path = this.$route.path;
      if (path[path.length - 1] === "/") path = path.slice(0, path.length - 1);
      this.$router.push(path + "/board_settings");
    },
    openPrioritySettings() {
      let path = this.$route.path;
      if (path[path.length - 1] === "/") path = path.slice(0, path.length - 1);
      this.$router.push(path + "/priority_settings");
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  // background-color: #eff4f9;
  // border-bottom: 1px #d7dbe0 solid;
  .hamburger-container {
    fill: #5d5b58;
    line-height: 58px;
    height: 38px;
    float: left;
    padding: 6px 6px;
    margin-left: -44px;
    position: fixed;
    z-index: 1001;
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    --el-menu-icon-width: 12px;
    --el-menu-base-level-padding: 8px;
    --el-bg-color-overlay: #e9e9ef !important;
    padding-right: 24px;
    background: none;
    border: none;
  }
}

.icon-button {
  display: inline-block;
  color: #353f45;
  width: 1.5rem;
  height: 3rem;
  line-height: 3rem;
  margin-left: 3px;
}
.icon-button:hover {
  color: #5c6f77;
}
.greet-user {
  background-color: var(--el-menu-bg-color);
  display: flex;
  align-items: center;
  height: var(--el-menu-horizontal-sub-item-height);
  padding: 0 10px;
  color: var(--el-menu-text-color);
}
</style>
