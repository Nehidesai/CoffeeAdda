const express = require('express');
//const dotenv = require('dotenv');
require('dotenv').config();
const app=express();
var db = process.env.MONGO_URL
var PORT=process.env.PORT || 8081;
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const mongoose = require('mongoose');
const connectDB = require('./server/database/connection');


//log requests
app.use(morgan('tiny'))

connectDB();
//parse req to body parser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

//set view engine
app.set("view engine","ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`)});