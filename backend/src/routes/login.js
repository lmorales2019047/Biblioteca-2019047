const router = require("express").Router();
const loginController = require("../controllers/login.controller");
const middleware = require("../middlewares/middleware")

router.post("/signin", loginController.signIn);
router.post("/signup", loginController.signUp);

module.exports = router;