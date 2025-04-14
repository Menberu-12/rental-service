const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
