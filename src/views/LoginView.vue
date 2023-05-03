<template>
  <div>
    <h1 style="text-align: center">{{ $t("login.title") }}</h1>
    <el-row style="height: 100%">
      <el-col :xs="0" :sm="2" :md="4" :lg="6" :xl="6"></el-col>
      <el-col
        class="form-col"
        style="height: 100%"
        :xs="24"
        :sm="20"
        :md="16"
        :lg="12"
        :xl="12"
      >
        <el-container
          direction="vertical"
          class="form-container elevation-lighter"
        >
          <el-form :model="form" label-position="top" class="login-form">
            <div class="title-container">
              <h2 style="text-align: left">{{ $t("login.logIn") }}</h2>
            </div>
            <br />
            <el-form-item prop="username" class="login-form-item">
              <el-form-item label="Username">
                <el-input
                  v-model="loginForm.username"
                  :placeholder="$t('login.username')"
                  name="username"
                  type="text"
                  class="w-50 m-2"
                  size="large"
                />
              </el-form-item>
            </el-form-item>

            <el-form-item prop="password" class="login-form-item">
              <el-form-item label="Password">
                <el-input
                  :type="passwordType"
                  v-model="loginForm.password"
                  :placeholder="$t('login.password')"
                  name="password"
                  class="w-50 m-2"
                  size="large"
                  @keyup.enter="handleLogin"
                >
                  <!-- <template #append>
                  <span class="show-pwd" @click="showPwd">
                    <mdicon name="eye" />
                  </span>
                </template> -->
                </el-input>
              </el-form-item>
            </el-form-item>
            <br />
            <br />

            <el-button
              :loading="loading"
              class="login-form-item"
              type="primary"
              style="width: 200px; margin-bottom: 30px"
              @click.prevent="handleLogin"
              >{{ $t("login.logIn") }}</el-button
            >

            <div class="text-center el-form-item__error" style="width: 100%">
              {{ error }}
            </div>
          </el-form>
        </el-container>
      </el-col>
      <el-col :xs="0" :sm="2" :md="4" :lg="6" :xl="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";

export default {
  name: "LoginView",
  components: {},
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      self: this,
      error: "",
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      loading: false,
      showDialog: false,
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        // this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  updated() {
    console.log("PAKh", this.$store.getters.isrtl);
    let dir = "ltr";
    if (this.$store.getters.isrtl === true) {
      dir = "rtl";
    }
    document.getElementsByTagName("html")[0].setAttribute("dir", dir);
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    },
    handleLogin() {
      this.error = "";
      this.loading = true;
      this.$store
        .dispatch("LoginByUsername", this.loginForm)
        .then(() => {
          this.loading = false;
          this.$router.push({ path: this.redirect || "/" });
        })
        .catch(() => {
          this.error = "Wrong Login Info";
          this.loading = false;
        });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
html,
body {
  margin: 0;
  padding: 0;
}
.login-container {
  display: flex;
  height: 100%;
  margin: 0;
}
.form-col {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.form-container {
  display: flex;
  align-items: center;
  flex-grow: 0;
}
.show-pwd {
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    height: 24px;
    line-height: 22px;
    vertical-align: middle;
  }
}
.el-input-group__append {
  padding: 0 8px;
}

.title-container {
  h3 {
    text-align: center;
  }
}
</style>
