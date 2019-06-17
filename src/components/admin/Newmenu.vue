<template>
    <div class="newmenu">
        <h2 class="text-center text-warning mb-5">菜单管理</h2>
        <div class="clearfix" style="height:38px;">
            <!-- <p class="text-danger" v-show="msg">{{msg}}</p> -->
        </div>
        <table class="table text-center">
            <thead>
                <tr class="text-white bg-primary">
                    <th >序号</th>
                    <th >商品名称</th>
                    <th >操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in newmenu" :key='index'>
                    <td >{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td><button class="btn btn-danger text-white" @click.prevent="delItem(item,index)">删除</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Newmenu',
        data(){
            return{
                // newmenu:[]
            }
        },
        mounted(){
            axios.get('./lh-menu.json')
            .then(res=>{
                const result=[]
                for (let key in res.data){
                    const item =res.data[key]
                    item.id=key
                    result.push(item)
                }
                this.$store.commit('setMenuItems',result)
            })
        },
        methods:{
            delItem(item,index){
                // console.log(item.id)
                axios.delete("./lh-menu/"+item.id+".json")
                .then(res=>{
                    console.log('success')
                    // location.reload()
                    this.$store.commit('deleteMenuItems',index)
                })
            }
        },
        computed:{
            newmenu(){
                return this.$store.getters.getMenuItems
            }
        }
    }
</script>

<style scoped>
    td{
        vertical-align: middle;
    }
</style>