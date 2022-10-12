const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
    contentType:String,
    file:Buffer,
    isAdmin:{type:Boolean, default:false},
    user_id: {type: Schema.Types.ObjectId, ref:"User"}
});


module.exports.Image = model("Image", ImageSchema);