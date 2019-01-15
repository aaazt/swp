<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span>分类</span>
            <span class="mui-icon mui-icon-search"></span>
            <img src="http://127.0.0.1:3000/img/pc_bag.png"/>
        </div>
        <div class="body">
            <ul>
                <li class="fl">
                    <router-link to="#">女士</router-link>
                    <router-link to="#">男士</router-link>
                    <router-link to="#">儿童</router-link>
                </li>
                <li>
                    <img src="" alt="">
                    <span>当季新品</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span>服装</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span>鞋靴</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span>箱包</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span>配件</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span>腕表</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="" alt="">
                    <span>美妆</span>
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
   .header>span:first-child {
       margin-left:167px;
       height:20px;
       width:50px;
       display:inline-block;
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
   .body ul{
       list-style:none;
       margin:0;
       padding:0;
       margin-top:20px;
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
     
   }
   .body ul .fl>a{
        color:#000;
        font-size:15px;
   }
    .body ul li>span:last-child{
        float:right;
        font-size:15px;
    }
</style>