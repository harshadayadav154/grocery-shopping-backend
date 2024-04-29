const express = require("express");
const productsController = require("../Controller/Products");

const router = express.Router();

router.get("/", productsController.fetchAllProducts);
router.get("/categories", productsController.fetchCategories);

module.exports = router;
