<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <span>手机账号登录</span>
            <router-link to="/register">注册</router-link>
        </div>
        <div class="body">
           <form>
                <div>
                    <span class="mui-icon mui-icon-person"></span>
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div>
                    <span class="mui-icon mui-icon-locked"></span>
                    <input type="text" placeholder="请输入登录密码">
                    <span class="mui-icon mui-icon-eye"></span> 
                </div>
               <router-link to="#">登录</router-link>
              

           </form>
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
       display:flex;
       justify-content:space-between;
       margin:5px 10px;
   }
   .body{
       margin:20px 10px;
   }
   .body form div{
       position:relative;
       
   }
    .body form div span{
       position:absolute;
    }
   .body form input{
       border:none;
       border-bottom:1px solid #f5f5f5;
       font-size:13px;
       padding-left:35px;
       color:#aaa;
   }
   .mui-icon-eye{
       right:5px;
   }
   .body form>a{
       display:block;
       width:100%;
       padding:10px 0;
       color:#fff;
       text-align:center;
       background:#aaa;
   }
   
</style>