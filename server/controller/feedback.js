var express = require("express");

var router = express.Router();

const Feedback = require("../model/feedback_model");


exports.feedback_create = function(req,res) {
  var feedback = new Feedback
  ({
    cust_name: req.body.cust_name,
    fb_desc: req.body.fb_desc

  });

  feedback
        .save(feedback)
        .then(data=>
            {
                //res.send(data)
                
                res.redirect('/');
            })
            .catch(err=>
                {
                    res.status(500).send({
                        message:err.message || "Error occurred"
                    });
                });
        

  /*feedback.save(function (err) {
    // if (err) {
    //     return next(err);
    // }
    res.send('Feedback sent');
})*/
};
exports.find=(req,res)=>{
    Feedback.find()
    .then(user=>{
        res.send(user)

    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error Occured"})
    })
    
};

exports.admin_feedback = (req, res) => {
    Feedback.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occured" })
        })
};

