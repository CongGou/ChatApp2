const User = require("../Schema/user");
const crypto = require("crypto");

module.exports = (req, res) => {
  let { userName, passWord } = req.body;
  const secret = "郭海聪";
  User.findOne({ userName }).then(data => {
    if (data) {
      let CryptoPassWord = crypto
        .createHash("sha256", secret)
        .update(passWord)
        .digest("hex");
      if (CryptoPassWord === data.passWord) {
        res.send({ code: 200, msg: "登录成功" });
        req.session.userinfo = data;
      } else {
        res.send({ code: 0, msg: "密码不正确" });
      }
    } else {
      res.send({ code: 0, msg: "请先注册" });
    }
  });
};
