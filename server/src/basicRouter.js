const { Router } = require("express");
const { Image } = require("./imageModel");
const { Product } = require("./productModel");

const router = Router();


router.get("/", (req,res)=>{
    res.json({message:"api is working"})
})

router.get("/image/:id", async (req, res)=>{
    const image =await Image.findById(req.params.id);
    res.type(image.contentType);
    res.write(image.file);
    res.end();
});


router.get("/products",async (req, res)=>{
    products =await Product.find({}, {_id: true});
    res.json(products);
})
router.get("/product/:id",async (req, res)=>{
    product =await Product.findById(req.params.id, {title: true, slug:true, cover:true});
    res.json(product);
})

router.get("/slug/:slug",async (req, res)=>{
    product =await Product.findOne({slug:req.params.slug}, {title: true, slug:true, cover:true}).populate("variants");
    res.json(product);
})

module.exports.basicRouter = router;