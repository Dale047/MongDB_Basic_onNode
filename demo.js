//引入mongoose模块
var mongoose = require("mongoose");
//连接本地MongoDB
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true});
//连接成功回调函数
mongoose.connection.once("open",function(){
	console.log("数据库连接成功！");
});
//断开MongoDB数据库
mongoose.disconnect();
//连接成功回调函数
mongoose.connection.once("close",function(){
	console.log("数据库已断开！");
});