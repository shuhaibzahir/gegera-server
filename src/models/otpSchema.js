const mongoose = require("mongoose")

// need to do some more thing
const OtpSchema =  mongoose.Schema({
    email:String,
    otp: Number,
})


module.exports = mongoose.model('otpSchema',OtpSchema);