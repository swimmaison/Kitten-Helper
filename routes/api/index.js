const router = require("express").Router();
const kittenRoutes = require("./kittens");

// Book routes
router.use("/kittens", kittenRoutes);


module.exports = router;
