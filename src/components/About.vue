<template>
    <div class='container'>
        <div class="row mt-5">
            <!-- 路由导航层 -->
            <nav class="col-4 text-center">
                <router-link to="/about/activity" class="list-group-item list-group-item-action list-group-item-danger mt-3">热门活动</router-link>
                <router-link to="/about/contact" class="list-group-item list-group-item-action list-group-item-success mt-3">联系我们</router-link>
                <router-link to="/about/history" class="list-group-item list-group-item-action list-group-item-primary mt-3">历史订单</router-link>
                <router-link to="/about/delivery" class="list-group-item list-group-item-action list-group-item-warning mt-3">快递信息</router-link>
            </nav>
            <div class="col-8 mt-3">
                 <!-- 路由展示层 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'About',
    }
</script>

<style scoped>

</style>