const Order = require("../Model/Order");

// Controller function to create a new order
exports.createOrder = async (req, res) => {
  try {
    console.log(req.body);
    // Extract data from request body
    const { user, items, totalPrice, shippingAddress, totalWithShipping } =
      req.body;

    // Create a new order
    const order = new Order({
      user,
      items,
      totalPrice,
      totalWithShipping,
      shippingAddress,
      // Add more fields as needed
    });

    // Save the order to the database
    await order.save();

    // Respond with success message
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to get all orders
exports.getAllOrders = async (req, res) => {
  try {
    // Extract email from the request body
    const { email } = req.query;
    console.log("body", email);
    // Fetch all orders from the database
    const orders = await Order.find({ "user.email": email });

    // Respond with orders
    res.status(200).json({ orders });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add more controller functions as needed
