<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <span>注册</span>
        </div>
        <div class="body">
           <form>
                <div>
                    <span class="mui-icon mui-icon-person"></span>
                    <input type="text" placeholder="请输入常用手机号">
                </div>
                <div>
                    <span class="mui-icon mui-icon-locked"></span>
                    <input type="text" placeholder="请输入登录密码">
                    <span class="mui-icon mui-icon-eye"></span> 
                </div>
               <router-link to="#">注册</router-link>
               <ul>
                    <li>
                        <router-link to="#">邮箱账号登录</router-link>
                    </li>
                    <li>
                        <router-link to="#">短信验证登录</router-link>
                    </li>
                    <li>
                        <router-link to="#">忘记密码？</router-link>
                    </li>
               </ul>

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
       
       margin:5px 10px;
   }
    .header>span:last-child{
        margin-left:148px;
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
   .body form ul{
       list-style:none;
   }
   .body form ul li{
      float:left;
      margin-left:20px;
   }
   .body form ul li a{
       font-size:12px;
       color:#000;
   }
</style>