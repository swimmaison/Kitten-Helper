
const router = require("express").Router();
const kittenRoutes = require("./kittens");
const userRoutes = require("./user");

// Book routes
router.use("/kittens", kittenRoutes);
router.use("/user", userRoutes);


module.exports = router
