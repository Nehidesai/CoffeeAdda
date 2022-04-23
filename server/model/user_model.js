const mongoose = require('mongoose');

const DbUserSchema = mongoose.Schema({
    cust_name:{
        type:String,
        required: true
    },
    cust_contact:{
        type:String,
        required: true 
    },
    remarks:{
        type:String,
        required:true
    },
    sum:{
        type:String
    }

})

module.exports = mongoose.model('Userdetails',DbUserSchema)
