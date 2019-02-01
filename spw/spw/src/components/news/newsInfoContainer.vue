<template>
    <div class="app-newsinfo">
        <h3>{{info.title}}</h3>
        <div>{{info.content}}</div>
        <!--保存评论的子组件  3.调用子组件-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    //1.引入子组件
    import comment from "../sub/comment.vue"
    export default{
        data(){
            return{
                info:{},
                id:this.$route.query.id
            }
        },
        methods:{
            getNewsInfo(){
                var url="http://127.0.0.1:3000/newsinfo";
                this.$http.get(url).then(result=>{
                    console.log(result.body);
                    //获取返回数据，保存在list属性中
                    this.info = result.body;
                })
            }
        },
        created(){
            console.log(this.$route.query.id);
            this.getNewsInfo();
        },
        components:{
            //2.注册子组件
            "comment-box":comment
        }
    }
</script>
<style>
    
</style>