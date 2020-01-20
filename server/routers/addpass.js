const Certification = require("../Schema/Certification");

module.exports = (req, res) => {
  if (req.session.userinfo._id) {
    let passUserId = req.session.userinfo._id;
    let CertificationId = req.body.id;
    Certification.findOne({
      CertificationUser: CertificationId,
      passUser: passUserId
    }).then(data => {
      if (data) {
        Certification.update({ isPass: true }).then(data => {
          res.send({ code: 200, msg: "已通过" });
        });
      } else {
        res.send({ code: 404, msg: "通过失败，请重新操作" });
      }
    });
  } else {
    res.send({ code: 404, msg: "请重新登录" });
  }
};
