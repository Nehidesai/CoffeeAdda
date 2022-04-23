const axios = require('axios');
exports.homeRoutes=(req,res)=>
{
    axios.get('https://coffeeadda.herokuapp.com/feedback_find')
    .then(function(response){ 
        res.render('index1',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.orderRoutes=(req,res)=>
{
    axios.get('https://coffeeadda.herokuapp.com/menu_find')
    .then(function(response){ 
        res.render('menu',{product:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.galleryRoutes=async(req,res)=>
{
    axios.get('https://coffeeadda.herokuapp.com/gallery_find')
    .then(function(response){ 
        res.render('gallery',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}
exports.addGalleryRoutes=(req,res)=>
{
    res.render('admin_gallery');
}



/*exports.menuRoutes=(req,res)=>
{
    axios.get('http://localhost:8081/menu_find')
    .then(function(response){ 
        res.render('menu',{product:response.data});
    })
    .catch(err =>{
        res.send(err);
    })
}*/

exports.menuRoutes=(req,res)=>
{
    res.render('menu');
}

exports.contactusRoutes=(req,res)=>
{
    res.render('contactus');
}

exports.galleryRoutes=(req,res)=>
{
    res.render('gallery');
}

exports.admin_feedbackRoutes=(req,res)=>
{
    axios.get('https://coffeeadda.herokuapp.com/feedback_find')
    .then(function(response){ 
        res.render('view_feedback',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.feedbackRoutes=(req,res)=>
{
    res.render('feedback');
}
exports.adminLoginRoutes=(req,res)=>
{
    res.render('adminLogin');
}


exports.OrderRoutes=(req,res)=>
{
    res.render('order');
}

exports.userRoutes=(req,res) =>
{
    console.log(req.body)
    res.render('userdetails');
}
exports.thankyouRoutes=(req,res)=>
{
    res.render('thankyou')
}

/*exports.adminRoutes=(req,res)=>
{
    res.render('admin_feedback');
}*/
/*
exports.adminRoutes=(req,res)=>
{
    axios.get('http://localhost:8081/feedback_find')
    .then(function(response){ 
        res.render('admin_feedback',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}
*/
exports.adminRoutes=(req,res)=>
{
    res.render('admin_index');
}

exports.adminMenuRoutes=(req,res)=>
{
    res.render('admin_menu');
}
