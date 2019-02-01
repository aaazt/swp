<template>
    <div class="app-photo">
        <!--mui card-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="photo-list">
                        <li v-for="item in list" :key="item.id">
                            <img v-lazy="item.img_url">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--懒加载图片列表-->
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getPhotoList(){
                this.$http.get("imagelist").then(result=>{
                    this.list = result.body;
                })
            }
        },
        created(){
            this.getPhotoList();
        }
    }
</script>
<style>
    .photo-list{
        list-style:none;
        background:#333;
        padding-left:0;
    }
    .photo-list li img{
        width:100%;
    }
    /*lazyload 组件专用样式*/
    .photo-list li img[lazy=loading]{
        width:100%;
        height:100px;
        margin:auto;
        color:#fff;
    }
</style>