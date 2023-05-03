<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown" style="right: auto">
      <el-dropdown-item :disabled="language === 'fa'" command="fa"
        >فارسی</el-dropdown-item
      >
      <el-dropdown-item :disabled="language === 'en'" command="en"
        >English</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "LangSelectComponent",
  computed: {
    language() {
      return this.$store.getters.language;
    },
  },
  methods: {
    handleSetLanguage(lang) {
      console.log(1);
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
      if (lang === "fa") {
        this.$store.dispatch("setRTL", true);
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      } else if (lang === "en") {
        this.$store.dispatch("setRTL", false);
        document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      }
      this.$message({
        message: "Switch Language Success",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>
