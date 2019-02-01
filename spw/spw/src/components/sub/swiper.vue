<template>
    <div class="app-comment">
        <mt-swipe :auto="4000">    <!--:show-indicators="false"不显示轮播的高亮点-->
            <mt-swipe-item v-for="item in list" :key="item.id">
               <img :src="item.img_url" />
            </mt-swipe-item> 
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        props:["list"],//接收父组件的参数
    }
</script>
<style>
    .app-comment .mint-swipe{
        height:180px;
    }
    .app-comment .mint-swipe-item img{
        width:100%;
    }
</style>