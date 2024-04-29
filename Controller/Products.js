const { Category } = require("../Model/Products");

exports.fetchAllProducts = (req, res) => {
  Category.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
};

exports.fetchCategories = (req, res) => {
  Category.find({}, "name")
    .then((categories) => {
      // Extracting category names
      const categoryNames = categories.map((category) => category.name);
      res.json(categoryNames);
    })
    .catch((err) => {
      console.error("Error fetching categories:", err);
      res.status(500).json({ error: "Error fetching categories" });
    });
};
