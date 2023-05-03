<template>
  <div class="app-container">
    <div class="page-header flex">
      <div class="flex">
        <mdicon name="account-multiple" class="mr-4 flex" size="48"/>
        <span class="page-title-container mr-4 flex">
          <div class="page-title">Table Page</div>
          <div class="page-desc">Manage all entities</div>
        </span>
      </div>
      <div class="page-options flex">
        <el-button type="success" @click="() => {this.$router.push('/entity/create')}" text bg class="add-btn icon-btn ml-2"><mdicon name="plus-box"/>New</el-button>
      </div>
    </div>
    <el-container class="elevation-lighter table-container">
      <el-table
        v-loading="listLoading"
        :key="0"
        :data="list"
        fit
        style="width: 100%;">
        <el-table-column :label="$t('tables.data.info')" align="left">
          <template #default="scope">
            <span>{{ scope.row.info }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('tables.modules.edit')" width="70" align="center">
          <template #default="scope">
            <router-link class="link-type" :to="`/entity/${scope.row.id}/edit`"><mdicon name="square-edit-outline"/></router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>

<script>
import { getData as fetchData } from '@/api/example'

export default {
  name: 'EmptyView',
  components: { },
  directives: {
  },
  filters: {},
  data () {
    return {
      _data: null,
      listLoading: true,
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.listLoading = true
      fetchData().then(response => {
        this._data = response.data
        this.listLoading = false
      })
    }
  }
}

</script>
<style>
</style>
