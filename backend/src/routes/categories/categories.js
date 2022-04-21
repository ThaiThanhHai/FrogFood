const express = require("express");
const router = express.Router();
const CategoriesController = require("../../controller/CategoriesController");

router.post("/create", CategoriesController.create);
router.put("/update", CategoriesController.update);
router.delete("/delete/:id", CategoriesController.delete);
router.get("/", CategoriesController.show);

module.exports = router;
