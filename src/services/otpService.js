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

const otpVerify =(email,otp)=>{
    return new Promise((resolve,reject)=>{
        OtpCollection.findOne({email:email},(err,data)=>{
            if(data){
                if(data.otp == otp){
                    resolve(true)
                }else{
                    reject("invalid otp")
                }
            }else{
                reject("error")
            }
        })
    })
}
module.exports = {
    otpCreate,
    otpVerify
}