const mongoose=require("mongoose");

const TumblrSchema=new mongoose.Schema({
        avatar: {
          type: String
        },
        username: {
          type: String
        },
        description: {
          type: String
        },
        people: {
          type: String
        },
        image: {
          type: String
        },
        video: {
          type: String
        },
        Tag1: {
          type: String
        },
        Tag2: {
          type: String
        },
        Likes: {
          type: Number
        },
        DisLikes: {
          type: Number
        },
        Comments: {
          type: Number
        },
        category: {
          type: String
        },
      },
      { timestamps: true }
)

const TumblrData= mongoose.model("TumblrApp",TumblrSchema);
module.exports=TumblrData;