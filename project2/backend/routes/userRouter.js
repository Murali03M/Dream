const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/userModel.js');
const Todo = require('../model/todoModel.js');
router.post('/adduser', async (req, res) => {

    const { email, password, firstName, lastName, phone } = req.body;

  
    try {
        const existingUser = await User.find({ email:email });
     console.log(existingUser);
        if (existingUser.length > 0) {
            return res.json({ message: "User already exists" });
        }

        const user = await User.create({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
            phone:phone
        });
        const userId = user._id;
       const token =  jwt.sign({userId}, process.env.TOKEN_SECRET)
        return res.json({
            message: "User created successfully",
            token: token
        });
     
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/totals', async (req, res) => {
    try {
      const userCount = await User.countDocuments();
      const todoCount = await Todo.countDocuments();
      res.json({ userCount, todoCount });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

       
        if (!user || user.password !== password) {
            return res.json({ message: "Invalid email or password" });
        }
        const userId = user._id;
        const token =  jwt.sign({userId}, process.env.TOKEN_SECRET)
        return res.json({
            message: "User logged in successfully",
            token: token
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;