const express = require("express");
const router = express.Router();
const UserController = require("../../controller/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update", UserController.update);
router.put("/edit_info", UserController.editInfo);
router.put("/changePass", UserController.changePassword);
router.put("/userChangePass", UserController.userChangePassword);
router.delete("/delete/:id", UserController.delete);
router.delete("/delete2/:email", UserController.delete2);
router.post("/recall", UserController.recall);
router.get("/", UserController.show);

module.exports = router;
