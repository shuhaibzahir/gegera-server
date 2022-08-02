
const express = require("express");
const { tokenVerify } = require("../../middlewares/tokenHandler");
const route = express.Router()

route.use(tokenVerify(req,res,next,"prouser"))






module.exports = route