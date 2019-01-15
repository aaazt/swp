<template>
    <div class="app-testContainer">
        <h1>测试的组件</h1>
        <h1>生命周期</h1>
        <h1>当前vue实例创建后自动触发事件，事件调用一些函数（钩子函数）</h1>
        <input type="button" value="修改" @click="msg='ok'">
        <p id="h3">{{msg}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {msg:"脚手架"}
        },
        methods:{
            show(){console.log("执行 show 方法")}
        },
        beforeCreate() {
            //生命周期第一个函数，实例被创建 之前 ，会执行它
            //注意：执行函数时 data和methods还没有被初始化（还不存在）
            //console.log(this.msg);//undefined
            //this.show();//报错
        },
        created(){
            //生命周期第二函数，实例被创建 之后
            //注意：执行函数时data和methods都初始化好了
            //最早可以操作data和methods
            this.show();//正常显示
            console.log(this.msg);//正常打印
        },
        beforeMount() {
            //生命周期的第三个函数，模板已经在内存中编辑完成，但是尚未把模板渲染到页面上
            //不可获得模板中的元素和内容
            console.log(document.getElementById("h3"));//null
            console.log(h3.innerText);//报错
        },
        mounted() {
            //生命周期的第四个函数，模板已经在内存中编辑完成，把模板渲染页面结束
            //是实例创建的最后一个生命周期函数，当执行完mounted表示实例已经完全创建好了
            //如果没有其他操作，静静躺在内存中一动不动
            //可获得模板中的元素和内容
            console.log(document.getElementById("h3"));//<p id="h3">脚手架</p>
            console.log("4."+h3.innerText);//脚手架
        },
        beforeUpdate() {
            //当执行beforeUpdate 页面中的数据仍是旧的
            //                   内存data中的数据是新的
            console.log("5.内存中DATA变量："+this.msg);
            var h3=document.getElementById("h3");
            console.log("5.模板中数据："+h3.innerText);
        },
        Updated() {
            //当执行beforeUpdate 页面中的数据是新的
            //                  内存data中的数据是新的
            console.log("6.内存中DATA变量："+this.msg);
            var h3=document.getElementById("h3");
            console.log("6.模板中数据："+h3.innerText);
        }
    }
</script>
<style lang="">
    
</style>