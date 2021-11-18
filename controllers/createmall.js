var mall = require('../models/mall');  

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.mall_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('mallcreate', { title: 'mall Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 