const User = require("../Model/User");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(401)
        .json({ message: "User not found. Please register first." });
      return;
    }
    if (user.password !== password) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    // Generate JWT token and send it back to the client
    // Example: const token = generateToken(user);
    // res.status(200).send({ token });
    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
