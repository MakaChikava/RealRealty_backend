const mongoose = require('mongoose');

const housesSchema = new mongoose.Schema({
img: String,
Price: String,
State: String,
City: String,

})
const House = mongoose.model('Houses', housesSchema)
module.exports = House;