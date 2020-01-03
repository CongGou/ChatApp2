const mongoose = require("mongoose");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
  introduce: { type: String, default: "这个人很懒什么都没有" },
  signature: { type: String, default: "这个人很懒什么都没有" },
  photo: { type: String, default: "https://share.getcloudapp.com/4guxlYWD" },
  date: { type: Date, default: Date.now() }
});
//密码加密 中间件
const secret = "郭海聪";
userSchema.pre("save", function(next) {
  let CryptoPassWord = crypto
    .createHash("sha256", secret)
    .update(this.passWord)
    .digest("hex");
  this.passWord = CryptoPassWord;
  next();
});
module.exports = mongoose.model("user", userSchema);
