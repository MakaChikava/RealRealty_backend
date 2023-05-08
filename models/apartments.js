const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
img: String,
Price: String,
State: String,
City: String,

})
const Apartments = mongoose.model('Apartments', apartmentSchema)
module.exports = Apartments;