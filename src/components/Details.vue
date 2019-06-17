<template>
    <div class="details container col-6">
        <div class="clearfix">
            <div class="card" style="width: 100%;" >
                    <img class="card-img-top" :src="product.src" :alt="product.name" :title="product.name">
                    <div class="card-body text-center">
                        <h5 class="card-title text-primary" v-if="product.num">{{product.name}}*{{product.num}}</h5>
                        <h5 class="card-title text-primary" v-else>{{product.name}}</h5>
                        <p class="card-text text-danger" v-show="product.flag==false">待付款</p>
                        <p class="card-text text-success" v-show="product.flag">已完成支付</p>
                        <p class="card-text text-success" v-show="product.text">{{product.text}}</p>
                    </div>
                    <span class="btn btn-primary btn-block" @click="goBack">返回</span>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Details',
        data(){
            return{
                product:{}
            }
        },
        mounted(){
            this.product=this.$route.params.product
            // console.log(this.product)
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>