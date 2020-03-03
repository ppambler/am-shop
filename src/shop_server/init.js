const mongoose = require("mongoose");
const db = "mongodb://localhost/am-shop";

// 连接数据库方法
exports.connect = () => {
  // 连接数据库
  // // {useNewUrlParser: true} 使用新url解释器 此处不加会报错，暂时未找到原因
  mongoose.connect(db, { useNewUrlParser: true });
  // 监听数据库连接
  mongoose.connection.on("disconnected", () => {
    mongoose.connect(db);
  });
  // 数据库出现错误
  mongoose.connection.on("error", err => {
    console.log(err);
    mongoose.connect(db);
  });

  // 连接的时候
  mongoose.connection.once("open", () => {
    console.log("mongodb connected success");
  });
};
