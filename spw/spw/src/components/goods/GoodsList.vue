<template>
    <div class="app-goodslist">
        <div class="goods-item" v-for="item in list" :key="item.id">
            <img src="http://127.0.0.1:3000/img/banner1.png" @click="getDetail(item.id)">
            <h3 class="title">小辣椒{{item.title}}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.now}}</span>
                    <span class="old">{{item.old}}</span> 
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{item.q}}件</span> 
                </p>
            </div>     
        </div>
        <div></div>
    </div>
</template>
<script>
    export default{
        data(){                                                                      
            return{
                list:[
                    {id:1,title:"123",now:"99.99",old:"1999",q:2},
                    {id:2,title:"456",now:"69.99",old:"1999",q:1},
                    {id:3,title:"789",now:"19.99",old:"1999",q:3}
                ]
            }
        },
        methods:{
            getDetail(id){
                console.log(id);
                this.$router.push("/home/goodsinfo/"+id);
            }
        }
    }
</script>
<style>
    .app-goodslist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:7px;
    }
    .app-goodslist .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:293px;
    }
    .app-goodslist .goods-item img{
        width:100%;
    }
    .app-goodslist .goods-item .now{
        color:red;
        font-weight:bold;
        font-size:16px;
    }
    .app-goodslist .goods-item .old{
        font-size:12px;
        text-decoration:line-through;
        margin-left:10px;
    }
</style>