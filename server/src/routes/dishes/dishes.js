const express = require("express");
const router = express.Router();
const DishController = require("../../controller/DishController");

router.post("/create", DishController.create);
router.put("/update", DishController.update);
router.delete("/delete/:id", DishController.delete);
router.get("/", DishController.show);

module.exports = router;
