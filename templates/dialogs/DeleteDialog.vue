<template>
  <el-dialog :title="formTitle" v-model:visible="visible" style="width: auto">
    <p style="white-space: pre-line">
      {{ $t('dialogs.delete_dialog.message') }}
    </p>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">{{ $t('dialogs.cancel') }}</el-button>
      <el-button class="el-button--danger" @click="doDeleteEntity()">{{ $t('dialogs.delete') }}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'DeleteDialog',
  components: { },
  directives: {
  },
  filters: {},
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    formTitle () {
      return this.$t('dialogs.delete_dialog.title') + ' ' + this.username + '(' + this.id + ')'
    }
  },
  methods: {
    open () {
      this.visible = true
    },
    doDeleteEntity () {
      this.$emit('do-delete-entity', this.id)
      this.visible = false
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
