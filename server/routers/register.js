const User = require("../Schema/user");

module.exports = (req, res) => {
  let { userName, passWord } = req.body;
  User.findOne({ userName }).then(data => {
    if (data) {
      res.send({ code: 0, msg: "该用户已注册" });
    } else {
      User.create({
        userName,
        passWord
      })
        .then(data => {
          if (data) {
            req.session.userinfo = data;
            res.send({ code: 200, msg: "注册成功" });
          }
        })
        .catch(e => {
          res.send({ code: 400, msg: "服务器异常，请重试~" });
        });
    }
  });
};
