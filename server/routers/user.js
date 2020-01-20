const User = require("../Schema/user");

module.exports = (req, res) => {
  if (req.session.userinfo._id) {
    let _id = req.body.id;
    User.findOne({ _id }).then(data => {
      if (data) {
        res.send({ code: 200, data });
      }
    });
  } else {
    res.send({ code: 404, msg: "请重新登陆" });
  }
};
