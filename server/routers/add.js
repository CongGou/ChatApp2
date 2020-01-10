const Certification = require("../Schema/Certification");
module.exports = (req, res) => {
  let { passUser } = req.body;
  let CertificationUser = req.session.userinfo._id;
  if (req.session.userinfo._id) {
    Certification.create({ CertificationUser, passUser }).then(data => {
      if (data) {
        res.send({ code: 200, msg: "等待认证通过" });
      } else {
        res.send({ code: 404, msg: "添加失败，请重新操作" });
      }
    });
  } else {
    res.send({ code: 404, msg: "请重新登录" });
  }
};
