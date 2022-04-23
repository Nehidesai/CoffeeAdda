var express = require("express");

var router = express.Router();

const Userdetails = require("../model/user_model");

const Product = require('../model/product_model')

exports.calculatebill = function(req,res) {   

    let sum = 0
    console.log("User create body ",req.body)
    const qtys = req.body.userqty
    console.log(qtys)
    
    Product.find()
    .then(products =>{
            for(let i = 0; i < products.length; i++)
            {
                console.log(qtys[i])
                if(qtys[i] != '')
                    sum += parseInt(products[i].product_price) * parseInt(qtys[i])
            } 
            console.log("SUM=",sum)
            res.render('userdetails',{sum});
            
        })
    }
        
    exports.user_create = function(req,res) {   
  var userdetails = new Userdetails
  ({
    cust_name: req.body.cust_name,
    cust_contact: req.body.cust_contact,
    remarks: req.body.remarks,
    sum:req.body.sum
    
  });

  userdetails
        .save(userdetails)
        .then(data=>
            {
        
            
            res.redirect('/thankyou');
                // res.redirect('/');
            })
            .catch(err=>
                {
                    res.status(500).send({
                        message:err.message || "Error occurred"
                    });
                });
};


/*exports.find=(req,res)=>{
    Feedback.find()
    .then(user=>{
        res.send(user)

    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error Occured"})
    })
    
}
*/
