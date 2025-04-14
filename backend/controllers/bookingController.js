const Booking = require('../models/Booking');
const Car = require('../models/Car');
const House = require('../models/House');

const createBooking = async (req, res) => {
  try {
    const { userId, carId, houseId, startDate, endDate } = req.body;
    const car = carId ? await Car.findById(carId) : null;
    const house = houseId ? await House.findById(houseId) : null;

    if (!car && !house) return res.status(400).json({ message: 'Invalid car or house' });

    const totalAmount = car ? car.pricePerDay * (endDate - startDate) / (1000 * 60 * 60 * 24) : house.pricePerNight * (endDate - startDate) / (1000 * 60 * 60 * 24);
    const newBooking = new Booking({ user: userId, car: carId, house: houseId, startDate, endDate, totalAmount });
    await newBooking.save();
    res.json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('car').populate('house');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createBooking, getBookings };
