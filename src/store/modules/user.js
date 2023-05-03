import {
  loginByUsername,
  refreshTokens,
  logout,
  getUserInfo,
} from "@/api/login";
import { getPrivileges } from "@/api/users";
import { getTokens, setTokens, removeTokens } from "@/utils/auth";

const user = {
  state: {
    id: null,
    username: "",
    status: "",
    code: "",
    name: "",
    avatar: "",
    introduction: "",
    role: null,
    privileges: {},
    setting: {
      articlePlatform: [],
    },
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_ID: (state, id) => {
      state.id = id;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_TOKENS: (state, token) => {
      state.tokens = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_PRIVILEGES: (state, privileges) => {
      state.privileges = privileges;
    },
  },

  actions: {
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim();
      commit("SET_PRIVILEGES", {});
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password)
          .then((response) => {
            console.log(response);
            let loggedIn = true;
            if (response.status !== 200) {
              loggedIn = false;
            }
            if (!loggedIn) {
              console.log("fail");
              reject(new Error("fail"));
            } else {
              const data = response.data;
              const tokens = data.tokens;
              // commit('SET_TOKENS', tokens)
              commit("SET_USERNAME", data.user.username);
              commit("SET_NAME", data.user.name);
              commit("SET_ID", data.user.id);
              commit("SET_ROLE", data.user.role);
              console.log({ user: data.user });
              // setTokens(tokens)
              console.log({ tokens });
              resolve();
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    RefreshTokens({ commit }) {
      return new Promise((resolve, reject) => {
        refreshTokens()
          .then((response) => {
            console.log(response);
            let loggedIn = true;
            if (response.status !== 200) {
              loggedIn = false;
            }
            if (!loggedIn) {
              console.log("fail");
              reject(new Error("fail"));
            } else {
              const data = response.data;
              const tokens = data.tokens;
              // commit('SET_TOKENS', tokens)
              commit("SET_USERNAME", data.user.username);
              commit("SET_NAME", data.user.name);
              commit("SET_ID", data.user.id);
              commit("SET_ROLE", data.user.role);
              console.log({ user: data.user });
              // setTokens(tokens)
              console.log({ tokens });
              resolve();
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((response) => {
            if (!response.data) {
              // 由于mockjs 不支持自定义状态码只能这样hack
              reject(new Error("Error: failed to retrieve user info"));
            }
            const data = response.data;
            const role = data.role.map((role) => {
              return role.name;
            }); // note: role must be a array! such as: ['editor','develop']

            if (role && role.length > 0) {
              // 验证返回的role是否是一个非空数组
              commit("SET_ROLE", role);
            } else {
              reject(new Error("getInfo: role must be a non-null array !"));
            }
            commit("SET_USERNAME", data.username);
            commit("SET_NAME", data.name);
            commit("SET_ID", data.id);
            // commit('SET_AVATAR', data.avatar)
            // commit('SET_INTRODUCTION', data.introduction)
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    GetUserPrivileges({ commit, state }) {
      return new Promise((resolve, reject) => {
        getPrivileges()
          .then((response) => {
            console.log(response);
            if (!response.data) {
              // 由于mockjs 不支持自定义状态码只能这样hack
              reject(new Error("Error: failed to retrieve user privileges"));
            }
            const data = response.data;
            console.log(data);
            commit("SET_PRIVILEGES", data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            // commit('SET_TOKENS', '')
            commit("SET_ROLE", null);
            commit("SET_PRIVILEGES", {});
            removeTokens();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        // commit('SET_TOKENS', '')
        commit("SET_ROLE", null);
        commit("SET_PRIVILEGES", {});
        removeTokens();
        resolve();
      });
    },
  },
};

export default user;
