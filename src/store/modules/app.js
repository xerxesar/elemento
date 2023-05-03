import Cookies from "js-cookie";

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get("sidebarStatus"),
      withoutAnimation: false,
    },
    device: "desktop",
    language: Cookies.get("language") || "en",
    isrtl: Cookies.get("isrtl") || false,
    size: Cookies.get("size") || "mini",
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar.opened) {
        Cookies.set("sidebarStatus", 1, { expires: 30 });
      } else {
        Cookies.set("sidebarStatus", 0, { expires: 30 });
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set("sidebarStatus", 1, { expires: 30 });
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set("language", language, { expires: 30 });
    },
    SET_RTL: (state, isrtl) => {
      state.isrtl = isrtl;
      Cookies.set("isrtl", isrtl, { expires: 30 });
    },
    SET_SIZE: (state, size) => {
      state.size = size;
      Cookies.set("size", size, { expires: 30 });
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit("TOGGLE_SIDEBAR");
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit("CLOSE_SIDEBAR", withoutAnimation);
    },
    toggleDevice({ commit }, device) {
      commit("TOGGLE_DEVICE", device);
    },
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
    setRTL({ commit }, isrtl) {
      commit("SET_RTL", isrtl);
    },
    setSize({ commit }, size) {
      commit("SET_SIZE", size);
    },
  },
};

export default app;
