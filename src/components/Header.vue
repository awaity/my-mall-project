<template>
    <div class="header">
        <nav class="navbar-light bg">
            <div class="container d-flex flex-column flex-md-row justify-content-between nav-pills">
                <router-link class="py-2 " to="/">
                    <svg style="float:left;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto "><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    <span>Pizza点餐系统</span>
                </router-link>
                <router-link exact active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/">主页</router-link>
                <router-link active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/menu">菜单</router-link>
                <router-link active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/admin">管理</router-link>
                <router-link active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/rest">餐厅查询</router-link>
                <router-link active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/about">关于我们</router-link>
                <template v-if="!isLogin">
                    <router-link active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/login">登录</router-link>
                    <router-link active-class="active" class="py-2 d-none d-md-inline-block nav-link " to="/register">注册</router-link>
                </template>
                <template v-else>
                    <div>
                        <span class="btn btn-outline-success" @click='userCenter(currentUser)'>{{currentUser}}</span>
                        <span class="btn btn-outline-danger" @click='logout'>退出</span>
                    </div>
                </template>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return {
    
            }
        },
        computed:{
            isLogin(){
                return this.$store.getters.getIsLogin
            },
            currentUser(){
                return this.$store.getters.getCurrentUser
            }
        },
        methods:{
            logout(){
                if(confirm('你忍心离开吗？')){
                    this.$store.dispatch('setUser',null)
                    this.$router.replace('/login')
                }else{
                    return false
                }
            },
            userCenter(currentUser){
                this.$router.push({
                    name:'User',
                    params:{currentUser}
                })
            }
        }
    }
</script>

<style scoped>
    .py-2:hover{
        text-decoration: none;
    }
    .bg{
        background-color: #f5f5d5
    }
</style>