const express = require('express');
const app = express();
const cors = require("cors");
const LeadsModel = require("./models/Leads");
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://XTI:gkxwikOQKBeXCNLP@crud.07esq6a.mongodb.net/XTNEGOCIO?retryWrites=true&w=majority",{

    useNewUrlParser: true,

})

app.post("/insert",async(req,res)=>{
    const LeadsName =req.body.LeadsName;
    const LastName=req.body.LastName;
    const Email=req.body.Email;
const LEADS =new LeadsModel({LeadsName:LeadsName,LastName:LastName,Email:Email})
try{
    await LEADS.save();
    res.send('inserted data');
}
catch(err){
    console.log(err)
}
})

app.get("/read",async(req,res)=>{
   LeadsModel.find({},(err,result)=>{
if(err){
}
res.send(result);
   })
})


app.put("/update",async(req,res)=>{
    const  newLeads =req.body.newLeads;
    const id=req.body.id;
try{
   await LeadsModel.findById(id,(err,updatedLeads)=>{
    updatedLeads.LeadsName = newLeads;
    updatedLeads.save();
res.send("update");

   })
}
catch(err){
    console.log(err)
}
})

app.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id;
   await LeadsModel.findByIdAndRemove(id).exec();
   res.send('deleted');

})
app.listen(3001,()=>{
    
    console.log('server is runing on port 3001....');

})