const express = require("express");
const orderController = require("../Controller/Order");

const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);

module.exports = router;
