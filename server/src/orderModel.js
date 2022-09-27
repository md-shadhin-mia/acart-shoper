const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    product_id : {type: Schema.Types.ObjectId, ref: "Product"},
    game_id :{type:String, required: true},
    variant_id: {type: Schema.Types.ObjectId, ref:"ProductVariant"},
    prement_method: {type: String},
    prement_info: {type: String, default: ""},
    payed: {type: Boolean, default: false}
});


module.exports.Order = mongoose.model('Order', OrderSchema);