<template>
  <div>
    <span :id="elementId">
      <el-tooltip
        :visible-arrow="false"
        :content="$t('module.fault_filters.placeholders.date')"
        effect="dark"
        placement="top"
      >
        <a class="link picker-icon"><svg-icon :icon-class="'edit'" /></a>
      </el-tooltip>
      <input
        v-model="internal_time"
        :placeholder="placeholder"
        class="link picker-field"
        type="text"
        style="text-align: center"
      />
    </span>
    <date-picker
      v-if="$i18n.locale === 'fa'"
      v-model="internal_time"
      :element="elementId"
      format="YYYY/MM/DD HH:mm"
      display-format="jYYYY/jMM/jDD HH:mm"
      type="datetime"
      locale="en,fa"
      @change="updateTime"
    />
    <date-picker
      v-else
      v-model="internal_time"
      :element="elementId"
      format="YYYY/MM/DD HH:mm"
      display-format="YYYY/MM/DD HH:mm"
      type="datetime"
      locale="en,fa"
      @change="updateTime"
    />
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import moment from "moment";

export default {
  name: "CustomDatePickerComponent",
  components: { datePicker: VuePersianDatetimePicker },
  directives: {},
  filters: {},
  props: {
    elementId: {
      type: String,
      default: "timepicker",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      internal_time: "",
    };
  },
  methods: {
    updateTime() {
      const time = moment(this.internal_time, "YYYY/MM/DD HH:mm").valueOf();
      console.log("time", this.internal_time);
      this.$emit("change", time);
    },
  },
};
</script>
<style scoped>
.link {
  cursor: pointer;
}
.picker-icon {
  display: inline-block;
  float: left;
  width: 24px;
  height: 24px;

  margin-top: 12px;
  line-height: 24px;
  text-align: center;

  background-color: #2a7af4;
  color: #f4f4f4;
}
.picker-field {
  float: left;
  height: 24px;
  line-height: 24px;
  margin-top: 12px;
  text-align: center;

  background-color: #ffffff;
  color: #2a7af4;
  border: none;
}
</style>

<style>
/* style fix patch */
.vpd-month-label {
  width: auto !important;
}
</style>
