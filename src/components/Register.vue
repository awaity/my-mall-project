<template>
   <div class='container col-6'>
        <div class="text-center">
            <img src="../assets/logo.png" alt="">
        </div>
        <h1 class="text-center text-warning mb-3">注册</h1>
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
            <div class="form-group row">
                <label for="pass1" class="col-2 col-form-label text-right">确认密码:</label>
                 <div class="col-10">
                  <input v-model="repassword" type="password" class="form-control" id="pass1" placeholder="请再次确认您的密码">
                 </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block" @click.prevent='onSubmit'>立即注册</button>
        </form>
    </div>
</template>

<script>
// 借助axios请求数据
import axios from 'axios'
    export default {
        name:'Register',
        data(){
            return {
                username:'',
                password:'',
                repassword:'',
                msg:''
            }
        },
        methods:{
            onSubmit(){
                //非空验证
                // let reg1 =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                let reg1 = /^((1([38]\d|4[57]|5[0-35-9]|7[06-8])\d{8})|([a-zA-Z0-9]{5,})|(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/;
                let reg2 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*.,]+$)([a-zA-Z\d]|[a-zA-z!@#$%^&*.,]|[\d!@#$%^&*.,]){6,16}$/
                if(this.username==''){
                    this.msg='*请输入账号'
                }else if(!reg1.test(this.username)){
                    this.msg='*请输入正确的账号格式'
                }else if(this.password==''){
                    this.msg='*请输入密码'
                }else if(this.password.length<6){
                    this.msg='*请输入六位以上密码，以确保您的账户安全'
                }else if(!reg2.test(this.password)){
                    this.msg='*密码强度太弱，请从字母、数字、特殊符号中任选两种进行组合'
                }else if(this.repassword==''){
                    this.msg='*请再次输入密码'
                }else if(this.password!=this.repassword){
                    this.msg='*两次密码输入不一致'
                }else{
                    //访问一次数据库，判断当前注册的用户名是否存在
                    axios.get('./lh-user.json')
                    .then((res)=>{
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
                        if(trueUser.length>0){
                        alert('当前用户名已存在') 
                        }else{
                        // 发送的数据为对象形式
                        const formData={
                            username:this.username,
                            password:this.password 
                        }
                        axios.post('./lh-user.json',formData)
                        .then(res=>{
                            // alert('当前用户注册成功') 
                            // console.log(res.data)
                            //自动跳转到登录页面
                            this.$router.push('/Success')
                            // this.$router.push('/login')
                        })  
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