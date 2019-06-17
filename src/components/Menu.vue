<template>
    <div class='container'>
        <!-- menu页面 -->
        <div class="row">
            <div class="col-7">
                <Order :newMenu='newMenu' @ordering='getOrdering'></Order>
            </div>
            <div class="col-5">
                <Shopcar :newOrder="newOrder"></Shopcar>
            </div>
        </div>
    </div>
</template>

<script>
//引入子组件
import Order from './menu/Order'
import Shopcar from './menu/Shopcar'
import axios from 'axios'
    export default {
        name:'Menu',
        data(){
            return {
                newMenu:[],
                newOrder:[]
            }
        },
        components:{
            Order,
            Shopcar
        },
        mounted(){
            axios.get('./lh-menu.json')
            .then(res=>{
                for (let key in res.data){
                    this.newMenu.push(res.data[key])
                }
            //    console.log(this.newMenu)
            })
        },
        methods:{
            getOrdering(val){
                // console.log(val)
                // 添加之前先判断是否重复
                const product={
                    name:val.item.name,
                    size:val.item1.size,
                    price:val.item1.price,
                    quantity:1
                    }
                const trueOrder=this.newOrder.filter((item)=>{
                    return item.name===val.item.name &&item.size===val.item1.size
                })
                if(trueOrder.length>0){
                    // console.log('当前商品已存在')
                    if(trueOrder[0].quantity>=10){
                        trueOrder[0].quantity=10
                    }else{
                        trueOrder[0].quantity++
                    }
                   
                }else {
                    this.newOrder.push(product)
                }
                // console.log(this.newOrder)
            }
        }
    }
</script>

<style scoped>

</style>