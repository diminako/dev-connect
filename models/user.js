const mongoose = require("mongoose");
const user = new mongoose.Schema({
    username:String,
    password:String,
    skill: []
});

const User = mongoose.model("User", user);

module.exports = User;