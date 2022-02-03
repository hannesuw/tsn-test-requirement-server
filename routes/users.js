const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.users);
router.get("/:id", usersController.findById);
router.post("/", usersController.createUser);
router.delete("/:id", usersController.delete);
router.put("/:id", usersController.editUser);

module.exports = router;
