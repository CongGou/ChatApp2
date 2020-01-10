const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  from: { type: String, required: true }, //发送用户id
  to: { type: String, required: true }, //接收用户id
  chat_id: { type: String, required: true }, //from和to组成的字符串
  content: { type: String, required: true },
  create_time: { type: Number }, //创建时间
  read: { type: Boolean, default: false } //标识是否阅读
});

module.exports = mongoose.model("chat", ChatSchema);
