<template>
  <el-dialog :title="formTitle" v-model:visible="visible" style="width: auto">
    <p style="white-space: pre-line">
      description
    </p>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">{{ $t('dialogs.cancel') }}</el-button>
      <el-button class="el-button--danger" @click="doApply">{{ $t('dialogs.apply') }}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'EmptyDialog',
  components: { },
  directives: {
  },
  filters: {},
  props: {
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    formTitle () {
      return this.$t('dialogs.delete_dialog.title')
    }
  },
  methods: {
    open () {
      this.visible = true
    },
    doApply () {
      this.$emit('do-apply', 'arg')
      this.visible = false
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
