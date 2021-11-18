var express = require('express');
var router = express.Router();
var mall_controllers= require('../controllers/mall');
//const mall_controllers= require('../controllers/mall'); 
const detail_controller =  require('../controllers/malldetail');
const createmall_controller = require('../controllers/createmall');
const mallupdate_controller = require('../controllers/mallupdate');
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('mall', { title: 'Search Results for mall' });
//});
router.get('/', mall_controllers.mall_view_all_Page);

router.get('/mall/:id', mall_controllers.mall_detail); 
/* GET detail costume page */ 
router.get('/detail', detail_controller.mall_view_one_Page); 
/* GET create costume page */ 
router.get('/create', createmall_controller.mall_create_Page);
/* GET create update page */ 
router.get('/update', mallupdate_controller.mall_update_Page); 
/* GET create costume page */  
router.get('/delete', mall_controllers.mall_delete_Page); 
module.exports = router;