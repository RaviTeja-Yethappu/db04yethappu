// Handle building the view for updating a costume. 
// query provides the id 
var mall = require('../models/mall');  
exports.mall_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await mall.findById(req.query.id) 
        console.log(result);
        res.render('mallupdate', { title: 'mall Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 