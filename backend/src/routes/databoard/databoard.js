const express = require("express");
const router = express.Router();
const DataboardController = require("../../controller/DataboardController");

router.get("/", DataboardController.showDataboard);

module.exports = router;
