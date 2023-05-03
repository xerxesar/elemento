<template>
  <a @click="toggle">
    <SvgIconComponent
      v-if="enabled"
      :icon-class="iconClass"
      :class-name="className"
    />
    <SvgIconComponent
      v-else
      :icon-class="disabledIcon"
      :class-name="disbaledClassName"
    />
  </a>
</template>

<script>
import SvgIconComponent from "@/components/SvgIconComponent"; // svg组件
export default {
  name: "IconCheckBoxComponent",
  components: { SvgIconComponent },
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    disabledIconClass: {
      type: String,
      default: "",
    },
    disbaledClassName: {
      type: String,
      default: "default-disabled-class",
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    disabledIcon() {
      if (this.disabledIconClass === "") {
        return this.iconClass;
      } else {
        return this.disabledIconClass;
      }
    },
  },
  methods: {
    toggle() {
      console.log("toggle.");
      this.$emit("toggle");
    },
  },
};
</script>

<style>
.svg-icon {
  overflow: hidden;
}
.default-disabled-class {
  color: #c0290d;
}
</style>
