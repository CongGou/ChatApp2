module.exports = (req, res) => {
  if (!req.session.userinfo) {
    res.send({
      code: 404,
      msg: "请重新登录"
    });
  } else {
    let data = req.session.userinfo;
    res.send({ data });
  }
};
