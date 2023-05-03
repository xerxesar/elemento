<template>
  <div class="app-container">
    <div class="page-header flex">
      <div class="flex">
        <mdicon name="account-multiple" class="mr-4 flex" size="48"/>
        <span class="page-title-container mr-4 flex">
          <div class="page-title">Page Title</div>
          <div class="page-desc">A brief description</div>
        </span>
      </div>
    </div>
    <el-container class="elevation-lighter">
      <!-- PLACE YOUR CONTENT HERE -->
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
