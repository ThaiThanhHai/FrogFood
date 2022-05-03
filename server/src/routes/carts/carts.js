const express = require("express");
const router = express.Router();
const CartController = require("../../controller/CartController");

router.post("/create", CartController.create);
router.get("/", CartController.show);

module.exports = router;
