const mongoose=require("mongoose");

const post=new mongoose.Schema({
        name: {
          type: String
        },
        author: {
            type: String
           }
       },
    { timestamps: true }
    )
const postData= mongoose.model("postData",post);
module.exports=postData;