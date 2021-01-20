const router = require("express").Router();
const devsController = require("../../controllers/devsController");

// Matches with "/api/books"
router.route("/")
  .get(devsController.findAll)
  .post(devsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(devsController.findById)
  .put(devsController.update)
  .delete(devsController.remove);

module.exports = router;
