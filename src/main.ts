import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@/assets/fonts/font-faces.css"; // font-faces css
import "element-plus/dist/index.css";
import "@/styles/index.scss"; // global css
import "@/icons"; // icon

// import './ComponentCustomPropsDec'
import SvgIconComponent from "@/components/SvgIconComponent.vue"; // svg组件

import { router } from "./router";
import store from "./store";
import i18n from "./lang";
import { I18n } from "vue-i18n";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
// `App` according to the vue 3 documentation
import "@/styles/theme.scss"; // global css

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.component("SvgIconComponent", SvgIconComponent);

app.use(mdiVue, {
  icons: mdijs,
}); // etc...

// add element plus icon components one by one
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.config.globalProperties.$store = store;

const { t, d, n } = i18n.global;
app.config.globalProperties.$t = t;
app.config.globalProperties.$d = d;
app.config.globalProperties.$n = n;

app.mount("#app");
