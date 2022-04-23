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


// const app=express();
// var db = process.env.MONGO_URL
// var port=process.env.PORT || 8081;
//dotenv.config({path:'config.env'})
//const PORT=process.env.PORT || 8080; //PORT in config.env=8081

//log requests
app.use(morgan('tiny'))

connectDB();
//parse req to body parser
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

//set view engine
app.set("view engine","ejs")
//app.set("view engine","html")

//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/css',express.static(path.resolve(__dirname,"adminResources/css")))
app.use('/images',express.static(path.resolve(__dirname,"adminResources/image")))
app.use('/js',express.static(path.resolve(__dirname,"adminResources/js")))
app.use('/font',express.static(path.resolve(__dirname,"adminResources/fonts")))
//load routers
app.use('/',require('./server/routes/router'))
//app.use('/admin',require('./server/routes/router'))


app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`)});


//console.log('May Node be with you')
/*const express = require('express');
const app = express();
app.listen(5500, function() {
    console.log('listening on 3000')
  })*/
  /*app.get('/', function(req, res) {
    res.send('Hello World')
  })*/

  //ES6
  /*app.get('/', (req, res) => {
    res.send('Hello World')
  })*/

  //File Return
  /*app.get('/', (req, res) => {
    //console.log(__dirname)
    res.sendFile(__dirname + '/index1.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })*/


// const express = require('express');
// //const dotenv = require('dotenv');
// require('dotenv').config();
// var db=process.env.MONGO_URL;
// const PORT=process.env.PORT || 8081; //PORT in config.env=8081

// const morgan=require('morgan');
// const bodyparser=require('body-parser');
// const path=require('path');
// const mongoose=require('mongoose');
// const connectDB=require('./server/database/connection');

// const app=express();

// //var db=process.config.env.MONGO_URL;
// //dotenv.config({path:'config.env'})



// //log requests
// app.use(morgan('tiny'))

// //connect DB
// connectDB();

// //parse req to body parser
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json());



// //set view engine
// app.set("view engine","ejs")
// //app.set("view engine","html")

// //app.set("views",path.resolve(__dirname,"views/ejs"))

// //load assets
// app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
// app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
// app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// //load routers
// app.use('/',require('./server/routes/router'))


// app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`)});


// //console.log('May Node be with you')
// /*const express = require('express');
// const app = express();
// app.listen(5500, function() {
//     console.log('listening on 3000')
//   })*/
//   /*app.get('/', function(req, res) {
//     res.send('Hello World')
//   })*/

//   //ES6
//   /*app.get('/', (req, res) => {
//     res.send('Hello World')
//   })*/

//   //File Return
//   /*app.get('/', (req, res) => {
//     //console.log(__dirname)
//     res.sendFile(__dirname + '/index1.html')
//     // Note: __dirname is the current directory you're in. Try logging it and see what you get!
//     // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
//   })*/