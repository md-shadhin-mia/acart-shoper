const express = require("express");
const connectDB = require("./connectDB");
const authoLogin = require("./authLogin")
const path = require("path")
const tockenAuth = require("./authValidation")
const authApiRoute = require("./authApiRoute")


var cors = require('cors');
const { basicRouter } = require("./basicRouter");
const adminApiRoute = require("./adminApiRoute");
const errorHandler = require("./errorHandle");

require("dotenv").config();

let PORT = process.env.PORT || 3000;

const app = express();


app.use(cors());
app.use(express.json());
connectDB();
// app.get("/", function(req, res){
//     res.json({hello:"this is shop api@ created by Shadhin"})
// })
app.use("/api", basicRouter);
app.use("/api", authoLogin);
app.use("/api", tockenAuth, authApiRoute);
app.use("/api", tockenAuth, adminApiRoute);
app.use(express.static(path.join(__dirname, "../","../build")))
app.use(errorHandler);

app.listen(PORT, function(){
    console.log("server listen on "+PORT);
});

