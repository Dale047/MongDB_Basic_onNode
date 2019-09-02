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
	有了Model之后就可以对数据库进行增删改操作了
	Model是构造函数，是可以传构造函数的对象
	Model.create(doc(s),[callback])
	 - 用来创建一个或多个对象
	 - 参数
	   - doc(s) 一个或多个文档
	   - callback 当操作完成之后可调用的回调函数
*/
stuModel.create({
	name : "Dale",
	age : 23,
	address : "Anhui",
	sex : "boy"
},{
	name : "Tom",
	age : 24,
	address : "Xuancheng",
	sex : "boy"
},{
	name : "Jhon",
	age : 25,
	address : "Xuanzhou",
	sex : "boy"
},function(err){
	if(!err){
		console.log("插入成功！");
		//打印返回插入返回成功的数组
		console.log(arguments);
	}
})




