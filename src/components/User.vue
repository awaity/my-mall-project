<template>
    <div class="user container col-6">
        <div class="card text-center mt-5">
             <img class="card-img-top" src="../../static/imgs/timg.gif" alt="">
            <div class="card-body">
                <h3 class="card-title text-warning mb-3">亲爱的{{username}},欢迎回家.</h3>
                <p class="card-text">如果您有任何意见或建议，请联系我们.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'User',
        data(){
            return {
                username:''
            }
        },
        mounted(){
            this.username=this.$route.params.currentUser
        }
    }
</script>

<style scoped>

</style>