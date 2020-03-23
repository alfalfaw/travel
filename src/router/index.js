import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// @表示src目录

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 当进行页面切换时，x、y轴初始是0
  scrollBehavior(to, form, savedPosition) {
    return { x: 0, y: 0 }
  }
})
