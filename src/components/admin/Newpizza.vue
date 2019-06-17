<template>
    <div class="newpizza">
        <h2 class="text-center text-warning ">添加新的Pizza</h2>
        <form>
            <div class="form-group">
                <label for="name" class="text-warning"><h3>商品名称</h3></label>
                <div class="clearfix" style="height:30px;">
                    <p class="text-danger" v-show="msg">{{msg}}</p>
                </div>
                <input v-model="newPizza.name" type="text" class="form-control" id="name" placeholder="请输入您的pizza名称">
            </div>
            <div class="form-group">
                <label for="desc" class="text-warning"><h3>商品描述</h3></label>
                <input v-model="newPizza.desc" type="text" class="form-control" id="desc" placeholder="请描述这款pizza的特点...">
            </div>
            <h3 class="text-warning">尺寸 & 价格</h3>
            <div class="form-row ">
                <div class="col-md-6 pl-3">
                    <div class="form-group clearfix">
                        <label for="size1" class="col-form-label float-left">尺寸:</label>
                        <div class="col-md-6 float-left">
                            <select v-model="newPizza.options[0].size" id="size1" class="form-control">
                                <option >6</option>
                                <option >8</option>
                                <option>10</option>
                                <option>14</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group clearfix">
                        <label for="price1" class="col-form-label float-left">价格:</label>
                        <div class="col-md-10 float-left">
                            <input v-model="newPizza.options[0].price" type="text" class="form-control" id="price1">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 pl-3">
                    <div class="form-group clearfix">
                        <label for="size2" class="col-form-label float-left">尺寸:</label>
                        <div class="col-md-6 float-left">
                            <select v-model="newPizza.options[1].size" id="size2" class="form-control">
                                <option >7</option>
                                <option >9</option>
                                <option>10</option>
                                <option>12</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group clearfix">
                        <label for="price2" class="col-form-label float-left">价格:</label>
                        <div class="col-md-10 float-left">
                            <input v-model="newPizza.options[1].price" type="text" class="form-control" id="price2">
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block" @click.prevent="addPizza">添加PIZZA</button>
        </form>
    </div>
</template>

<script>
//引入axios
import axios from 'axios'
    export default {
        name:'Newpizza',
        data(){
            return {
                msg:'',
                newPizza:{
                    name:'',
                    desc:'',
                    options:[
                        {
                            size:'',
                            price:''
                        },
                        {
                            size:'',
                            price:''
                        }
                    ]
                }
            }
        },
        methods:{
            addPizza(){
                 //非空验证
                 var formData={
                    name:this.newPizza.name,
                    desc:this.newPizza.desc,
                    options:[
                        {
                            size:this.newPizza.options[0].size,
                            price:this.newPizza.options[0].price
                        },
                        {
                            size:this.newPizza.options[1].size,
                            price:this.newPizza.options[1].price
                        }
                    ]
                 }
                if(this.newPizza.name==''){
                    this.msg='*请输入商品名称'
                }else if(this.newPizza.desc==''){
                    this.msg='*请输入商品描述'
                }else if(this.newPizza.options[0].size==''){
                    this.msg='*请选择商品尺寸'
                }else if(this.newPizza.options[0].price==''){
                    this.msg='*请输入商品价格'
                }else if(this.newPizza.options[1].size==''){
                    this.msg='*请选择商品尺寸'
                }else if(this.newPizza.options[1].price==''){
                    this.msg='*请输入商品价格'
                }else{
                     axios.post('./lh-menu.json',formData)
                    .then(res=>{
                        // console.log(res.data,'数据上次成功')
                        // location.reload()
                        //给formData绑定id才能找到对应项删除
                        formData.id=res.data.name
                        // this.$router.push('/menu')
                        //把数据提交到vuex
                        this.$store.commit('pushMenuItems',formData)
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