//import mongoose module
const mongoose = require("mongoose");
// create Scheme
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
});
const match = mongoose.model("Match", matchSchema);
//makee match exportable
module.exports = match;