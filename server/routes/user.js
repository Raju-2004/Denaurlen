const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { FirstName, LastName, Location, Email, username, Password } =
      req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { Email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const HashedPassword = await bcrypt.hash(Password, 10);
    const newUser = new User({
      FirstName,
      LastName,
      Location,
      Email,
      username,
      Password: HashedPassword,
    });
    await newUser.save();
    console.log(newUser);
    res.status(201).json({ message: "User Created successfully" });
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
  }
});


router.post('/login', async (req,res)=>{
    try{
        console.log(process.env.ACCESS_SECRET_TOKEN)
        const {username,Password} = req.body;
        const user = await User.find({username});
        console.log(user)
        if(!user) {
            return res.status(400).json({message:"User not found"})
        }
        const isValidPassword = await bcrypt.compare(Password,user.Password)
        if(!isValidPassword)
        {
          return res.status(401).json({message:"Invalid Password"})
        }
        jwt.sign({username : user.username},'secret-key',(err,token)=>{
            if(err){
                console.error(err)
                return res.status(500).json({message : "Internal server error"})
            }
            return res
            .status(200)
            .json({message:"Login successful",token : token})
        })
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;
