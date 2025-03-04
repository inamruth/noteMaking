require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");
const { userexp } = require("./routes/user.route");
const { verifyToken } = require("./middleware/verifyToken");
const app = express()
const port = 3000
const cors = require("cors")
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.Mongoose_URL).then(() => {
    console.log("connected to db")
}).catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => { res.send({ "message": req.body.name }) })
app.use("/api", userexp)
app.get("/protected-route", verifyToken, (req, res) => {
    console.log(req.user)
    res.send("message protected route")

})

app.listen(port, () => { console.log(`server on ${port}`) })