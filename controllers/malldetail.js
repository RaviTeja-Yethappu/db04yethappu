var mall = require('../models/mall');  

exports.mall_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await mall.findById( req.query.id);
        console.log("*************************************",result);
        res.render('malldetail',  
{ title: 'mall Detail', toshow: result }); 

    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 