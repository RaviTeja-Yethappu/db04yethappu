const mongoose = require("mongoose")
const mallSchema = mongoose.Schema({
    mall_type: String,
    price: {type: Number, min: 4, max: 6},
    quantity: {type: Number, maxlength:6}
})
module.exports = mongoose.model("mall", mallSchema)