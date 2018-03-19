import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/helloword/HelloWorld'
import Info from '@/components/info/info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
