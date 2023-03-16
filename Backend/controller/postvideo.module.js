// const { query } = require("express");
const experess=require("express");
const videorouter=experess.Router();
const videodata=require("../Tumbler/video.model")

videorouter.get("/",async (req,res)=>{
    try{
        const postDataAdded= await videodata.find();
        return res.status(200).send(postDataAdded);
    }
    catch(error){
        res.status(500).send(error)
    }
})

videorouter.post("/",async (req,res)=>{
    console.log(req);
    try{
        const postDataAdded= await videodata.create(req.body);
        return res.status(200).send(postDataAdded);
    }
    catch(error){
        res.status(500).send(error)
    }
})

videorouter.delete("/:id", async (req, res) => {
    try {
      const postDataAdded = await videodata.findByIdAndDelete(req.params.id);
      return res.status(200).send(postDataAdded);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });



module.exports = videorouter;