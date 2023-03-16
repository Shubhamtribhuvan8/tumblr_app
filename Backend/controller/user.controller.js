const experess=require("express");
const routerss=experess.Router();
const userData=require("../Tumbler/user.model")

routerss.post("/register",async (req,res)=>{
    try{
        const userDatafinal= await userData.find();
        return res.status(200).send(userDatafinal);
    }
    catch(error){
        res.status(500).send(error)
    }
})
routersss.post("/login",async (req,res)=>{
    try{
        const userDatafinal= await userData.create(req.body);
        return res.status(200).send(userDatafinal);
     }
    catch(error){
        res.status(500).send(error)
    }
})

export default routersss;