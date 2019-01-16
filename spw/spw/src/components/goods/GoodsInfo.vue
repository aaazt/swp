
<template>
    <div class="app-goodsinfo">
        <!--1商品轮播区域-->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
				    <swiper-box :list="imglist"></swiper-box>
				</div>
			</div>
		</div>
        <!--2商品购买区域-->
        <div class="mui-card">
			<div class="mui-card-header">{{info.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                        市场价：<del>￥{{info.old}}</del>
                        销售价：<span class="now">￥{{info.now}}</span>
                    </p>
                    <p>
                        购买数量：
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minus()">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="5" v-model="val"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add()">+</button>
                        </div>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addCartTo">加入购物车</mt-button>
                    </p>
				</div>
			</div>
			<div class="mui-card-footer"></div>
		</div>
        <!--3商品参数区域-->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{info.pid}}</p>
                    <p>商品颜色：杰伦粉</p>
                    <p>商品运费：0</p>
				</div>
			</div>
			<div class="mui-card-footer"></div>
		</div>
    </div>
</template>
<script>
// 1.引入轮播图的子组件
import swiper from "../sub/swiper.vue";
import {Toast} from 'mint-ui';
// 2.引入 mui 的 js 库(严格模式下不能用，自己绑定事件)
//import mui from "../../lib/mui/js/mui.js"
export default {
    data(){
        return {
            imglist:[],
            val:1,
            info:{}
        } 
    },
    methods:{
        getGoodsInfo(){
            var id = this.$route.params.id;
            this.$http.get("goodsinfo?id="+id).then(result=>{
                this.info=result.body;
                console.log(this.info);
            })
        },
        getImageList(){
            //发送ajax请求获取图片列表并显示
            var url = "http://127.0.0.1:3000/imagelist";
            this.$http.get(url).then(result=>{
                this.imglist = result.body;
            })
        },
        add(){
            if(this.val!=999)
            this.val++;
        },
        minus(){
            if(this.val!=1)
            this.val--;
        },
        addCartTo(){
            //1.将商品编号和数量保存到服务器
              //1.1获取商品编号
              var id = this.$route.params.id;
              //1.2获取商品数量
              var count = this.val;
              //1.3发送请求
              this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
                   if(result.body.code==1){
                       //1.4添加成功，更新购物车中商品数量
                       this.$store.commit("increment",count);//修改了Vuex中的共享数据
                       Toast(result.body.msg);
                   }else{
                       Toast(result.body.msg);
                   }
              })
            //2.更新App.vue组件中购物车的数量
        }
    },
    created() {
        //console.log(this.$route.params.id);
        this.getImageList();
        this.getGoodsInfo();
    },
    //2.注册子组件
    components:{
        "swiper-box":swiper
    }
}
</script>
<style>
    
</style>