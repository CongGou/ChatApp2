const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CertificationSchema = new Schema({
  CertificationUser: { type: Schema.Types.ObjectId, ref: "user" },
  passUser: { type: String, required: true },
  isPass: { type: Boolean, default: false },
  create_time: { type: Date, default: Date.now() }
});
module.exports = mongoose.model("Certification", CertificationSchema);
