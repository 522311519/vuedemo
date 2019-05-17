<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="registerForm">
      <el-form-item label="用户名:">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密  码:">
        <el-input v-model="registerForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="邮  箱:">
        <el-input v-model="registerForm.email"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="register()" class="rbtn">注册</el-button>
  </div>
</template>

<script>
const ERR_OK = "000";
export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        email: '',
      },
      rules: {
        username: [
          { required: false, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: false, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required: false, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
      },
      labelPosition: 'right',
    }
  },
  watch: {
    'registerForm.username': {
      handler(newValue, oldValue) {
        console.log("watch")
      },
      deep: true
    },
    istrue(newValue, oldValue) {
      console.log("istrue")
    }
  },
  methods: {
    register() {
      console.log(this.loginForm);
      this.registerForm.username = "123"
      this.registerForm.password = "666"
      this.$router.push({ path: '/container' })
    }
  },
}
</script>

<style scoped>
.rbtn {
  width: 100%;
}
</style>