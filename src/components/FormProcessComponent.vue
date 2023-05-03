<template>
  <el-container
    v-loading="processState === 1"
    direction="vertical"
    class="form-container elevation-lighter"
  >
    <div :class="{ invisible: processState === 2 }">
      <slot name="form"></slot>
    </div>
    <div :class="{ absolute: true, invisible: !(processState === 2) }">
      <slot name="result"></slot>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "FormProcessComponent",
  props: {
    processState: {
      type: String,
      required: true,
    },
  },
  computed: {},
};
</script>

<style scoped>
.absolute {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 16px;
}
</style>
