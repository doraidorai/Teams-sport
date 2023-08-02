//import mongoose module
const mongoose = require("mongoose");
// create Scheme
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    avatar:String,
    Tel:String,
    role:String,
});
const user = mongoose.model("User", userSchema);
//makee match exportable
module.exports = user;