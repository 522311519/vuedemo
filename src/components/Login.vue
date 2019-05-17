<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="loginForm">
      <el-form-item label="用户名:">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密  码:">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login()" class="lbtn">登录</el-button>
  </div>
</template>

<script>
const ERR_OK = "000";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
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
      },
      labelPosition: 'right',
    }
  },
  watch: {
    'loginForm.username': {
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
    login() {
      console.log(this.loginForm);
      this.loginForm.username = "123"
      this.loginForm.password = "666"
      this.$router.push({ path: '/container' })
    }
  },
}
</script>

<style scoped>
.lbtn {
  width: 100%;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
</style>