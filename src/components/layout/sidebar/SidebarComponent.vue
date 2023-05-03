<template>
  <el-menu
    :show-timeout="200"
    :default-active="route.path"
    :collapse="isCollapse"
    mode="vertical"
    background-color="#f3f3f3"
    text-color="#474543"
    active-text-color="#005f8f"
    style="overflow-y: auto; padding-top: 50px; border: none"
  >
    <div>Elemento</div>
    <SidebarItemComponent
      v-for="route in routes"
      :key="route.name"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItemComponent from "./SidebarItemComponent";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "SidebarComponent",
  components: { SidebarItemComponent },
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  data() {
    return {
      routes: [
        {
          path: "/modules",
          name: "Modules",
          meta: { title: "modules", icon: "raspberry-pi", noCache: true },
        },
        {
          path: "/complexes",
          name: "Complexes",
          meta: { title: "complexes", icon: "domain", noCache: true },
        },
        {
          path: "/users",
          name: "Users",
          meta: { title: "users", icon: "account-multiple", noCache: true },
        },
      ],
    };
  },
};
</script>
