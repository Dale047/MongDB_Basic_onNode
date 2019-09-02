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
stuModel.findOne({}, function(err, doc) {
	if(!err) {
		//对象.属性 设置当前查询到对象的属性值
		doc.name = "晓晓";
		//打印当前文档，发现name已被更改成猪晓晓
		console.log(doc);
	}
});