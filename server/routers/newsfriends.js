const Certification = require("../Schema/Certification");

module.exports = (req, res) => {
  if (req.session.userinfo._id) {
    let id = req.session.userinfo._id;
    Certification.find({ passUser: id })
      .populate("CertificationUser")
      .then(data => {
        if (data) {
          res.send({ code: 200, data });
        } else {
          res.send({ msg: "请求错误，请重新刷新" });
        }
      })
      .catch(e => console.log(e));
  } else {
    res.send({ code: 404, msg: "请重新登录" });
  }
};
