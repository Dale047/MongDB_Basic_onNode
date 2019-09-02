//引入mongoose模块
var mongoose = require("mongoose");
//连接本地MongoDB
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true});
//连接成功回调函数
mongoose.connection.once("open",function(){
	console.log("数据库连接成功！");
});
//将mongoose.Schema 赋值给一个变量
var Schema = mongoose.Schema;
//创建Schema (模式) 对象
//简单理解，有了Schema就有了数据库
var stuSchema = new Schema ({
	name : String,
	age : Number,
	address : String,
	sex : {
		type : String,
		default : "boy"
	}
})
//通过Schema来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作
//mongoose.model(modelName,Schema);modelName就是映射的集合名
var stuModel = mongoose.model("student",stuSchema);
//向数据库中插入文档，第一个是插入对象，第二个是是否成功回调
stuModel.create({
	name : "Dale",
	age : 23,
	address : "Anhui",
	sex : "boy"
},function(err){
	if(!err){
		console.log("插入成功！");
	}
})