const mongoose = require("mongoose");
const chat = new mongoose.Schema({
    body: String,
    id: String,
    type: String,
    username: String
});

const Chat = mongoose.model("Chat", chat);

module.exports = Chat;
