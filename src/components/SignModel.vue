<template>
  <div class="signmodel">
    <el-card class="box-card">
      <template v-if="isLogin">
        <div slot="header" class="clearfix" key="re" v-if="isLogin">
          <h3>请登录！</h3>
        </div>
      </template>
      <template v-else>
        <div slot="header" class="clearfix" key="lo">
          <h3>请注册！</h3>
        </div>
      </template>
      <router-view></router-view>
      <template v-if="isLogin">
        <div class="toregister">
          还没有账号？去
          <router-link to="/register" tag="span" class="rb">注册</router-link>
        </div>
      </template>
      <template v-else>
        <div class="tologin">
          已经有账号？去
          <router-link to="/login" tag="span" class="rb">登录</router-link>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
const ERR_OK = "000";
export default {
  name: "SignModel",
  data() {
    return {
      isLogin: true,
    }
  },
  watch: {
    //监听路由变化更改tab显示内容
    $route(to, from) {
      if (to.path === '/register') {
        this.isLogin = false;
      }
      if (to.path === '/login') {
        this.isLogin = true;
      }
    }
  },
  mounted() {
    console.log('mounted!')
    if (this.$route.path === '/register') {
      this.isLogin = false
    }
    if (this.$route.path === '/login') {
      this.isLogin = true
    }
  },
}
</script>

<style scoped>
.signmodel {
  width: 100vw;
  height: 100vh;
  background: url(../../static/images/loginbg.png) no-repeat;
  background-size: 100%;
}
.lbtn {
  width: 100%;
}
.text {
  font-size: 14px;
}
.toregister {
  text-align: center;
  font-family: "幼圆";
  padding: 10px;
}
.tologin {
  text-align: center;
  font-family: "幼圆";
  padding: 10px;
}
.rb {
  color: blue;
  cursor: pointer;
}
h3{
  margin: 0
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>