<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">401</h1>
        <h2>Unauthorized Access</h2>
        <h6>
          <router-link class="link-type" to="/login">
            <mdicon name="chevron-right" />Click here to login
          </router-link>
        </h6>
      </el-col>
      <el-col :span="12">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream."
        />
      </el-col>
    </el-row>
    <el-dialog v-model:visible="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img" />
    </el-dialog>
  </div>
</template>

<script>
import errGif from "@/assets/401_images/401.gif";

export default {
  name: "Error401View",
  data() {
    return {
      errGif: errGif + "?" + +new Date(),
      ewizardClap:
        "https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",
      dialogVisible: false,
    };
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: "/dashboard" });
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
