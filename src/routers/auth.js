const express = require('express');
const { userSignup, userLogin, otpVerifyRouteFun } = require('../controllers/auth');
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.post('/verify-otp',otpVerifyRouteFun);


module.exports = router