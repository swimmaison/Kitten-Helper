const router = require("express").Router();
const kittensController = require("../../controllers/kittensController");

router.route("/")
.get(kittensController.findAll)
.post(kittensController.create);

router
  .route("/:id")
  .get(kittensController.findById)
  .put(kittensController.update)
  .delete(kittensController.remove);

module.exports = router;