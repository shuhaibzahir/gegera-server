const userAuth = require('../services/auth')



/* ------------------------ this function for Signup ------------------------ */
export const userSignup = (req,res)=> {
    const {email} = req.body
    userAuth.userDetailsExistOrNot(email).then((result)=>{
        
    }).catch(err=>{
        res.status(400).json({data:'user already exist'})
    })
    
};



/* ------------------------ this function for Login ------------------------ */
export const userLogin = (req,res)=> {
    userAuth.userSignupData(req.body).then((result)=>{
 
    }).catch((err)=>{
 
    })
     
 };


