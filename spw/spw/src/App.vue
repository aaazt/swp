<template>
    <div class="app-container">
        <!--2.容器显示不同组件-->
        <router-view></router-view>
        <!--3.底部导航栏-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
            <router-link class="mui-tab-item" to="/fenlei">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-chat" to="/shop">
                <span class="mui-icon mui-icon-eye"></span>
				<span class="mui-tab-label">编辑精选</span>
			</router-link>
			<router-link class="mui-tab-item" to="/personal">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<style>
   .app-container{
     padding-top:10px;
     padding-bottom:10px;
     overflow-x:hidden;
     background:#fff;
     height:623px;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
