const express = require("express");
const router = express.Router();
const CategoryController = require("../../controller/CategoryController");

router.post("/create", CategoryController.create);
router.put("/update", CategoryController.update);
router.delete("/delete/:id", CategoryController.delete);
router.get("/:itemId", CategoryController.showItemID);
router.get("/", CategoryController.show);

module.exports = router;
