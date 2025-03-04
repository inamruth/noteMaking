const { createUser, loginUser } = require("../controllers/user.controller");

const userexp = require("express").Router();


userexp.post("/signup", createUser)
userexp.post("/login", loginUser)

module.exports = { userexp }