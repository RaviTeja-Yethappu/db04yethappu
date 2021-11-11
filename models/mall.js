const mongoose = require("mongoose")
const mallSchema = mongoose.Schema({
    mall_type: String,
    price: Number,
    quantity: Number
})
module.exports = mongoose.model("mall", mallSchema)