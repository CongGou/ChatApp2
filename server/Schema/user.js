const mongoose = require("mongoose");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  passWord: { type: String, required: true },
  introduce: { type: String, default: "这个人很懒什么都没有" },
  signature: { type: String, default: "这个人很懒什么都没有" },
  photo: {
    type: String,
    default:
      "https://p97.f4.n0.cdn.getcloudapp.com/items/KoueJ8Bb/136210.png?v=f9162ff7b4116eddc32e0edccb5fb9d5"
  },
  date: { type: Date, default: Date.now() }
});
//密码加密 中间件
const secrets = "guohaicong";
userSchema.pre("save", function(next) {
  let CryptoPassWord = crypto
    .createHash("sha256", secrets)
    .update(this.passWord)
    .digest("hex");
  this.passWord = CryptoPassWord;
  next();
});
module.exports = mongoose.model("user", userSchema);
