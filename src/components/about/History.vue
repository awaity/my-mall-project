<template>
    <div class="clearfix">
       <div class="card float-left mr-3" style="width: 30%;" v-for="(product,index) in products" :key='index'>
            <img class="card-img-top" :src="product.src" :alt="product.name" :title="product.name">
            <div class="card-body text-center">
                <h5 class="card-title text-primary">{{product.name}}*{{product.num}}</h5>
                <p class="card-text text-danger" v-show="product.flag==false">待付款</p>
                <p class="card-text text-success" v-show="product.flag">已完成支付</p>
            </div>
             <span class="btn btn-primary btn-block" @click="toDetails(product)">详情查询</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'History',
        data(){
            return {
                products:[
                    {src:'../../../static/imgs/1.jpg',name:'豪华pizza套餐',num:4,flag:true},
                    {src:'../../../static/imgs/2.jpg',name:'BBQ鸡肉pizza',num:12,flag:false},
                    {src:'../../../static/imgs/3.jpg',name:'金枪鱼pizza',num:8,flag:true}
                ]
            }
        },
        methods:{
            toDetails(product){
                this.$router.push({
                    name:'Details',
                    params:{
                        product
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .text-danger{
        margin-bottom: 0;
    }
</style>