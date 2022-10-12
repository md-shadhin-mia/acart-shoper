const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const ProductVariantSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type:String,
        require: true
    },
    bkash:{
        type:String,
        default:"",
    },
    nogot:{
        type:String,
        default:"",
    }
});

module.exports.ProductVariant = mongoose.model('ProductVariant', ProductVariantSchema);

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    cover:{
        type: String,
        default: ""
    },
    sell:{
        type: Number,
        default: 0
    },
    total_sell:{
        type:Number,
        default: 0
    },
    variants:[{type:mongoose.Schema.Types.ObjectId, ref:"ProductVariant"}]
});

module.exports.Product = mongoose.model('Product', ProductSchema);