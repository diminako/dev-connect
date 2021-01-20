const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const Devs = mongoose.model("Devs", devSchema);

module.exports = Devs;
