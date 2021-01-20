const router = require("express").Router();
const devRoutes = require("./devs");

// Book routes
router.use("/devs", devRoutes);

module.exports = router;
