<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <a :href="item.path" target="_blank" @click="clickLink(item.path, $event)">
      <el-menu-item
        :index="resolvePath(item.path)"
        @click="preventDefault"
        :class="{ 'submenu-title-noDropdown': !isNest }"
        style="padding-left: 10px"
      >
        <SidebarItemRenderer
          :icon="item.meta.icon"
          :title="generateTitle(item.meta.title)"
        />
      </el-menu-item>
    </a>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { generateTitle } from "@/utils/i18n";
import { validateURL } from "@/utils/validate";
import SidebarItemRenderer from "./SidebarItemRenderer";

export default {
  name: "SidebarItemComponent",
  components: { SidebarItemRenderer },
  computed: {
    NotHiddenChildren: (item) => {
      return item.children.filter((item) => {
        return !item.hidden;
      });
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    resolvePath(routePath) {
      // return this.basePath + routePath
      return routePath;
    },
    isExternalLink(routePath) {
      return validateURL(routePath);
    },
    clickLink(routePath, e) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault();
        const path = this.resolvePath(routePath);
        this.router.push(path);
      }
    },
    generateTitle,
  },
};
</script>
