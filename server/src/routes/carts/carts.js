const express = require("express");
const router = express.Router();
const CartController = require("../../controller/CartController");

router.post("/payment", CartController.payment);
router.put("/confirm", CartController.confirm);
router.put("/delivery", CartController.delivery);
router.get("/orders/:email", CartController.orders);
router.get("/day", CartController.getDay);
router.get("/", CartController.show);

module.exports = router;
