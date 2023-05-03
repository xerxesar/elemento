<template>
  <div class="app-container">
    <div class="page-header flex">
      <div class="flex">
        <mdicon name="account-multiple" class="mr-4 flex" size="48"/>
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
            <div class="form-title">Create User</div>
            <el-form
                :model="form"
                label-width="150px"
                label-position="left"
                style="width: 100%;">
              <el-form-item label="Username">
                <el-input v-model="form.username" />
              </el-form-item>

              <el-form-item label="Email">
                <el-input v-model="form.email" />
              </el-form-item>

              <el-form-item label="Name">
                <el-input v-model="form.name" />
              </el-form-item>

              <el-form-item label="Phone Number">
                <el-input v-model="form.phoneNumber" />
              </el-form-item>

              <el-form-item label="Password">
                <el-input type="password" v-model="form.password" />
              </el-form-item>

              <el-form-item label="Complex">
                <el-select v-model="form.complex" class="m-2" placeholder="Select">
                  <el-option
                    v-for="item in complexes"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="Role">
                <el-select v-model="form.role" class="m-2" placeholder="Select">
                  <el-option
                    v-for="item in roles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <div style="justify-content: end;display: flex;">
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button @click="$router.back()">Cancel</el-button>
              </div>
            </el-form>
          </template>
          <template #result>
            <br>
            <h3 v-if="result.success"><mdicon name="check-circle-outline" size="32" style="color: #33b756;"></mdicon>User has been created successfully.</h3>
            <h3 v-else><mdicon name="alert-circle-outline" size="32"  style="color: #b73333;"></mdicon>{{ this.result.message }}</h3>
            <h6>
              <router-link class="link-type" to="/users">
                <mdicon name="chevron-right"/>Click here to go to users page
              </router-link>
            </h6>
            <h6>
              <router-link class="link-type" to="#" @click="() => {this.processState = 0}">
                <mdicon name="chevron-right"/>Click here to create another user
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
import { createUser } from '@/api/users'
import { getComplexes as fetchComplexes } from '@/api/complexes'
import FormProcessComponent from '@/components/FormProcessComponent.vue'

export default {
  name: 'CreateUserView',
  components: { FormProcessComponent },
  directives: {
  },
  filters: {},
  data () {
    return {
      processState: 0,
      form: {
        username: '',
        email: '',
        name: '',
        phoneNumber: '',
        password: '',
        complex: null,
        role: 'manager'
      },
      complexes: [],
      roles: [
        { value: 'manager', label: 'Manager' },
        { value: 'admin', label: 'Admin' }
      ],
      result: {
        success: false,
        message: ''
      }
    }
  },
  created () {
    this.getComplexes()
  },
  methods: {
    getComplexes () {
      this.listLoading = true
      fetchComplexes().then(response => {
        this.complexes = [
          { name: 'None', _id: null },
          ...response.data
        ]
        this.listLoading = false
      })
    },
    onSubmit () {
      this.processState = 1
      createUser(
        this.form.username,
        this.form.email,
        this.form.name,
        this.form.phoneNumber,
        this.form.password,
        this.form.complex,
        this.form.role
      ).then((res) => {
        console.log(res)
        if (res.status === 201) {
          this.result.success = true
        } else {
          this.result.success = false
          this.result.message = 'Failed to create the user.'
        }
        this.processState = 2
      })
    }
  }
}

</script>
<style scoped>
</style>
