<template>
    <div class="app-homeContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon-extra mui-icon-extra-sweep"></span>
            <div class="mui-input-row mui-search">
                <span class="mui-icon mui-icon-search"></span>
                <input type="search" class="mui-input-clear" placeholder="羊绒|瑞士男表|及踝靴">
            </div>
            <img src="http://127.0.0.1:3000/img/pc_bag.png"/>
        </div>
        <!--nav-->
        <div class="nav">
            <ul>
                <li v-for="(item,index) in nav_list" v-text="item" :class="{active:index==isActive}" @click="active(index)"></li>
            </ul>
        </div>
        <!--2.轮播图-->
        <mt-swipe :auto="4000">    <!--:show-indicators="false"不显示轮播的高亮点-->
            <mt-swipe-item v-for="item in list" :key="item.id">
               <img :src="item.img_url" />
            </mt-swipe-item> 
        </mt-swipe>
        <!--3.六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../img/menu1.png">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a @click.stop.prevent="jumpShop()">
                    <img src="../../img/menu2.png">
                    <div class="mui-media-body">商品</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/shop">
                    <img src="../../img/menu3.png">
                    <div class="mui-media-body">购物车</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="home/photo">
                    <img src="../../img/menu4.png">
                    <div class="mui-media-body">图片列表</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu5.png">
                    <div class="mui-media-body">电话</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu6.png">
                    <div class="mui-media-body">更多</div>
                </a>
            </li>
        </ul> 
    </div>
</template>
<script>
    export default{
        data(){ return{
            nav_list:["推荐","黑五预热","女士","男士","箱包","鞋靴","专柜","儿童"],
            list:[],
            isActive:false,
        } },
        methods:{
            active(index){
                this.isActive=index;
            },
            getImage(){
                //发送ajax请求并且获取图片列表并且显示
                var url="http://127.0.0.1:3000/imagelist";
                this.$http.get(url).then(result=>{
                    console.log(result.body);
                    //获取返回数据，保存在list属性中
                    this.list = result.body;
                })                
            },
            jumpShop(){
                //this.$router.push("/home/shop?id=15");
                this.$router.push("/home/goodslist");
            }
        },
        created(){
            this.getImage();
        }
    }
</script>
<style scoped>
    /*自定义样式*/
    /*.app-homeContainer header.mint-header{
        background-color:#333;
    }*/
    .active{
        color:#f11;
        display:inline-block;
        border-bottom:2px solid #000;
    }
    .header{
        height:30px;
        margin:0;
        padding:0;
    }
    .mui-icon-extra-sweep{
        height:18px;
        width:18px;
         width:10%;
    }
    .mui-input-row{
        height:25px;
        width:75%;
        display:inline-block;
        background:#fff !important;
        position:relative;
    }
    .mui-input-row input{
        background:#fff!important;
        font-size:10px!important;
        padding-left:30px!important;
    }
     .mui-input-row span{
         position:absolute;
         left:3px;
     }
    .header img{
        height:18px;
        width:18px;
        margin-left:30px;
    }
    .nav ul{
        list-style:none;
    }
    .nav ul li{
        float:left;
        font-size:12px;
        margin-left:10px;
    }
    /*轮播图*/ 
    .app-homeContainer .mint-swipe{
        height:180px;
        width:100%;
    }
    .app-homeContainer .mint-swipe-item img{
        width:100%;
        height:100%;
    }
    /*六宫格*/
    .app-homeContainer .mui-grid-view.mui-grid-9{
        background:#fff !important;
        border:0;
    }
    .app-homeContainer .mui-grid-view.mui-grid-9 img{
        width:60px;
        height:60px;
    }
    .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    } 
</style>