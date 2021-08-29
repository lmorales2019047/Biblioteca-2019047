const router = require("express").Router();
const userController = require("../controllers/user.controller");
const middleware = require("../middlewares/middleware");

router.get("/user", middleware.isAdmin, userController.getUsers);
router.get("/user/:id", [middleware.isAdmin, middleware.isValidId], userController.getUserById);
router.get("/my-user", middleware.isLogged, userController.getMyUser);
router.put("/user/:id", [middleware.isAdmin, middleware.isValidId], userController.editUser);
router.put("/my-user", middleware.isLogged, userController.editMyUser);
router.delete("/user/:id", [middleware.isAdmin, middleware.isValidId], userController.deleteUser);
router.delete("/my-user", middleware.isLogged, userController.deleteMyUser);

module.exports = router;