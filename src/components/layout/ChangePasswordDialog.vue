<template>
  <el-dialog
    :title="$t('navbar.dialogs.change_password.title')"
    v-model:visible="visible"
    style="width: auto"
  >
    <el-input
      v-model="password"
      :placeholder="$t('navbar.dialogs.change_password.password')"
      type="password"
      prefix-icon="el-icon-edit"
    />
    <el-input
      v-model="passwordRepeat"
      :placeholder="$t('navbar.dialogs.change_password.password_repeat')"
      type="password"
      prefix-icon="el-icon-edit"
    />
    <div slot="footer" class="dialog-footer">
      <span v-if="password.length < 6" class="failure-status">{{
        $t("navbar.dialogs.change_password.less_than_6")
      }}</span>
      <span v-else-if="passwordRepeat !== password" class="failure-status">{{
        $t("navbar.dialogs.change_password.repeat_not_match")
      }}</span>
      <span v-else class="failure-status">{{ " " }}</span>
      <el-button @click="visible = false">{{ $t("dialogs.cancel") }}</el-button>
      <el-button
        v-if="!requesting"
        class="change-btn"
        @click="changePassword()"
        >{{ $t("dialogs.change") }}</el-button
      >
      <el-button v-else class="change-btn"
        ><svg-icon :icon-class="'loading'" class="loading"
      /></el-button>
    </div>
  </el-dialog>
</template>
<script>
import { changePassword } from "@/api/users";

export default {
  name: "ChangePasswordDialog",
  components: {},
  directives: {},
  filters: {},
  props: {},
  data() {
    return {
      visible: false,
      requesting: false,
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    changePassword() {
      if (this.password.length >= 6 && this.password === this.passwordRepeat) {
        this.requesting = true;
        changePassword(this.password)
          .then((response) => {
            if (response.data.success === true) {
              this.$message.success(
                this.$t("navbar.dialogs.change_password.changed_success")
              );
            } else {
              this.$message.error(
                this.$t("navbar.dialogs.change_password.unknown_error")
              );
            }
            this.requesting = false;
          })
          .catch((_) => {
            this.requesting = false;
            this.$message.error(
              this.$t("navbar.dialogs.change_password.unknown_error")
            );
          });
      }
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.failure-status {
  float: left;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  color: #e01517;
}
.success-status {
  float: left;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  color: #45b532;
}
.change-btn {
  width: 6rem;
}
.loading {
  animation: spin 1s infinite linear;
  color: #409eff;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(-120deg);
    -ms-transform: rotate(-120deg);
    -o-transform: rotate(-120deg);
    transform: rotate(-120deg);
  }

  100% {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    -o-transform: rotate(240deg);
    transform: rotate(240deg);
  }
}
</style>
