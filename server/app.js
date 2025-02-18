require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/user.route")
const app = express()
const port = 3000
app.use(express.json())


mongoose.connect(process.env.Mongoose_URL).then(() => {
    console.log("connected to db")
}).catch((err) => {
    console.log(err);
})

app.use("/api/auth", userRoute)


app.listen(port, () => { console.log(`server on ${port}`) })