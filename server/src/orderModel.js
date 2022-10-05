const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    product_id : {type: Schema.Types.ObjectId, ref: "Product"},
    customer:{type: Schema.Types.ObjectId, ref: "User"},
    game_id :{type:String, required: true},
    variant: {type: Schema.Types.ObjectId, ref:"ProductVariant"},
    prement_method: {type: String},
    prement_info: {type: String, default: ""},
    payed: {type: Boolean, default: false},
    status:{type:String, default:"progress"}
}, {timestamps: true});


module.exports.Order = mongoose.model('Order', OrderSchema);