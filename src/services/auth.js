const UserSignupDetails  = require('../models/userSchema');

module.exports = {
    userDetailsExistOrNot:(email)=>{
        return new Promise((resolve,reject)=>{
        const isUserExist = await UserSignupDetails.findOne({email});
        if(isUserExist){
            reject(isUserExist);
        }else{
            resolve('no user found');
        }

        })
    },
    userSignupData : (data)=>{
        return new Promise(async(resolve,reject)=>{
            const isUserExist = await UserSignupDetails.findOne({$or:[{email:data.email},{firstnme:data.firstname}]});
            if(isUserExist){
                console.log("already exist");
            }else{
                const userData = new UserSignupDetails({...data});
                userData.save().then((result)=>{
                    resolve(result);
                }).catch(err=>{
                    reject(err);
                })
            }
        })
    }
}