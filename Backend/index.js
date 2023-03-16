const express=require("express");
const cors = require('cors');
const app=express();
app.use(cors());
// app.use(express.static('public'));
const connection=require("./configs/db");
const PORT=8080;
const router=require("./controller/controller.module")
const router1=require("./controller/post.module.js")
const imagerouter = require("./controller/video.module");
const videorouter=require("./controller/postvideo.module");
const LoginRouter=require("./Routes")
const routersss=require("./controller/user.controller")
app.use(express.json());
app.use("/tumblr",router)
app.use("/tumberwala",routersss)
app.use("/tumblrpost",router1)
app.use("/tumbler/image", imagerouter);
app.use("/video",videorouter)
app.use("/tumbler",LoginRouter)

app.listen(PORT,()=>{
    try{
        connection();
        console.log("port is running on:"+PORT)
    }
    catch(error){
        console.log(error)
    }
})