const mongoose = require('mongoose');

const housesSchema = new mongoose.Schema({
img: String,
price: String,
bedroom: String,
baths: String,
address: String,
state: String,
zip: String,
city: String,
type: String


})
const House = mongoose.model('Houses', housesSchema)
module.exports = House;