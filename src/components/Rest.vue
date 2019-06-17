<template>
    <div class="container rest">
       <div class="con-top">
            <p class="mt-3">
                <span>当前城市：</span>
                <span class="text-success" ><span class="city1">{{cityName}}</span></span>
                <span class="text-danger city">切换城市</span>
                <city-selector id="city1" class="city-selector" field="city" placeholder="请选择城市" :city-list="cityList" v-model="cityId"></city-selector>
            </p>
            <p>
                <span class="float-left col-form-label">餐厅关键字：</span>
                <input type="text" v-model="info" placeholder="输入餐厅地址或餐厅名称" class="form-control col-4 float-left">
                <button @click="search()" class="btn btn-outline-primary ml-3">搜索</button>   
            </p>
            <ul class="list">
                <li @click="addInf(',旅游购物游乐场')">旅游购物游乐场</li>
                <li @click="addInf(',交通枢纽')">交通枢纽</li>
                <li @click="addInf(',早餐')">早餐</li>
                <li @click="addInf(',礼品卡')">礼品卡</li>
                <li @click="addInf(',支付宝')">支付宝</li>
            </ul>
        </div>
         <p class="mt-3">查询结果如下：</p>
         <p class="hot">热门活动：</p>
         <div class="textBox textBox1" @mouseenter='onenter' @mouseleave='onleave'>
            <transition name="fade">
                <span :key='text.id' class="text" >{{text.val}}</span>
            </transition>
        </div>
         <div class="textBox textBox2"  @mouseenter='onenter' @mouseleave='onleave'>
            <transition name="fade">
                <span :key='text.id' class="text" >{{text.val}}</span>
            </transition>
        </div>
        <div id="container1"></div>
        <div id="panel">
        </div>
    </div>
</template>

<script>
//引入citySelector
import {citySelector} from "vue2-city-selector";
import cityList from 'china-city-data';
import AMap from 'AMap'
import AMapUI from 'AMapUI'
    export default {
        name:"Rest",
         data(){
            return{
                // flag:true,
                info:'',
                addInfo:'',
                placeSearch:'',
                textArr: ['必胜客六一季 》','必胜客下午茶 》'],
                num: 0,
                timer:'',
                cityId: '',
                cityList,
                cityName:'北京'
            }  
        },
        watch:{
            cityId(){
                for(var key in this.cityList){
                    var result=this.cityList[key].find((item)=>{
                    return item.id==this.cityId  
                    })
                }
                if(result!=undefined){
                this.cityName=result.name 
                }
                if(this.cityId=='110100'||this.cityId=='120100'||this.cityId=='310100'||this.cityId=='500100'){
                    var id =this.cityId.replace(/100$/,'000')
                }else{
                    var id =this.cityId
                }
                this.placeSearch.setCity(id)
                this.search('必胜客')
            }
        },
        mounted() {
            this.getMap()
        },
        computed: {
            text() {
                return {
                    id: this.num,
                    val: this.textArr[this.num]
                }
            }
        },
        methods:{
            onenter(){
                clearInterval(this.timer)
            },
            onleave(){
                this.timer = setInterval(() => {
                    if (this.num == this.textArr.length - 1) {
                        this.num = 0
                    } else {
                        this.num += 1
                    }
                }, 1500)
            },
            getMap(){
            var that=this
            var map = new AMap.Map('container1', {
                zoom:15,//级别
                center: [116.397428, 39.90923],//中心点坐标
                viewMode:'3D',//使用3D视图
                expandZoomRange:true,
                zooms:[3,20],
            });
            AMap.plugin([
                'AMap.ToolBar',
                'AMap.Scale',
                'AMap.OverView',
                'AMap.MapType',
                'AMap.Geolocation',
            ], function(){
                // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                map.addControl(new AMap.ToolBar());

                // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                map.addControl(new AMap.Scale());

                // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
                map.addControl(new AMap.OverView({isOpen:true}));
            
                // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
                map.addControl(new AMap.MapType());
            
                // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
                map.addControl(new AMap.Geolocation());
            });
            AMap.service(["AMap.PlaceSearch"], function() {
            //构造地点查询类
            that.placeSearch = new AMap.PlaceSearch({ 
                pageSize: 5, // 单页显示结果条数
                pageIndex: 1, // 页码
                city: "010", // 兴趣点城市
                citylimit: false,  //是否强制限制在设置的城市内搜索
                map: map, // 展现结果的地图实例
                panel: "panel", // 结果列表将在此容器中进行展示。
                autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });
                //关键字查询
                that.placeSearch.search('必胜客')
            });
           /*  AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                var lngLats = getGridLngLats(map.getCenter(), 5, 5);
                    new SimpleMarker({
                        // iconLabel: '0',
                        //自定义图标地址
                        iconStyle: '../../static/imgs/0.png',
                        //设置基点偏移
                        offset: new AMap.Pixel(-19, -60),
                        map: map,
                        showPositionPoint: true,
                        position: lngLats[0],
                        zIndex: 100
                    });
                }) */
            },
            search(val){
                if(val){
                    this.placeSearch.search(val)
                }else{//关键字查询
                    this.placeSearch.search(this.info)
                }
            },
            addInf(val){
                this.placeSearch.search('必胜客'+val)
                // console.log(val+'必胜客')
            }
        }
    }
</script>

<style scoped>
    #container1 {
        width:800px; 
        height: 500px;
        position: absolute;
        left: 400px;
        top:240px; 
    }
   #panel {
        position: absolute;
        background-color: white;
        max-height: 80%;
        overflow-y: auto;
        top: 240px;
        left: 120px;
        width: 280px;
    }
    .con-top{
        border-bottom: 1px dotted #ccc;
        padding-bottom: 15px;
        position: relative;
    }  
    .city1{
         font-size: 20px;
         padding-right: 50px;
         color: rgb(238, 45, 45);
         font-weight: bold;
    }
    .city{
         color: rgb(238, 45, 45);
         font-weight: bold;
         z-index: 999;
         cursor: pointer;
         margin-left: 50px;
    }
   .list{
       list-style: none;
       margin: 0;
       padding: 0;
       padding-left: 90px;
       overflow: hidden;
       margin-top: -10px;
   }
   .list li{
       font-size: 14px;
       float: left;
       margin-left: 20px;
       cursor: pointer;
   }
   .list li:hover{
       background: #c40e1a;
       color: white;
   }
   .hot{
       position: absolute;
       top: 196px;
       left: 549px;
   }
   .textBox {
        width: 150px;
        height: 60px;
        line-height: 60px;
        color: #333;
        overflow: hidden;
        text-indent: 20px;
        position: absolute;
        cursor: pointer;
    }
    .textBox1{
        left: 590px;
        top: 178px; 
    }
    .textBox2{
        left: 800px;
        top: 178px; 
    }
    .textBox1{
        left: 590px;
        top: 178px; 
    }
    .textBox1 .text,.textBox2 .text{
        width: 150px;
        font-size: 12px;
        text-align: center;
        position: absolute;
        bottom: 0;
        margin: 0;
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 1s linear;
    }
    .fade-enter{
        opacity: 0;
        transform: translateY(60px) scale(1)
    }
    .fade-leave-to{
        opacity: 0;
        transform: translateY(-60px) scale(0.6)
    }
</style>
<style>
    .amap_lib_placeSearch_poi,.selected .amap_lib_placeSearch_poi{
        width: 36px;
        height: 36px;
        background: url('../../static/imgs/0.png') no-repeat;
        background-size: 36px;
    }
    #city{ 
         opacity: 0;
         color: red;
         z-index: -999; 
         font-weight: bold;
         border: none
    }
    .vue-city-selector[data-v-3c4f1937] input{
        opacity: 0;
        z-index: -999;
        color: red;
        font-weight: bold;
        border: none
    }
  .vue-city-selector[data-v-3c4f1937] {
        position: absolute;
        top: -102px;
        left: 217px;
        padding-top: 100px;
        cursor: pointer;
    }
</style>