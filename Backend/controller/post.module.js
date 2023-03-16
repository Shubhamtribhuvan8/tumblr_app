// const { query } = require("express");
const experess=require("express");
const router1=experess.Router();
const postData=require("../Tumbler/post.model")

router1.get("/post",async (req,res)=>{
    try{
        const postDataAdded= await postData.find();
        return res.status(200).send(postDataAdded);
    }
    catch(error){
        res.status(500).send(error)
    }
})

router1.post("/post",async (req,res)=>{
    console.log(req);
    try{
        const postDataAdded= await postData.create(req.body);
        return res.status(200).send(postDataAdded);
    }
    catch(error){
        res.status(500).send(error)
    }
})

router1.delete("/:id", async (req, res) => {
    try {
      const postDataAdded = await postData.findByIdAndDelete(req.params.id);
      return res.status(200).send(postDataAdded);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });



module.exports = router1;