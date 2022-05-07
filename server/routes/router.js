const express=require('express');
const feedback_controller = require('../controller/feedback');
const product_controller=require('../controller/product');
const order_controller=require('../controller/order');
const gallery_controller=require('../controller/gallery');
const user_contoller=require('../controller/user');
const admin_controller=require('../controller/admin')
//const app=express()=> this wil create another express application
//Allows to create diff router in seperate file
const route=express.Router();

const services=require('../services/render');

//ROUTES
//Root Route with get method
route.get('/',services.homeRoutes);

route.get('/contactus',services.contactusRoutes);


route.post('/order',order_controller.place_order);

route.get('/feedback',services.feedbackRoutes);
route.post('/feedback',feedback_controller.feedback_create);
route.get('/feedback_find',feedback_controller.find);
route.get('/menu',product_controller.findproduct);

route.get('/userdetails',services.userRoutes);
route.post('/userdetails',user_contoller.user_create);
route.post('/calculate_bill',user_contoller.calculatebill);
route.get('/gallery',gallery_controller.find);
route.get('/addGallery',services.addGalleryRoutes);
route.post('/addGallery_save',gallery_controller.gallery_create);
route.get('/view_feedback_admin',services.admin_feedbackRoutes);
route.get('/adminLogin',services.adminLoginRoutes);
route.post('/admin_login_check',admin_controller.admin_login_check);
route.get('/thankyou',services.thankyouRoutes);


route.get('/admin',services.adminRoutes);

route.post('/addmenu',product_controller.product_create);

route.get('/admin_menu',services.adminMenuRoutes);

module.exports=route;