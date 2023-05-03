<template>
  <el-dialog
    :title="$t('navbar.dialogs.update_privilege.title')"
    v-model:visible="visible"
    style="width: auto"
  >
    <el-select
      v-model="selectedPermissionLevel"
      :placeholder="$t('navbar.dialogs.update_privilege.select_level')"
      class="float-left"
    >
      <el-option
        v-for="item in permissionLevels"
        :key="item.value"
        :label="$t(item.label)"
        :value="item.value"
      />
    </el-select>
    <el-input
      v-model="password"
      :placeholder="$t('navbar.dialogs.update_privilege.password')"
      type="password"
      prefix-icon="el-icon-key"
      class="float-left margin-left"
    />
    <br />
    <div slot="footer" class="dialog-footer">
      <span v-if="success != null" class="success-status">{{
        $t("navbar.dialogs.update_privilege.elevated_success")
      }}</span>
      <span v-else-if="error != null" class="failure-status">{{ error }}</span>
      <span v-else class="failure-status">{{ " " }}</span>
      <el-button @click="visible = false">{{ $t("dialogs.cancel") }}</el-button>
      <el-button
        v-if="!requesting"
        class="change-btn"
        @click="updatePermission()"
        >{{ $t("dialogs.apply") }}</el-button
      >
      <el-button v-else class="change-btn"
        ><svg-icon :icon-class="'loading'" class="loading"
      /></el-button>
    </div>
  </el-dialog>
</template>
<script>
import { upgradePrivilege } from "@/api/users";
import store from "@/store";
export default {
  name: "UpdatePermissionsDialog",
  components: {},
  directives: {},
  filters: {},
  props: {},
  data() {
    return {
      visible: false,
      requesting: false,
      password: "",
      permissionLevels: [
        {
          value: "control",
          label: "navbar.dialogs.update_privilege.control_access",
        },
        {
          value: "setting",
          label: "navbar.dialogs.update_privilege.setting_access",
        },
        {
          value: "all_settings",
          label: "navbar.dialogs.update_privilege.all_setting_access",
        },
      ],
      selectedPermissionLevel: "control",
      success: null,
      error: null,
    };
  },
  methods: {
    open() {
      console.log("opening");
      this.visible = true;
      this.success = null;
      this.error = null;
      this.password = "";
      this.requesting = false;
    },
    updatePermission() {
      this.success = null;
      this.error = null;
      if (this.password.length < 6) {
        this.error = this.$t("navbar.dialogs.update_privilege.less_than_6");
      } else {
        this.requesting = true;
        upgradePrivilege(
          this.selectedPermissionLevel,
          store.getters.username,
          this.password
        ).then((response) => {
          if (response.data.success === true) {
            if (response.data.has_access === true) {
              store
                .dispatch("GetUserPrivileges")
                .then((_) => {
                  // 拉取user_info
                  this.success = true;
                })
                .catch((err) => {
                  console.log("error", err);
                  this.error = this.$t(
                    "navbar.dialogs.update_privilege.failed_to_update_info"
                  );
                });
            } else {
              this.error = this.$t(
                "navbar.dialogs.update_privilege.wrong_password"
              );
            }
          } else {
            this.error = this.$t(
              "navbar.dialogs.update_privilege.unknown_error"
            );
          }
          this.requesting = false;
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
  width: 4rem;
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.float-left {
  float: left;
}
.margin-left {
  width: auto;
  margin-left: 0.5rem;
}
.el-select-dropdown__wrap {
  margin-left: -120px !important;
  margin-right: 0 !important;
  background: #1f2d3d;
}
</style>
