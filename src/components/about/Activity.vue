<template>
    <div class="clearfix">
       <div class="card float-left mr-3" style="width: 30%;" v-for="(product,index) in products" :key='index'>
            <img class="card-img-top" :src="product.src" :alt="product.name" :title="product.name">
            <div class="card-body">
                <h5 class="card-title text-primary" :title="product.name">{{product.name}}</h5>
                <p class="card-text text-muted" :title="product.text">{{product.text}}</p>
            </div>
            <span class="btn btn-primary btn-block" @click="toDetails(product)">查询活动</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Activity',
        data(){
            return {
                products:[
                    {src:'../../../static/imgs/1.jpg',name:'豪华pizza套餐大降价',text:'六一七天乐，越吃越快乐'},
                    {src:'../../../static/imgs/2.jpg',name:'BBQ鸡肉pizza，美味味不可挡',text:'只有你想象不到的优惠哦'},
                    {src:'../../../static/imgs/3.jpg',name:'吃金枪鱼pizza,赢夏威夷双人七日游',text:'快来订购吧，下一个幸运儿就是你!'}
                ]
            }
        },
        methods:{
            toDetails(product){
                this.$router.push({
                    name:'Details',
                    params:{product}
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