<template>
    <div class="contact">
        <div class="card text-center">
             <div class="card-header bg-info text-white">联系我们</div>
                <div class="card-body">
                    <h5 class="card-title text-warning">欢迎来到爱上披萨小店.</h5>
                    <p class="card-text">如果您有任何意见或建议，请联系我们.</p>
                    <!-- 路由导航层 -->
                    <nav>
                        <router-link to="/about/address" class="btn btn-primary">地址信息</router-link>
                        <router-link to="/about/person" class="btn btn-primary">法人代表</router-link>
                        <router-link to="/about/tel" class="btn btn-primary">电话热线</router-link>
                    </nav>
                    <!-- 路由展示层 -->
                    <router-view></router-view>
                </div>
                <div class="card-footer text-muted">
                    20 days ago
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Contact'
    }
</script>

<style scoped>
    .card-header{
        font-size: 2rem;
    }
</style>