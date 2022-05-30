const jwt = require("jsonwebtoken");
const User = require("../model/user");
require('dotenv').config();

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) return res.sendStatus(402);
  try {
    const decoded = await jwt.verify(token, process.env.PRIVATE_KEY);
    req.user_id = decoded._id;
    next();
  } catch (error) {
    return res.sendStatus(402);
  }
};

module.exports = {verifyToken};