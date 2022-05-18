const express = require("express");
const router = express.Router();
const CartController = require("../../controller/CartController");

router.post("/payment", CartController.payment);
router.put("/confirm", CartController.confirm);
router.get("/", CartController.show);

module.exports = router;
