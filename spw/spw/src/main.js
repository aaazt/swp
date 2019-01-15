import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
// //5: 设置请求的根路径 
// //Vue.http.options.root = "http://127.0.0.1/vue_ser/";
// //6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
// //Vue.http.options.emulateJSON = true;
// // 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
 import './lib/mui/css/mui.css'
// // 导入 MUI 的样式表，扩展图标样式，购物车图标
// // 还需要加载图标字体文件
 import './lib/mui/css/icons-extra.css'


//引入组件mintui库中的Header（两步）
//--①引入指定组件
// import {Button,Header,Swipe,SwipeItem,Lazyload} from "mint-ui";
// //--②注册当前项目中  左边是<mt-header></mt-header>
// Vue.component(Button.name,Button);
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.use(Lazyload);

//完整引入
import MintUI from "mint-ui";
Vue.use(MintUI);


//2.引入vue-resource 发送 ajax
//1.引入vue-resource库所有的组件
import VueResource from "vue-resource";
//--将所有组件注册
Vue.use(VueResource);

//3.创建过滤器
Vue.filter("dateFilter",function(val){
  var date = new Date(val);
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d}`;
})
Vue.filter("datetimeFilter",function(val){
  var date =new Date(val);
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  var h = date.getHours();
  var min = date.getMinutes();
  var s = date.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  h<10&&(h="0"+h);
  min<10&&(min="0"+min);
  s<10&&(s="0"+s);
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
})

//配置VueResource 服务器根目录
Vue.http.options.root="http://127.0.0.1:3000/"
//配置post请求方法的修改请求头
//Vue.http.options.emulateJSON=true;

//4.创建Vuex实例对象
  //4.1下载安装Vue
  //4.2引入Vuex
  import Vuex from "vuex";
  //4.3注册Vuex实例
  Vue.use(Vuex)
  //4.4创建 Vuex实例对象
  var store = new Vuex.Store({
    state:{count:0},  //购物车中商品数量
    mutations:{
      increment(state,c){
        state.count+=parseInt(c);//修改共享数据两个方法
      }, 
      substract(state){
        state.count--;//参数共享数据属性
      }  

    },
    getters:{
      optCount:function(state){
        return state.count; //返回共享数据
      }
    }
  });

new Vue({
  router,
  render: h => h(App),
  store//5.将Vuex实例对象注册到vue实例中
}).$mount('#app')
