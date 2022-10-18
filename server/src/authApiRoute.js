const { Router } = require("express");
const { route } = require("./authLogin");
const fs = require("fs")
const fspath = require("path")
const multer = require("multer");
const { Image } = require("./imageModel");
const { Order } = require("./orderModel");
const uniqueNum = require("./uniqueNum");
const { wait } = require("@testing-library/user-event/dist/utils");
const upload = multer({dest:"../../uploads"});

const router = Router()

router.get("/user", (req, res)=>{
    res.status(200).json({user:req.decoded})
});

router.post("/order", async (req, res)=>{
    const {product_id, game_id, variant, prement_method, customer} = req.body;
    let order = new Order({product_id, customer, game_id, variant, prement_method, prement_info: uniqueNum()+""})
    await order.save();
    res.json(order);
})

router.put("/order-pay/:id", async (req, res)=>{

    let order = await Order.findByIdAndUpdate(req.params.id, {payed:true})
    res.json(order);
})


router.post("/upload", upload.single("file"), async (req, res)=>{
    const {mimetype, path}=req.file;
    const {_id, role} = req.decoded;
    const image = new Image({
        contentType : mimetype,
        file: fs.readFileSync(fspath.join(__dirname, "../../", path)),
        isAdmin: (role == "admin"),
        user_id:_id
    });
    await image.save();
    res.json({message:"ok", image_id: image._id})
})

module.exports = router;