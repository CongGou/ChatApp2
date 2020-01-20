const Certification = require("../Schema/Certification");

module.exports = (req, res) => {
  let id = req.session.userinfo._id;
  if (id) {
    Certification.find({ passUser: id, isPass: true })
      .populate("CertificationUser")
      .then(data => {
        if (data) {
          res.send({ code: 200, data });
        }
      });
  }
};
