<template>
   <div class="clearfix">
       <div class="card float-left mr-3" style="width: 30%;" v-for="(product,index) in products" :key='index'>
            <img class="card-img-top" :src="product.src" :alt="product.name" :title="product.name">
            <div class="card-body">
                <h5 class="card-title text-primary text-center">{{product.name}}</h5>
                <p class="card-text text-success" :title="product.text">{{product.text}}</p>
            </div>
            <span class="btn btn-primary btn-block" @click="toDetails(product)">快递查询</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Delivery',
         data(){
            return {
                products:[
                    {src:'../../../static/imgs/4.jpg',name:'顺丰速运',text:'您的快递已发送至河北张家口'},
                    {src:'../../../static/imgs/5.jpg',name:'韵达速递',text:'您的快递已发送至河南洛阳'},
                    {src:'../../../static/imgs/6.jpg',name:'百世快递',text:'您的快递已发送至山东青岛'}
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
    .card-body h5,.card-body p{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
</style>