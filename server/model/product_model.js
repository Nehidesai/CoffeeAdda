const mongoose = require('mongoose');

const DbSchema1 = mongoose.Schema({
    product_name:{
        type:String,
        required: true
    },
    product_type:{
        type:String,
        required: true 
    },
    product_price:{
        type:String,
        required: true 
    },
    /*product_img:{
        type:String,
        required: true 
    }*/
    product_desc:{
        type:String,
        required: true 
    },
    product_img:{
        type:String,
        required: true 
    }

})

module.exports = mongoose.model('Product',DbSchema1)