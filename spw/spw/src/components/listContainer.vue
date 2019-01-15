<template>
    <div class="app-listContainer">
        <h3>列表组件</h3>
        <ul>
            <li v-for="item in list">
            {{item.id}}:{{item.uname}}:{{item.age}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:[
                    {id:1,uname:"dongdong",age:50},
                    {id:2,uname:"wenhua",age:40}
                ]
            }
        }
    }
</script>

<style lang="">
    
</style>