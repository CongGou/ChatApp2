const User = require("../Schema/user");
const crypto = require("crypto");

module.exports = (req, res) => {
  let { userName, passWord } = req.body;
  const secrets = "guohaicong";
  User.findOne({ userName }).then(data => {
    if (data) {
      let CryptoPassWord = crypto
        .createHash("sha256", secrets)
        .update(passWord)
        .digest("hex");

      if (CryptoPassWord === data.passWord) {
        //登录后添加session
        req.session.userinfo = data;
        res.send({ code: 200, msg: "登录成功" });
      } else {
        res.send({ code: 0, msg: "密码不正确" });
      }
    } else {
      res.send({ code: 0, msg: "请先注册" });
    }
  });
};
