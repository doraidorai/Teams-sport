//import mongoose module
const mongoose = require("mongoose");
// create Scheme
const playerSchema = mongoose.Schema({
    name: String,
    age: Number,
    nbr: Number,
    position: String,
});
const player = mongoose.model("Player", playerSchema);
//makee match exportable
module.exports = player;