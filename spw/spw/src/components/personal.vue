<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span>个人中心</span>
            <span class="mui-icon mui-icon-search"></span>
            <img src="http://127.0.0.1:3000/img/pc_bag.png"/>
        </div>
        <div class="divide"></div>
        <div class="body">
            <ul>
                <li class="fl">
                    <router-link to="/login">登录/注册</router-link>
                </li>
                <div class="divide"></div>
                <li>
                    <span class="mui-icon-extra mui-icon-extra-heart"></span>
                    <span>愿望清单</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <span class="mui-icon-extra mui-icon-extra-order"></span>
                    <span>订单</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <span class="mui-icon-extra mui-icon-extra-custom"></span>
                    <span>退款/售后</span>
                   <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-chat"></span>
                    <span>在线客服</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-email"></span>
                    <span>消息</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-help"></span>
                    <span>帮助中心</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <span class="mui-icon mui-icon-gear"></span>
                    <span>设置</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
            </ul>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){ return{

        } },
        methods:{
           
        },
        created(){
          
        }
    }
</script>
<style scoped>
    .header{
        margin-bottom:10px;
    }
   .header>span:first-child {
       margin-left:160px;
       height:20px;
       width:60px;
       display:inline-block;
       font-size:15px;
   }
   .header .mui-icon{
        margin-left:38px;
        margin-right:10px;
   }
   .header img{
      margin-right:10px;
      display:inline-block;
      margin-right:0px;
   }
   .divide{
       width:100%;
       height:7px;
       background:#f5f5f5;
   }
   .body ul{
       list-style:none;
       margin:0;
       padding:0;
   }
   .body ul li{
       display:block;
       border-top:1px solid #f5f5f5;
       padding:10px 10px;
       font-size:13px;
   }
   .body ul .fl{
       display:flex;
       justify-content:space-around;
       border:none;
   }
   .body ul .fl>a{
        color:#000;
        font-size:15px;
        display:block;
        padding:10px 20px;
        border:1px solid #aaa;
        border-radius:8%;
        text-align:center;
        vertical-align:center;
   }
    .body ul li>span:last-child{
        float:right;
        font-size:15px;
    }
    .body ul li>span:first-child{
        font-size:18px;
        margin-right:15px!important;
    }
</style>