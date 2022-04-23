const mongoose = require('mongoose');

const DbSchemaGallery = mongoose.Schema({
    image:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Gallery',DbSchemaGallery)