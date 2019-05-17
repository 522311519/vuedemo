<template>
  <el-container>
    <el-header height="80px">
      <app-header :user="user"></app-header>
    </el-header>
    <el-container>
      <el-aside width="12.5%">
        <el-menu class="mar-l el-menu-vertical-demo el-col el-col-3" light>
          <router-link to="/index" tag="span">
            <el-menu-item :index="'/index'">
              <i class="fa" :class></i>
              index
            </el-menu-item>
          </router-link>
          <router-link to="/table" tag="span">
            <el-menu-item :index="'/table'">
              <i class="fa" :class></i>
              table
            </el-menu-item>
          </router-link>
          <router-link to="/form" tag="span">
            <el-menu-item :index="'/form'">
              <i class="fa" :class></i>
              form
            </el-menu-item>
          </router-link>
          <router-link to="/editor" tag="span">
            <el-menu-item :index="'/editor'">
              <i class="fa" :class></i>
              editor
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import DemoHeader from '@/components/DemoHeader'
const ERR_OK = "000";
export default {
  name: 'Container',
  data() {
    return {
      user: {}
    }
  },
  components: {
    "app-header": DemoHeader
  },
  created() {
    this.$http.get('/api/user').then((response) => {
      response = response.data;
      if (response.code === ERR_OK) {
        this.user = response.datas;
      }
    });
  },
}
</script>

<style scoped>
.el-header {
  padding: 0;
}

.el-aside {
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.el-main {
  position: absolute;
  top: 80px;
  left: 12.5%;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 10px 0 10px 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
/* fa图标右侧需要流出空白 elementUI图标已自带样式 */
i.fa {
  vertical-align: baseline;
  margin-right: 10px;
}
.el-menu {
  height: 100%;
  position: fixed;
  float: left;
}
.container ul li.el-menu-item {
  font-size: 100%;
}

.container .mar-l {
  padding: 10px;
}

.container .content-wrapper {
  padding: 10px;
}
</style>
