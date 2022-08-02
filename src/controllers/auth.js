const { otpCreate } =require ('../services/otpService');

const userAuth = require('../services/auth')
const sendgrid = require('@sendgrid/mail');
const SENDGRID_API_KEY = "<SENDGRID_API_KEY>"
sendgrid.setApiKey(SENDGRID_API_KEY)


const otpSend = async(email,callback)=>{
    const otp = Math.round(Math.random() * 9000)
    const msg = {
        to: mail,
      // Change to your recipient
        from: process.env.GMAIL,
      // Change to your verified sender
        subject: 'Sending with SendGrid Is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `strong>this is your otp ${otp}</strong>`,
     }
      try{
        //   await otpCreate(email,otp)
        sendgrid
       .send(msg)
       .then((resp) => {
         console.log('Email sent\n', resp)
         callback(null, resp)
       })
       .catch((error) => {
        callback(error,null)
         console.error(error)
     })
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
 