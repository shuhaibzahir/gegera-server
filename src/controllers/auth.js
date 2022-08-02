const { otpCreate,otpVerify } =require ('../services/otpService');

const userAuth = require('../services/auth')
const sendgrid = require('@sendgrid/mail');
const SENDGRID_API_KEY = "SG.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"
sendgrid.setApiKey(SENDGRID_API_KEY)


const otpSend = async(email,callback)=>{
    const otp = Math.round(Math.random() * 9000)
    const msg = {
        to: email,
      // Change to your recipient
        from: "shinushinu01997@gmail.com",
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

 /* -------------------------------- otpverify ------------------------------- */

 const otpVerifyRouteFun = (req,res)=>{
   const {otp} = req.body
   otpVerify(otp).then(result=>{
    res.json({user:{name:'shambu'}})
   }).catch(err=>{
    res.json(err)
   })
 }

/* ------------------------ this function for Login ------------------------ */
 const userLogin = (req,res)=> {
    userAuth.userSignupData(req.body).then((result)=>{
 
    }).catch((err)=>{
 
    })
     
 };



 module.exports={
    userSignup,
    userLogin,
    otpVerifyRouteFun
 }
 