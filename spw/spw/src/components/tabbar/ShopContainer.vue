<template>
    <div class="app-shop">
        <!--轮播图-->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
				    <swiper-box :list="imglist"></swiper-box>
				</div>
			</div>
		</div>
        <!--商品列表-->
        <div class="mui-card">
			<div class="mui-card-header">商品列表</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <!--2.1mui 左侧图片 右侧文字-->
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="item in shopCartList" :key="item.id">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="">
                                <div class="mui-media-body">
                                    {{item.title}}
                                    <p class='mui-ellipsis'>
                                        <span class="price">￥{{item.price}}</span>
                                        <span class="count">
                                            <!--2.3mui 按钮-->
                                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minus(item.id)">-</button>
                                                <input id="test" class="mui-input-numbox" type="number" v-model="item.count"/>
                                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add(item.id)">+</button>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
				</div>
			</div>
			<div class="mui-card-footer">合计：{{getSubTotal}}</div>
		</div>
    </div>
</template>
<script>
    import swiper from "../sub/swiper.vue";
    export default{
        data(){
            return{
                imglist:[],
                shopCartList:[],
            }
        },
        methods:{
            getImageList(){
                var url = "http://127.0.0.1:3000/imagelist";
                this.$http.get(url).then(result=>{
                    this.imglist = result.body;
                })
            },
            getshopCartList(){
                this.$http.get("shopCart").then(result=>{
                    this.shopCartList = result.body;
                })
            },
            add(id){
                for(var item of this.shopCartList){
                    if(item.id==id){
                        item.count++;
                        break;
                    }
                }
            },
            minus(id){
                for(var item of this.shopCartList){
                    if(item.id==id){
                        if(item.count<2)return;
                        item.count--;
                        break;
                    }
                }
            }
        },
        created(){
            this.getImageList();
            this.getshopCartList();
        },
        components:{
            "swiper-box":swiper
        },
        computed:{
            getSubTotal:function(){
                var sum=0;
                for(var item of this.shopCartList){
                    sum +=item.price * item.count;
                }
                return sum;
            }
        }
    }
</script>
<style>
    
</style>