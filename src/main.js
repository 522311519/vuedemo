// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router/index'
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock/data'

Vue.config.productionTip = false
Vue.prototype.$http = VueResource;
Vue.use(VueResource)
Vue.use(ElementUI)

Mock.mockData()
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() { window.app = this }
})