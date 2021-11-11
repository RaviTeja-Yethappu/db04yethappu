var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mall_controller = require('../controllers/mall');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// mall ROUTES ///
// POST request for creating a mall.
router.post('/mall', mall_controller.mall_create_post);
// DELETE request to delete mall.
router.delete('/mall/:id', mall_controller.mall_delete);
// PUT request to update mall.
router.put('/mall/:id', mall_controller.mall_update_put);
// GET request for one mall.
router.get('/mall/:id', mall_controller.mall_detail);
// GET request for list of all mall items.
router.get('/mall', mall_controller.mall_list);
module.exports = router;