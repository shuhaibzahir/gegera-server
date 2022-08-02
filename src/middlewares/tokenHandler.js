const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/constants');

const exist = (params,res,next)=>{
    const {token} = req.header
    const verifiedToken = jwt.verify(token,jwtSecret)
    if(verifiedToken[params]){
        next()
       }else{
        res.status(401).json({data:"unauthorized"})
       }
}

const tokenVerify = (req,res,next,type)=>{
   switch (type){
    case 'prouser':
        exist("pro",res,next)
   }
   
}

module.exports = {
    tokenVerify
}