const mongoose = require('mongoose');

const userSignupSchema = mongoose.Schema({
    firstname:{
        type:String,
        require: true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('users',userSignupSchema);