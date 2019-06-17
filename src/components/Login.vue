<template>
    <div class='container col-6'>
        <div class="text-center">
            <img src="../assets/logo.png" alt="">
        </div>
        <h1 class="text-center text-warning mb-3">登录</h1>
        <div class="clearfix" style="height:40px;">
            <p class="text-danger col-10 float-right " v-show="msg">{{msg}}</p>
        </div>
        <form>
           <div class="form-group row">
                <label for="username" class="col-2 col-form-label text-right">账号/邮箱:</label>
                <div class="col-10">
                  <input v-model="username" type="text" class="form-control" id="username"  placeholder="请输入您的邮箱">
                </div>
            </div>
            <div class="form-group row">
                <label for="pass" class="col-2 col-form-label text-center">密码:</label>
                <div class="col-10">
                  <input v-model="password" type="password" class="form-control" id="pass" placeholder="请输入您的密码">
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block" @click.prevent="onLogin">立即登录</button>
        </form>
    </div>
</template>

<script>
// 借助axios请求数据
import axios from 'axios'
    export default {
        name:'Login',
        data(){
            return {
                username:'',
                password:'',
                msg:''
            }
        },
        methods:{
            onLogin(){
                let reg1 =/^((1([38]\d|4[57]|5[0-35-9]|7[06-8])\d{8})|([a-zA-Z0-9]{5,})|(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/
                let reg2 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*.,]+$)([a-zA-Z\d]|[a-zA-z!@#$%^&*.,]|[\d!@#$%^&*.,]){6,16}$/
               
                if(this.username==''){
                    this.msg='*请输入账号'
                    //1.做复杂了
                    // let that =this
                    // setTimeout(()=>{
                    //     // console.log(111)
                    //     that.steps.flag=true
                    //     setTimeout(()=>{
                    //         //   console.log(222) 
                    //         that.steps.msg=''
                    //     },1000)
                    // },1000)
                   
                }else if(!reg1.test(this.username)){
                    this.msg='*请输入正确的邮箱格式，如：XXX@qq.com'
                }else if(this.password==''){
                    this.msg='*请输入密码'
                }else if(this.password.length<6){
                    this.msg='*请输入六位以上密码，以确保您的账户安全'
                }else if(!reg2.test(this.password)){
                    this.msg='*密码强度太弱，请从字母、数字、特殊符号中任选两种进行组合'
                }else{
                     axios.get('./lh-user.json')
                    .then(res=>{
                        // console.log(res.data)
                        // 注意：如果没有数据，res.data为null
                        // console.log( res.data)  
                        // 因为res.data为对象object形式，所以先转化为数组array
                        const result = []
                        for(let key in res.data){
                            result.push(res.data[key])  
                        } 
                        // console.log(result)
                        const trueUser = result.filter((item)=>{
                            return item.username===this.username 
                        })
                        // console.log(trueUser[0].password)
                        // console.log(trueUser.length)
                        if(trueUser.length===0){
                            this.msg='*用户名不存在，请重新输入'
                            this.username=''
                            setTimeout(()=>{
                                this.msg=''
                            },3000)
                        }else if(this.password!==trueUser[0].password){
                            this.msg='*密码不正确，请重新输入'
                            this.password=''
                            setTimeout(()=>{
                                this.msg=''
                            },3000)
                            // console.log(this.password,trueUser[0].password)
                        }else{
                            this.$store.dispatch('setUser',trueUser[0].username)
                            this.$router.push('/')
                        }
                    })
                }
                //提示文字3s后消失
                 if(this.msg!==''){
                    setTimeout(()=>{
                        this.msg=''
                    },3000)
                }
            }
        }
    }
</script>

<style scoped>

</style>