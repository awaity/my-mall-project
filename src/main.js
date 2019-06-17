// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//引入axios
import axios from 'axios'
//配置axios
axios.defaults.baseURL='https://wd2586044324spvdru.wilddogio.com/'
//设置全局导航守卫
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('isLogin')){//登录状态
    next()//直接进入当前路由操作页面
  }else{//未登录状态
    if(to.path=='/register'||to.path=='/login'||to.path=='/menu'||to.path=='/'){
      next()
    }else{
      if(confirm('您必须先登录才能访问')){
        next('/login')
      }else{
        next(false)
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
