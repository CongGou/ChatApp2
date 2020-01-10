const mongoose = require("mongoose");

const CertificationSchema = mongoose.Schema({
  CertificationUser: { type: String, required: true },
  passUser: { type: String, required: true },
  isPass: { type: Boolean, default: false },
  create_time: { type: Number, date: Date.now() }
});
module.exports = mongoose.model("Certification", CertificationSchema);
