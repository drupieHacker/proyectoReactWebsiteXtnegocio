const mongoose=require('mongoose');
const LeadsSchema = new mongoose.Schema({
    LeadsName:{
        type: String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true
    }

})


const LEAD = mongoose.model("LEAD",LeadsSchema);
module.exports = LEAD