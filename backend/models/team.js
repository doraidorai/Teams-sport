//import mongoose module
const mongoose = require("mongoose");
// create Scheme
const teamSchema=mongoose.Schema({
name:String,
owner:String,
foundation:Number,
stadium:String,
});
const team=mongoose.model("Team",teamSchema);
//makee match exportable
module.exports=team;