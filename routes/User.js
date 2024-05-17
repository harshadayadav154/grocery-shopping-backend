const express = require("express");
const userController = require("../Controller/User");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/email=:email", userController.getUser);
module.exports = router;
