<template>
    <div class='container mt-5'>
        <div class="row">
            <div class="col-7">
                <Newpizza></Newpizza>
            </div>
            <div class="col-5">
                <Newmenu></Newmenu>
            </div>
        </div>
    </div>
</template>

<script>
import Newpizza from './admin/Newpizza'
import Newmenu from './admin/Newmenu'
    export default {
        name:'Admin',
        data(){
            return{

            }
        },
        components:{
            Newpizza,
            Newmenu
        }
    }
</script>

<style scoped>

</style>