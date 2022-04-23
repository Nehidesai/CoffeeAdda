var express = require("express");

var router = express.Router();

const Gallery = require("../model/gallery_model");

exports.gallery_create = function (req, res) {
    var gallery = new Gallery({
        image: req.body.image
    });

    gallery
        .save(gallery)
        .then(data => {
            res.redirect('/admin');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred"
            });
        });
};
exports.find = (req, res) => {
    Gallery.find()
        .then(gallery => {
            res.render('gallery',{gallery})
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occured" })
        })
};





//module.exports = router;