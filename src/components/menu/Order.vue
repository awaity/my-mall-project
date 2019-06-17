<template>
    <div class="order mt-5 text-center">
        <h2 class="text-center text-warning">点餐</h2>
        <template v-if="newMenu.length>0">
        <table class="table text-center">
            <thead>
                <tr class="bg-primary text-white">
                    <th >尺寸</th>
                    <th >价格(元)</th>
                    <th >加入</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in newMenu" :key='index'>
                <tr>
                    <td colspan="3" class="text-success"><h4>{{item.name}}</h4></td>
                </tr>
                <tr>
                    <td colspan="3" class="text-info">{{item.desc}}</td>
                </tr>
                <tr v-for="(item1,index1) in item.options" :key='index1'>
                    <td>{{item1.size}}</td>
                    <td>{{item1.price}}</td>
                    <td><button class="btn btn1 btn-success text-white" data-toggle="tooltip" data-placement="top" title="最多可以添加10件商品" @click.prevent="addtoCar(item,item1)">+</button></td>
                </tr>
            </tbody>
        </table>
        </template>
         <template v-else>
                <img src="../../../static/imgs/tip.png" title="温馨提示">
                <h3 class="text-success">快来点餐啦~~~</h3>
                <p class="mt-3 text-warning">忙碌的日子里点份PIZZA犒劳自己吧ヾ(๑╹◡╹)ﾉ"</p>
        </template>
    </div>
</template>

<script>
    export default {
        name:'Order',
        props:['newMenu'],
        methods:{
            addtoCar(item,item1){
                this.$emit('ordering',{item:item,item1:item1})
            }
          
        },
        updated(){
            //每次更新时都会触发该函数
            $('.btn1').tooltip()
        }
    }
</script>

<style scoped>

</style>