const mongoose = require('mongoose');

const DbSchemaAdmin = mongoose.Schema({
    admin_username:{
        type:String,
        required: true
    },
    admin_password:{
        type:String,
        required: true 
    }
    
})

module.exports = mongoose.model('Admin',DbSchemaAdmin)