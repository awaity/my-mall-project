<template>
    <div class='home'>
        <!-- 轮播图 -->
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/imgs/banner1.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/imgs/banner2.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/imgs/banner3.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/imgs/banner4.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/imgs/banner5.jpg" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" id="pagination1"></div>
            <!-- 如果需要导航按钮
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </div>
        <!-- 欢迎框 -->
        <div class="card text-center card1">
            <img src="../assets/logo.png" alt="">
             <div class="card-header text-warning"><h1>欢迎光临</h1></div>
                <div class="card-body">
                    <h5 class="card-title text-success">本店近期有新品哟~~~快来品尝吧.</h5>
                    <p class="card-text">注册成为本店尊贵会员，订餐可享8折优惠哦.</p>
                </div> 
                <div class="btn btn-warning text-white" @click='onOrder'><h3>立即点餐</h3></div>  
        </div>
        <div class="text-center mt-5 mb-5">
            <img src="../assets/imgs/news.png" alt="" width="269" >
        </div>
        <div class="container">
            <div class="row">
                <div class="col-5 ">
                    <div class="swiper-container swiper-container2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide ">
                                <img src="../../static/imgs/1.jpg" alt="">
                                <h3 class="mt-5">保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》</h3>
                                <p>随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美...</p>
                                <a href="#" class="btn btn-outline-warning">查看详情</a>
                            </div>
                            <div class="swiper-slide">
                                <img src="../../static/imgs/2.jpg" alt="">
                                <h3 class="mt-5">MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达</h3>
                                <p>随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美...</p>
                                <a href="#" class="btn btn-outline-warning">查看详情</a>
                            </div>
                            <div class="swiper-slide">
                                <img src="../../static/imgs/3.jpg" alt="">
                                <h3 class="mt-5">专业食品安全检测团队进驻美团点评 从此舌尖安全有他们守护</h3>
                                <p>随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美...</p>
                                <a href="#" class="btn btn-outline-warning">查看详情</a>
                            </div>
                            <div class="swiper-slide">
                                <img src="../../static/imgs/2.jpg" alt="">
                                <h3 class="mt-5">Trustdata发布2018上半年外卖份额数据 美团饿了么百度631格局</h3>
                                <p>随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美...</p>
                                <a href="#" class="btn btn-outline-warning">查看详情</a>
                            </div>
                            <div class="swiper-slide">
                                <img src="../../static/imgs/1.jpg" alt="">
                                <h3 class="mt-5">美团上线闪购业务 以“快”破局助力零售升级</h3>
                                <p>随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美...</p>
                                <a href="#" class="btn btn-outline-warning">查看详情</a>
                            </div>
                            <div class="swiper-slide">
                                <img src="../../static/imgs/3.jpg" alt="">
                                <h3 class="mt-5">美团城市新青年 外卖骑手正能量图鉴</h3>
                                <p>随着大众餐饮消费升级，外卖行业发展迅速。数据显示，2017年美团外卖日完成订单量突破2100万单，稳居行业第一，成绩背后离不开53万外卖骑手的辛勤付出。近日，美...</p>
                                <a href="#" class="btn btn-outline-warning">查看详情</a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="swiper-pagination dot" id="dot"></div>
                    <div class="span">0{{id}}</div> 
                    <div class="underbg bg-warning"></div>
                </div>
                <div class="col-7">
                    <h3 class="text-center mb-5">2019年媒体报道</h3>
                    <ul class="news">
                        <li v-for="(item,index) in news" :key="index"><span class="num">{{index+1}}</span><span class="content">{{item}}</span></li>
                    </ul>
                    <a href="#" class="text-warning ml-5">全部报道 》</a>
                </div>
            </div>
        </div>
        <div class="container mt-5 text-center com-son">
            <!-- 组件嵌套 -->
            <h3 >热门活动</h3>
            <Activity class="to-center"></Activity>
            <h3 >历史订单</h3>
            <History class="to-center"></History>
            <!-- 路由嵌套 -->
            <h3>快递信息</h3>
        </div>
        
    </div>
</template>

<script>
//引入swiper轮播图插件
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.min.css'
//引入组件
import Activity from './about/Activity'
import History from './about/History'
    export default {
        name:'Home',
        data(){
            return {
                id:1,
                news:[
                    '保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》',
                    'MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达',
                    '专业食品安全检测团队进驻美团点评 从此舌尖安全有他们守护',
                    'Trustdata发布2018上半年外卖份额数据 美团饿了么百度631格局',
                    '美团上线闪购业务 以“快”破局助力零售升级',
                    '美团城市新青年 外卖骑手正能量图鉴'
                    ]
            }
        },
        components:{
            Activity,
            History
        },
        mounted(){
             this.swiper1()
             this.swiper2()
        },
        methods:{
            onOrder(){
                this.$router.push('/menu')
            },
            swiper1(){
                var mySwiper1 = new Swiper ('.swiper-container1', {
                 //自动切换
                autoplay: {
                    delay: 5000,  
                    disableOnInteraction: false,
                },
                speed: 700,
                allowTouchMove: false,
                //延迟加载
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 3,
                },
                centeredSlides: true,
                spaceBetween : 50,
                slidesOffsetBefore: 40,
                // 循环模式选项
                loop: true,
                slidesPerView : 'auto',
                on: {
                    slideChangeTransitionEnd: function(){
                    this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
                    },
                    slideChangeTransitionStart: function(){
                    this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
                    },
                },
                 // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                    renderBullet: function (index, className) {
                        return '<div class="' + className + '"><span></span><i></i></div>';
                    },
                }
            })      
            },
            swiper2(){
                 var that=this
                 var mySwiper2 = new Swiper('.swiper-container2',{
                    direction : 'vertical',
                    speed:800,
                    loop: true,
                    effect : 'cube',
                    roundLengths : true,
                    // 如果需要分页器
                    pagination: {
                    el: '#dot',
                    clickable:true
                    },
                    on: {
                    slideChange: function () {
                        // console.log(this.activeIndex);
                        //序号显示异常，重新赋值修改
                        let index =this.activeIndex
                        if(index>6){
                            index=1
                        }
                        if(index<1){
                            index=6
                        }
                        that.id =index
                        // console.log(that.id)
                    },
                    },
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                });
            }
        }
    }
</script>

<style scoped>
    .home{
        position: relative;
    }
    .swiper-container1 {
        width: 100%;
         padding-bottom:40px;
    }
    .swiper-container1 .swiper-slide {
	    width:978px;
		transition-timing-function:linear;
    }  
    .swiper-container1 .swiper-slide img{
        width: 100%;
        cursor: pointer;
        border-radius: 4px;
    }
    .card1{
        position: absolute;
        left: 200px;
        top: 50px;
        z-index: 999;
        border: 1px solid #ccc;
    }
    /* 第二个轮播图 */
    .swiper-container2 {
        width: 300px;
        height: 500px;
        /* position: relative; */
        left: 3px;
        top:0;
        border-radius: 10px;
        background: #eee;
    }
    .swiper-container2 .swiper-slide img{
        width: 100%;
        position:relative;
    }
    .swiper-container2 .swiper-slide h3{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 20px;
        background: #eee;
    }
    .swiper-container2 .swiper-slide p{
        padding: 10px 20px;
        background: #eee;
    }
    .swiper-container2 .swiper-slide a{
        margin-left: 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .underbg{
        background:orange;
        width: 300px;
        height: 500px;
        position: absolute;
        left: 25%;
        top: 30px;
        border-radius: 10px;
        z-index: -1;
    }
    .span{
        position: absolute;
        bottom: 100px;
        right: 62px;
    } 
    /* 热门活动 */
    .to-center{
        padding-left: 70px;
    }
    .com-son h3{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    /* 新闻报道 */
    .news{
        list-style: none;
    }
    .news li{
        height: 60px;
        line-height: 60px;
    }
    .num{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ccc;
        text-align: center;
        line-height: 20px;
        margin-right: 10px;
    }
    .content{
        display: inline-block;
        /* transform: scale(1) */
    }
    .content:hover{
        width: 200px;
        height: 40px;
        font-weight: bolder;
        cursor: pointer;
        transform: scale(1.3);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 22px;
    }
    
</style>
<style>
    /* 分页器时vue挂载后创建的，因此覆盖样式必须写在scoped样式之外 */
    .swiper-container1 .swiper-pagination-bullet{
		background:none;
		opacity:1;
		margin:0 6px !important;
		width:9px;
		height:9px;
		position:relative;
		outline:none;
        vertical-align:middle;
    }
	.swiper-container1 .swiper-pagination-bullet span{
		width:3px;
		height:3px;
		background:#CCC;
		display:block;
		border-radius:50%;
		margin-top:3px;
		margin-left:3px;
	}
	.swiper-container1 .swiper-pagination-bullet i{
		background:#000;
		height:1px;
		width:20px;
		position:absolute;
		top:4px;
		transform:scaleX(0);
		transform-origin:left;
		z-index:3;
		transition-timing-function:linear;
    }
	.swiper-container1 .swiper-pagination-bullet-active span,.swiper-container1 .swiper-pagination-bullet:hover span{
		width:9px;
		height:9px;
		margin-top:0;
		margin-left:0;
		background:#000;
		position:relative;
		z-index:1;
    }
	.swiper-container1 .swiper-pagination-bullet-active i{
		animation:middle 6s;
    }
	.swiper-container1 .swiper-pagination-bullet:first-child.swiper-pagination-bullet-active i{
		animation:first 6s;
    }
	.swiper-container1 .swiper-pagination-bullet:last-child.swiper-pagination-bullet-active i{
		animation:last 6s;
    }				
	@keyframes first{
	  0% {transform:scaleX(0.5);left:0px;}/*091*/
	  100% {transform:scaleX(1);left:2px;} /*0915*/
	}
	@keyframes last{
	  0% {transform:scaleX(0.7);left:-10px;}/*1090*/
	  20% {transform:scaleX(0.3);left:2px;} /*090*/
	  100% {transform:scaleX(0.3);left:0px;} /*090*/
	}		
	@keyframes middle{
	  0% {transform:scaleX(0.7);left:-10px;}/*1091*/
	  20% {transform:scaleX(0.45);left:2px;}/*092*/
	  100% {transform:scaleX(1);left:2px;} /*0913*/
    }
    /* 第二个轮播图 */
    .dot{
        position: absolute;
        width: 10px;
        height: 50px;
        z-index: 999;
        bottom: 50px;
        left: 400px;
    }
    .dot .swiper-pagination-bullet{
        display: block;
        margin-top: 5px;
        border: 1px solid #000;
        outline: none;
    }
    .dot .swiper-pagination-bullet-active,
    .dot .swiper-pagination-bullet:hover{
        background: #000;
    }
</style>