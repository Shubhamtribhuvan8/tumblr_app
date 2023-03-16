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
const videodata= mongoose.model("videodata",post);
module.exports=videodata;