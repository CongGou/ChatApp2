const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
//设置session参数
app.use(
  session({
    secret: "guo", //密钥，值随便填写
    // rolling: true, //只要用户和后端有交互（访问页面，跳转页面，ajax……），刷新存储时间
    // resave: false, //是否每次请求都重新存储session数据
    // saveUninitialized: false, //初始值
    cookie: { maxAge: 1000 * 60 * 60 } //设置session过期时间
    // ,store : new mongooseSession({
    //   url : "mongodb://localhost:27019/vuex"
    // })//不设置store是服务器内存中存储session信息，我们可以通过设置store将session数据存到数据库
  })
);
//中间件
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//注册
app.post("/register", require("./routers/register"));
//登录
app.post("/login", require("./routers/login"));
// APP首页
app.get("/chathome", (req, res) => {
  console.log(req.session.userinfo);
});

//连接数据库
mongoose.connect(
  "mongodb://localhost:27019/chatapp",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log("数据库链接失败");
      return;
    }
    //监听8999端口
    app.listen(8999, () => {
      console.log("监听8999端口成功");
    });
    console.log("数据库链接成功");
  }
);
