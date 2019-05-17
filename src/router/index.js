import Vue from 'vue'
import Router from 'vue-router'
import DemoIndex from '@/components/demo/DemoIndex.vue'
import DemoTable from '@/components/demo/DemoTable.vue'
import DemoForm from '@/components/demo/DemoForm.vue'
import DemoEditor from '@/components/demo/DemoEditor.vue'
import Container from '@/components/Container.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import SignModel from '@/components/SignModel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/signmodel"
    },
    // {
    //   path: '/login',
    //   component: Login,
    //   name: 'login',
    //   children: [
    //     {
    //       path: '/register',
    //       component: Register,
    //       name: 'register',
    //     }
    //   ]
    // },
    {
      path: '/signmodel',
      component: SignModel,
      name: 'signmodel',
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: Login,
          name: 'login',
        }, {
          path: '/register',
          component: Register,
          name: 'register',
        }
      ]
    },
    {
      path: '/container',
      component: Container,
      name: 'container',
      redirect: "/index",
      children: [
        {
          path: '/index',
          component: DemoIndex,
          name: 'index'
        },
        {
          path: '/table',
          component: DemoTable,
          name: 'table'
        },
        {
          path: '/form',
          component: DemoForm,
          name: 'form'
        },
        {
          path: '/editor',
          component: DemoEditor,
          name: 'editor'
        }
      ]
    },
    {
      path: "*",
      redirect: "/login"
    },
  ],
  mode: "history",
  linkActiveClass: "active"
})
