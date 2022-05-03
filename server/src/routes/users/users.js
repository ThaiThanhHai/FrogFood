const express = require("express");
const router = express.Router();
const UserController = require("../../controller/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update", UserController.update);
router.put("/changePass", UserController.changePassword);
router.delete("/delete/:id", UserController.delete);
router.get("/", UserController.show);

module.exports = router;
