const mongoose = require("mongoose")


// need to do some more thing
const OtpSchema =  mongoose.Schema({
    email: String,
    otp: Number,
    createdAt:{
        default: Date.now(),
        type: Date
    },
    expireAt:{
        default: Date.now() + 3600000,
        type: Date
    }
});



module.exports = mongoose.model('otpSchema',OtpSchema);