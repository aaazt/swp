//1.加载模块
const express = require("express");
const pool = require("./pool");
const cors = require("cors");
//2.创建express对象
var app = express();
app.use(cors({
    origin:[
        "http://127.0.0.1:3002","http://localhost:3002"
    ],
    credentials:true
}))
//3.指定静态目录  要绝对路径C:\xampp\htdocs\04-CT\00-PRO\vue_app_server\public
app.use(express.static(__dirname+"/public"));
//4.绑定监听端口
app.listen(3000);

//功能1：学子商城首页图片轮播
app.get("/imagelist",(req,res)=>{
    var obj = [
        {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
    ];
    res.send(obj)
})

//功能2：分页显示:新闻分页
app.get("/newslist",(req,res)=>{
    //1:参数  当前页码  页大小(一页显示几行数据)
    var pno = req.query.pno;            //2
    var pageSize = req.query.pageSize;  //5
    //2:sql
    //2.1:查找总记录数->转换总页数  15->3
    var sql = "SELECT count(id) as c FROM xz_news";
  
  
    var obj = {};      //保存发送客户端数据
    var progress = 0;  //进度
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        var c = Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress+=50;
        if(progress==100){
          res.send(obj);
        }
    });
    //2.2:查找当前页内容           中间5行
    var sql = " SELECT id,title,img_url,ctime,point";
       sql += " FROM xz_news";
       sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        //console.log(result);
        obj.data = result;
        progress+=50;
        if(progress==100){
          res.send(obj);
        }
    })
})

//功能3：发送脚手架新闻详情
app.get("/newsinfo",(req,res)=>{
    var obj = {
        title:"北京房价下降，白菜价",
        content:"16万/平  快快去买啊啊啊啊！！！！！"
    };
    res.send(obj);
})

//功能4：用户发表评论
const qs = require("querystring");
app.post("/postcomment",(req,res)=>{
    req.on("data",(buf)=>{
        var str = buf.toString();//1.将参数转字符串
        // var msg = "测试";
        // var nid = 11;
        var obj = JSON.parse(str);//2.将参数转对象
        var msg = obj.msg;
        var nid = parseInt(obj.nid);
        var sql = "INSERT INTO xz_comment(content,user_name,ctime,nid) VALUES(?,'匿名',now(),?)";
        pool.query(sql,[msg,nid],(err,result)=>{
            if (err) throw err;
            res.send({code:1,msg:"添加成功"})
        })
    })
})

//功能5：用户获取指定新闻下的所有评论的列表
app.get("/getComment",(req,res)=>{
    var nid=parseInt(req.query.nid);
    var pno = req.query.pno;            
    var pageSize = req.query.pageSize;     
    var sql = " SELECT count(id) as c FROM xz_comment";
        sql += " WHERE nid = ?";

    var obj = {};      //保存发送客户端数据
    var progress = 0;  //进度
    pool.query(sql,[nid],(err,result)=>{
        if (err) throw err;
        var c = Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    });
    //2.2:查找当前页内容          
    var sql = " SELECT id,content,ctime,user_name";
    sql += " FROM xz_comment";
    sql += " WHERE nid = ?";
    sql += " ORDER BY id DESC";
    sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if(err)throw err;
        //console.log(result);
        obj.data = result;
        progress+=50;
        if(progress==100){
        res.send(obj);
        }
    })
})

//功能6：商品详情页信息
app.get("/goodsinfo",(req,res)=>{
    var id = req.query.id;
    var obj = {id:id,title:"华为2000",now:"9999",old:"88888",pid:"0519"};
    res.send(obj);
})

//功能7：购物车数据列表
app.get("/shopCart",(req,res)=>{
    var obj=[];
    obj.push({id:1,title:"华为p10",price:"3999",count:2})
    obj.push({id:2,title:"华为p11",price:"4999",count:1})
    obj.push({id:3,title:"华为p12",price:"5999",count:1})
    res.send(obj);
})

//功能8：将商品信息添加至购物车
app.get("/addCart",(req,res)=>{
    //1.获取参数 商品id和数量
       //1.1 获取参数
    var pid = req.query.pid;
    var count = req.query.count;
       //1.2 创建正则表达式验证 一定做
    var reg = /^[0-9]{1,}$/;  //正则表达式
    if(!reg.test(pid)){       //如果参数验证失败
        res.send({code:-1,msg:"参数有误"});
        return;               //输出错误信息
    }
    if(!reg.test(count)){
        res.send({code:-2,msg:"商品数量参数有误"});
        return;               //输出错误信息并停止
    }
    res.send({code:1,msg:"添加成功"});
})

//功能九：登录
app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="select count(id) as c from xz_user1 where uname=? and upwd=md5(?)"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result[0].c==0){
            res.send({code:-1,msg:"登录失败"})
        }else{
            res.send({code:1,msg:"登录成功"})
        }
    })
})











