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
/*
	document 和 集合中的文档是一一对应
	document 是 Model的实例，通过Model查询到的结果都是document
*/
//创建一个document
var stu = new stuModel({
	name : "Dale",
	age : 23,
	address : "Anhui",
	sex : "boy"
});
//此时可以打印，仅仅是创建对象，并没有插入到数据库
// console.log(stu);
/*
	document方法：
	 	save();
	 		Model#save([options], [fn]);
*/
stu.save(function (err) {
	if(!err) {
		console.log("插入成功！");
	}
})
