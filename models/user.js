const mongoose = require("mongoose");
const user = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true       
    },
    username: String,
    password: String,
    skill: []
});

const User = mongoose.model("User", user);

module.exports = User;