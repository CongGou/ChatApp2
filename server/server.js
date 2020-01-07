const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();

app.listen(8888);

//设置session参数
app.use(
  session({
    secret: "afei", //密钥，值随便填写
    rolling: true, //只要用户和后端有交互（访问页面，跳转页面，ajax……），刷新存储时间
    resave: false, //是否每次请求都重新存储session数据
    saveUninitialized: false, //初始值
    cookie: { maxAge: 1000 * 60 * 10 * 60 } //设置session过期时间
  })
);

//中间件
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//注册
app.post("/register", require("./routers/register"));
//登录
app.post("/login", require("./routers/login"));
//查找用户
app.post("/searchuser", require("./routers/searchuser"));
//聊天首页
app.get("/chathome", require("./routers/chathome"));

//登出 路由
app.get("/logout", (req, res) => {
  //清除session
  req.session.destroy();
  res.send({ code: 200, msg: "退出登录" });
});
//启动数据库
mongoose
  .connect("mongodb://localhost:27019/chatapp", { useNewUrlParser: true })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(() => {
    console.log("数据库连接失败");
  });
