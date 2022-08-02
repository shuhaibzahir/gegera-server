const { otpCreate } =require ('../services/otpService');

const userAuth = require('../services/auth')
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD_GMAIL
    }
  });

const otpSend = async(email,callback)=>{
    const otp = Math.round(Math.random() * 9000)
    const mailOptions = {
        from: process.env.GMAIL,
        to: email,
        subject: 'Sending Email using Node.js',
        text: `this is your otp ${otp} `
      };
      try{
          await otpCreate(email,otp)
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
             callback(err,null)
            } else {
                callback(null,err)
              console.log('Email sent: ' + info.response);
            }
          });
      }catch(error){
        callback(error,null)
      }

      
      
}


/* ------------------------ this function for Signup ------------------------ */
 const userSignup = (req,res)=> {
    const {email} = req.body
    if(!email){
        res.status(400).json("bad request")
    }else{
        userAuth.userDetailsExistOrNot(email).then((result)=>{
            otpSend(email,(err,data)=>{
                if(err){
                    res.status(400).json(err)
                }else{

                    res.status(201).json({otpSend:true})
                }

            })
        }).catch(err=>{
            res.status(400).json({data:'user already exist'})
        })
    }
    
    
};



/* ------------------------ this function for Login ------------------------ */
 const userLogin = (req,res)=> {
    userAuth.userSignupData(req.body).then((result)=>{
 
    }).catch((err)=>{
 
    })
     
 };



 module.exports={
    userSignup,
    userLogin
 }
 