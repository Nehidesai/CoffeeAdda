var express = require("express");

var router = express.Router();

const Feedback = require("../model/product_model");
exports.product_create = function(req,res) {
    var product = new Feedback({
      product_name: req.body.product_name,
      product_type:req.body.product_type,
      product_price: req.body.product_price,
      product_desc: req.body.product_desc,
      product_img: req.body.product_img
  
    });
  
    product
    .save(product)
    .then(data=>
        {
            //res.send(data);
            
            res.redirect('/admin');
        })
        .catch(err=>
            {
                res.status(500).send({
                    message:err.message || "Error occurred"
                });
            });
        };

    

                exports.findproduct=(req,res)=>{
                    //product.find()
                    Feedback.find()
                    .then(product=>{
                        res.render('menu',{product})
                    })
                    .catch(err=>{
                        res.status(500).send({message:err.message||"Error Occured"})
                    })
                }
//module.exports = router;