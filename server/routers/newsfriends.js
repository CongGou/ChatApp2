const Certification = require("../Schema/Certification");

module.exports = (req, res) => {
  if (req.session.userinfo._id) {
    let id = req.session.userinfo._id;
    Certification.find({ passUser: id }).then(data => {
      console.log(data);
    });
  } else {
    res.send({ code: 404, msg: "请重新登录" });
  }
};
