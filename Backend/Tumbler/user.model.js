const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
        username: {
          type: String
        },
        password: {
          type: String
        }
      },
      { timestamps: true }
)

const userData= mongoose.model("userlogin",userSchema);
module.exports=userData;