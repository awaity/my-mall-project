import Vue from 'vue'
import Router from 'vue-router'

//引入一级路由
import Home from '../components/Home.vue'
import Admin from '../components/Admin.vue'
import Menu from '../components/Menu.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Rest from '../components/Rest'
//引入二级路由
import Activity from '../components/about/Activity.vue'
import Contact from '../components/about/Contact.vue'
import History from '../components/about/History.vue'
import Delivery from '../components/about/Delivery.vue'
//引入三级路由
import Address from '../components/about/contact/Address.vue'
import Person from '../components/about/contact/Person.vue'
import Tel from '../components/about/contact/Tel.vue'

//详情展示页
import Details from '../components/Details'
import Success from '../components/Success'
import User from '../components/User'

Vue.use(Router)
//引入citySelector
import citySelector from 'vue2-city-selector'
Vue.use(citySelector)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //配置路由组件嵌套
      components:{
        default: Home,
        'delivery':Delivery
      } 
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      //局部导航守卫
      beforeEnter:(to,from,next)=>{
        if(localStorage.getItem('currentUser')==="lh@qq.com"||localStorage.getItem('currentUser')==="admin"){
          next()
        }else{
          alert('您么有管理权限')
        }
      }
    },
    {
      path: '/rest',
      name: 'Rest',
      component: Rest
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect:'/about/activity',
      children:[
        {
          path: '/about/activity',
          name: 'Activity',
          component: Activity,
        },
        {
          path: '/about/contact',
          name: 'Contact',
          component: Contact,
          redirect:'/about/tel',
          children:[
            {
              path: '/about/address',
              name: 'Address',
              component: Address
            },
            {
              path: '/about/person',
              name: 'Person',
              component: Person
            },
            {
              path: '/about/tel',
              name: 'Tel',
              component: Tel
            }
          ]
        },
        {
          path: '/about/history',
          name: 'History',
          component: History,
        },
        {
          path: '/about/delivery',
          name: 'Delivery',
          component: Delivery,
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/details',
      name:'Details',
      component:Details
    },
    {
      path:'/success',
      name:'Success',
      component:Success
    },
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'/*',
      redirect:'/'
    },
  ],
  mode:'history',
})
