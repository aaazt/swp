<template>
    <div class="app-comment">
        <h1>评论子组件</h1>
        <hr>
        <!--发表评论的区域-->
        <textarea placeholder="请吐槽最多120个字" maxlength="120" v-model="msg" @keyup.13="postComment"></textarea>
        <mt-button size="large" @click="postComment">发表评论</mt-button>
        <!--显示评论的区域-->
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in list" :key="item.id">
                <div class="cmt-info">第{{i+1}}楼 用户:{{item.user_name}} 发表时间：{{item.ctime | dateFilter}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default{
        data(){return{
            msg:"",
            pageIndex:0,   
            pageSize:5,
            list:[]
        }},
        props:["id"],//接收父组件的参数
        created(){
            this.getMore();
        },
        methods:{
            getMore(){
                this.pageIndex++;
                //判断是否有下一页的数据
                //this.hasMore = this.pageIndex <= this.pageCount;
                //如果没有下一页数据，停止函数执行
                //if(!this.hasMore){
                //    return
                //}
                var url="getComment";
                url+="?nid="+this.id+"&pno="+this.pageIndex+"&pageSize="+this.pageSize;
                this.$http.get(url).then(result=>{
                    // console.log(result);
                    // this.list = result.body.data;
                    //将原有的翻页，改为一页一页的累加
                    var rows = this.list.concat(result.body.data);
                    this.list = rows;
                    //保存总页数
                    this.pageCount = result.body.pageCount
                })
            },
            postComment(){
                var nid=this.id;
                var pmsg=this.msg;
                //3.判断评论内容不能为空，提示框
                if(pmsg.trim().length==0){
                   Toast("评论内容不能为空")
                   return;
                }
                //4.发送post请求
                var url="http://127.0.0.1:3000/postcomment";
                this.$http.post(url,{nid:nid,msg:pmsg}).then(result=>{
                    console.log(result);
                    //5.获取服务器程序返回
                    //6.提示用户“评论成功”
                    Toast("发表成功");
                    this.pageIndex = 0;
                    this.list = [];
                    this.getMore();
                    this.msg="";
                })
            }
        }
    }
</script>
<style>
    .app-comment h1{
        font-size:18px;
    }
    .app-comment textarea{
        font-size:14px;
        height:85px;
        margin:0;
    }
    .app-comment .cmt-list{
        margin:5px 0;
    }
    .app-comment .cmt-list .cmt-info{
        line-height:30px;
        background:#ccc;
    }
    .app-comment .cmt-list .cmt-body{
        line-height:35px;
        text-indent:2em;
    }
</style>