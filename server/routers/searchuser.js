const User = require("../Schema/user");

module.exports = (req, res) => {
  //查找用户
  let { userName } = req.body;
  let id = req.session.userinfo._id;
  let username = req.session.userinfo.userName;
  if (id) {
    if (userName === username) {
      res.send({ code: 404, msg: "用户不能添加自己为好友" });
    } else {
      User.findOne({ userName })
        .then(data => {
          if (data) {
            res.send({ code: 200, msg: data });
          } else {
            res.send({ code: 404, msg: "该用户不存在" });
          }
        })
        .catch(e => console.log(e));
    }
  } else {
    res.send({ code: 404, msg: "请重新登录" });
  }
};
