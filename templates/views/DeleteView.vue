<template>
  <div class="app-container">
    <div class="page-header flex">
      <div class="flex">
        <mdicon name="raspberry-pi" class="mr-4 flex" size="48"/>
        <span class="page-title-container mr-4 flex">
          <div class="page-title">Users</div>
          <div class="page-desc">Manage all users</div>
        </span>
      </div>
    </div>
    <el-row :gutter="10">
      <el-col :xs="0" :sm="2" :md="4" :lg="6" :xl="6"></el-col>
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <FormProcessComponent :process-state="processState">
          <template #form>
            <div class="form-title">Delete User {{ form.username }}</div>
            <el-form
                :model="form"
                label-width="150px"
                label-position="left"
                style="width: 100%;">
                <h3>Do you confirm you want to delete user with following specifications?</h3>
                <h5 style="margin:6px">id: {{ user_id }}</h5>
                <h5 style="margin:6px">username: {{ form.username }}</h5>
                <h5 style="margin:6px">name: {{ form.name }}</h5>
              <div style="justify-content: end;display: flex; margin-top: 64px;">
                <el-button type="danger" @click="onSubmit">Confirm and Delete it.</el-button>
                <el-button @click="$router.back()">Cancel</el-button>
              </div>
            </el-form>
          </template>
          <template #result>
            <br>
            <h3 v-if="result.success"><mdicon name="check-circle-outline" size="32" style="color: #33b756;"></mdicon>User has been deleted successfully.</h3>
            <h3 v-else><mdicon name="alert-circle-outline" size="32"  style="color: #b73333;"></mdicon>{{ this.result.message }}</h3>
            <h6>
              <router-link class="link-type" to="/users">
                <mdicon name="chevron-right"/>Click here to go to users page
              </router-link>
            </h6>
            <h6>
              <router-link class="link-type" to="#" @click="() => {this.processState = 0}">
                <mdicon name="chevron-right"/>Click here to try again
              </router-link>
            </h6>
          </template>
        </FormProcessComponent>
      </el-col>
      <el-col :xs="0" :sm="2" :md="4" :lg="6" :xl="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import { deleteUser, getUser as fetchUser } from '@/api/users'
import FormProcessComponent from '@/components/FormProcessComponent.vue'

export default {
  name: 'DeleteUserView',
  components: { FormProcessComponent },
  directives: {
  },
  filters: {},
  data () {
    return {
      processState: 1,
      user_id: null,
      form: {
        username: '',
        email: '',
        name: '',
        phoneNumber: '',
        password: '',
        complex: null,
        role: 'manager'
      },
      result: {
        success: false,
        message: ''
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.processState = 1
      this.user_id = this.$route.params.user_id
      if (this.form.code == null) this.getUser()
    },
    getUser () {
      fetchUser(this.user_id).then((res) => {
        if (res.status === 200) {
          this.form = {
            username: res.data.username,
            email: res.data.email,
            name: res.data.name,
            phoneNumber: res.data.phoneNumber,
            password: '',
            complex: res.data.complex && res.data.complex.id,
            role: res.data.role
          }
          this.processState = 0
        } else {
          this.result.success = false
          this.result.message = 'Failed to fetch the user.'
          this.processState = 2
        }
      })
    },
    onSubmit () {
      this.processState = 1
      deleteUser(this.user_id).then((res) => {
        if (res.status === 204) {
          this.result.success = true
        } else {
          this.result.success = false
          this.result.message = 'Failed to delete the user.'
        }
        this.processState = 2
      })
    }
  }
}

</script>
<style scoped>
</style>
