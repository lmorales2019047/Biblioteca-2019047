const router = require("express").Router();
const userController = require("../controllers/user.controller");
const middleware = require("../middlewares/middleware");

router.get("/user", middleware.isAdmin, userController.getUsers);
router.get("/user/:id", middleware.isAdmin, userController.getUserById);
router.get("/my-user", middleware.isLogged, userController.getMyUser);
router.put("/user/:id", userController.editUser);
router.put("/my-user", userController.editMyUser);
router.delete("/user/:id", userController.deleteUser);
router.delete("/my-user", userController.deleteMyUser);

module.exports = router;