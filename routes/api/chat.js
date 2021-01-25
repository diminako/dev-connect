const router = require("express").Router();
const chatController = require("../../controllers/chatController");

router.route("/")
  .get(chatController.findAll);

  module.exports = router;