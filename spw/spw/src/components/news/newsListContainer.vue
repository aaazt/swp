<template>
    <div class="app-newslist">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/home/newsinfo?id='+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>{{item.ctime | datetimeFilter}}</span>
                            <span>点击：{{item.point}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
        </ul>
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                pageIndex:0,   //属性显示当前页数
                pageSize:5,    //页大小
                hasMore:true,  //是否存在下一页数据
                pageCount:2,   //总页数
            }
        },
        methods:{
            //加载更多
            getMore(){
                this.pageIndex++;
                //判断是否有下一页的数据
                this.hasMore = this.pageIndex <= this.pageCount;
                //如果没有下一页数据，停止函数执行
                if(!this.hasMore){
                    return
                }
                var url="http://127.0.0.1:3000/newslist";
                url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
                this.$http.get(url).then(result=>{
                    //console.log(result);
                    //this.list = result.body.data;
                    //将原有的翻页，改为一页一页的累加
                    var rows = this.list.concat(result.body.data);
                    this.list = rows;
                    //保存总页数
                    this.pageCount = result.body.pageCount
                })
            },
        },
        created(){
            this.getMore();
        }
    }
</script>
<style>
    .app-newslist .mui-table-view li .mui-ellipsis{
        display:flex;
        font-size:12px;
        color:#333;
        justify-content:space-between;
    }
</style>