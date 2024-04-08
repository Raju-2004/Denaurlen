const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { FirstName, LastName, Email, UserName, Password } = req.body;

    if (!req.body.UserName) {
      return res.status(400).json({ error: "UserName is required" });
    }

    const existingUser = await User.findOne({ $or: [{ UserName }, { Email }] });
    if (existingUser) {
      return res.status(400).json({ error: "UserName or email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create new user
    const newUser = new User({
      FirstName,
      LastName,
      Email,
      UserName,
      Password: hashedPassword,
    });

    // Save new user to database
    console.log(newUser);
    await newUser.save();
    console.log("created");
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/login', async (req,res)=>{
  try {
    const { UserName, Password } = req.body;

    // Find user by UserName
    const user = await User.findOne({ UserName });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords
    const isValidPassword = await bcrypt.compare(Password, user.Password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    // Generate JWT token
    jwt.sign({ UserName: user.UserName }, 'secret-key', (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Login successful", token: token });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
