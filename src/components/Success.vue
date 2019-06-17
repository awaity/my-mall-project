<template>
    <div class="success container col-6 text-center mt-5">
         <div class="card ">
            <div class="card-header bg-warning text-white"><h3>恭喜您注册成功</h3></div>
            <div class="card-body">
                <h5 class="card-title text-warning">恭喜您成为本店尊贵会员,现在订餐可享受88折优惠哦~~~</h5>
                <h5 class="card-text text-success">还有{{time}}秒自动跳转到登录页面<button class="btn btn-success" @click.prevent='jump'>点击跳转</button></h5>
            </div>
            <div class="card-footer text-muted">爱上披萨小店特别定制提醒</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Success',
        data(){
            return{
                time:5
            }
        },
        methods:{
            jump(){
                this.$router.push('/login')
            },
            countdown(){
                var timer=setInterval(()=>{
                    if(this.time==0){
                        this.$router.push('/login')
                        clearInterval(timer)
                    }else{
                        this.time--
                    }
                },1000)
            }
        },
        mounted(){
            this.countdown()
        }
    }
</script>

<style scoped>

</style>