<template>
  <div id="app">
    <!-- 路由导航区 -->
  <Header></Header>
  <!-- 路由展示区 -->
  <router-view></router-view>
    <div class="container to-center text-center">
      <!-- 路由嵌套 -->
      <router-view name="delivery"></router-view>
       <!-- 返回顶部 -->
        <div class="btn btn-outline-primary gotop" id="goTop" @click="goTop">↑</div>
    </div>
  </div>
</template>

<script>
//引入header组件
import Header from './components/Header'
export default {
  name: 'App',
  data(){
    return {
      title:'欢迎来到我的披萨小店'
    }
  },
  components:{
    Header,
  },
  methods:{
    goTop(){
      document.documentElement.scrollTop=0
    },
  }
}
window.onscroll=function(){
  var oDiv=document.getElementById('goTop')
  
  var scrollTop = window.scrollTop ||document.documentElement.scrollTop
  //  console.log(scrollTop)
  if(scrollTop>200){
      oDiv.style.display='block'
  }else{
      oDiv.style.display='none'
  }
}
</script>

<style>
  .to-center{
      padding-left: 70px;
  }
  /* 回到顶部 */
  .gotop{
      position: fixed;
      right: 50px;
      bottom: 70px;
      font-size: 30px;
  }
</style>
