<template>
    <div class="shopcar mt-5 text-center">
        <h2 class="text-center text-warning">购物车</h2>
        <template v-if="newOrder.length>0">
            <table class="table text-center">
                <thead>
                    <tr class="bg-primary text-white">
                        <th>数量</th>
                        <th>种类</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in newOrder" :key='index'>
                        <td>
                            <button class="btn btn-primary" @click="reduce(item,index)">-</button>
                            <input type="number" v-model="item.quantity" class="text-center">
                            <button class="btn btn-primary" @click="item.quantity>=10?10:item.quantity++">+</button>
                        </td>
                        <td>{{item.name}}-{{item.size}}</td>
                        <td>{{item.price}}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">商品总件数：<strong class="text-danger">{{totalNum}}</strong></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-right">商品总金额：<strong class="text-danger">{{totalPrice}}</strong></td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-else>
                <img src="../../../static/imgs/tip.png" title="温馨提示">
                <h3 class="text-success">再忙，也要记得按时吃饭哦~</h3>
                <p class="mt-3 text-warning">快来点份PIZZA犒劳自己吧ヾ(๑╹◡╹)ﾉ"</p>
        </template>
    </div>
</template>

<script>
    export default {
        name:'Shopcar',
        props:['newOrder'],
        computed:{
            totalNum(){
                return this.newOrder.reduce((prev,next)=>{
                    return prev +next.quantity
                },0)
            },
            totalPrice(){
                return this.newOrder.reduce((prev,next)=>{
                    return prev + Number(next.quantity*next.price)
                },0)
            }
        },
        methods:{
            reduce(item,index){
                if(item.quantity<=1){
                    this.newOrder.splice(index,1)
                }else{
                    item.quantity--
                }
            }
        }
    }
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
        margin: 0; 
    }
    input{
        width: 50px;
        height: 38px;
    }
    .btn{
        vertical-align: top;
    }
</style>