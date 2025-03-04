const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUser = async (req, res) => {
    try {
        const userDate = req.body;
        const newuser = new User(userDate);
        const salt = await bcrypt.genSalt(10);
        newuser.password = await bcrypt.hash(newuser.password, salt);
        await newuser.save();
        res.status(200).json({
            success: true,
            message: "user created"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "user creation error"
        })
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        const comparePassword = await bcrypt.compare(password, existingUser.password);
        if (!comparePassword) {
            return res.status(400).json({
                success: false,
                message: "wrong pasword",
            })
        }
        const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        return res.status(200).json({
            success: true,
            token,
            message: "user logged in",
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "login error"
        })
    }
}
module.exports = { createUser, loginUser }