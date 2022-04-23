const mongoose = require('mongoose');

const DbSchema = mongoose.Schema({
    cust_name:{
        type:String,
        required: true
    },
    fb_desc:{
        type:String,
        required: true 
    }
})

module.exports = mongoose.model('Feedback',DbSchema)
