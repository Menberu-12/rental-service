const Car = require('../models/Car');

const createCar = async (req, res) => {
  try {
    const { make, model, year, pricePerDay } = req.body;
    const newCar = new Car({ make, model, year, pricePerDay });
    await newCar.save();
    res.json(newCar);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createCar, getCars };
