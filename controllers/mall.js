var mall = require('../models/mall');
// List of all mall
exports.mall_list = async function (req, res) {
    try {
        themall = await mall.find();
        res.send(themall);
    }
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};

// for a specific mall.
exports.mall_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await mall.findById(req.params.id)
        res.send(result)
    }
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};

// Handle mall create on POST.
exports.mall_create_post = async function (req, res) {
    console.log(req.body)
    let document = new mall();
    document.mall_type = req.body.mall_type;
    document.price = req.body.price;
    document.quantity = req.body.quantity;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};
// Handle mall delete form on DELETE.
exports.mall_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await mall.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};

exports.mall_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await mall.findById(req.params.id);
        // Do updates of properties
        if (req.body.mall_name)
            toUpdate.mall_name = req.body.mall_name;
        if (req.body.colour)
            toUpdate.colour = req.body.colour;
        if (req.body.price)
            toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};

// VIEWS
// Handle a show all view
exports.mall_view_all_Page = async function (req, res) {
    try {
        themall = await mall.find();
        res.render('mall', { title: 'mall Search Results', results: themall });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};

// Handle a show one view with id specified by query
exports.mall_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await mall.findById(req.query.id)
        res.render('malldetail', { title: 'mall Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mall_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('mallcreate', { title: 'mall Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{"error": Error creating ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};

// Handle building the view for updating a fish.
// query provides the id
exports.mall_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await mall.findById(req.query.id)
        res.render('mallupdate', { title: 'mall Update', toShow: result });
    }
    catch (err) {
        res.status(500)

    }
    //res.send('NOT IMPLEMENTED: mall list');
};

// Handle a delete one view with id from query
exports.mall_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await mall.findById(req.query.id)
        res.render('malldelete', { title: 'mall Delete', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    //res.send('NOT IMPLEMENTED: mall list');
};


// VIEWS
// Handle a show all view
exports.mall_view_all_Page = async function (req, res) {
    try {
        themall = await mall.find();
        res.render('mall', { title: 'mall Search Results', results: themall });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};