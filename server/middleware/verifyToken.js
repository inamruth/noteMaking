const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (!token) return res.status(401).json({ success: false, message: "token not found" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (err) {
        return res.status(401).json({ success: false, message: "invalid token" });
    }
}
module.exports = { verifyToken };