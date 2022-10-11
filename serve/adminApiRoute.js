const { Router } = require("express");
const { Image } = require("./imageModel");
const { Order } = require("./orderModel");
const { ProductVariant, Product } = require("./productModel");
const userModel = require("./userModel");


const adminApiRoute = Router()

adminApiRoute.get("/users", async (req, res)=>{
    let users = await userModel.find();
    res.json(users);
});

adminApiRoute.get("/users/:id", async (req, res)=>{
    let user = await userModel.findById(req.params.id);
    res.json(user);
});

adminApiRoute.put("/make-admin/:id", async (req, res)=>{
    let user =await userModel.findByIdAndUpdate(req.params.id,{role:"admin"});
    res.json(user)
})

adminApiRoute.get("/images", async (req, res)=>{
    let images =await Image.find({isAdmin:true}, {_id:true});
    res.json(images)
})

adminApiRoute.post("/product",async (req, res)=>{
    console.log(req.body);
    const {title, cover, slug} = req.body;
    const product = new Product({title, cover, slug, varients:[]});
    let varient = null;
    for (let index = 0; index < req.body.variants.length; index++) { 
        const elem = req.body.variants[index];
        varient = new ProductVariant({...elem});
        await varient.save();
        product.variants.push( varient._id );
    }

    await product.save();
    

    res.json({message:"ok", product});
});

adminApiRoute.get("/products-details",async (req, res)=>{
    products =await Product.find().populate("variants");
    res.json(products);
});

adminApiRoute.get("/product-details/:id",async (req, res)=>{
    products =await Product.findById(req.params.id).populate("variants");
    res.json(products);
});




adminApiRoute.delete("/product-delete/:id", async (req, res)=>{
    product = await Product.findByIdAndDelete(req.params.id);
    res.json({message: "ok", product});
})

//orders

adminApiRoute.get("/orders",async (req, res)=>{
    orders =await Order.find()
    .populate("product_id", ["title"])
    .populate("customer", ["fullname"])
    .populate("variant", ["title","price"]);
    res.json(orders);
});


adminApiRoute.put("/order-status/:id", async (req, res)=>{
    let order = await Order.findByIdAndUpdate(req.params.id, {status:req.body.status})
    res.json(order);
})

module.exports = adminApiRoute;