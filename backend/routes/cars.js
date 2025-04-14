const express = require('express');
const { createCar, getCars } = require('../controllers/carController');

const router = express.Router();

router.post('/create', createCar);
router.get('/all', getCars);

module.exports = router;
