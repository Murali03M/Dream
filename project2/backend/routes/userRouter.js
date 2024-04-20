const express = require('express');
const router = express.Router();
const User = require('../model/userModel.js');




router.post('/adduser', async (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;
   console.log(req.body);
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
        console.log(user);
        return res.json({
            message: "User created successfully",
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

       
        if (!user || user.password !== password) {
            return res.json({ message: "Invalid email or password" });
        }

        return res.json({
            message: "User logged in successfully",
            user: user
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;