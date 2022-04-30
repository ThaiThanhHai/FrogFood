const express = require("express");
const router = express.Router();
const UsersController = require("../../controller/UsersController");

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.put("/update", UsersController.update);
router.put("/changePass", UsersController.changePassword);
router.delete("/delete/:id", UsersController.delete);
router.get("/", UsersController.show);

module.exports = router;
