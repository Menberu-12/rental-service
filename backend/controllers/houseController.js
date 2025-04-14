const House = require('../models/House');

const createHouse = async (req, res) => {
  try {
    const { address, city, state, pricePerNight } = req.body;
    const newHouse = new House({ address, city, state, pricePerNight });
    await newHouse.save();
    res.json(newHouse);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createHouse, getHouses };
