const OtpCollection = require("../models/otpSchema")

 const otpCreate = (email,otp)=>{
    return new Promise((resolve,reject)=>{
      const otpsave =  new OtpCollection({
            email,
            otp
        })

        otpsave.save().then((data)=> {
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}

module.exports = {
    otpCreate
}