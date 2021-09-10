const router = require("express").Router();
const magazinedataController = require("../controllers/magazinedata.controller");
const middleware = require("../middlewares/middleware");

router.get("/magazinedata", magazinedataController.getMagazineDatas);
router.get("/magazinedata/:id", middleware.isValidId, magazinedataController.getMagazineDataById);
router.post("/magazinedata", magazinedataController.addMagazineData);
router.put("/magazinedata/:id", [middleware.isAdmin, middleware.isValidId], magazinedataController.editMagazineData);
router.delete("/magazinedata/:id", [middleware.isAdmin, middleware.isValidId], userController.deleteMagazineData);

module.exports = router;