const express = require('express');
const { createHouse, getHouses } = require('../controllers/houseController');

const router = express.Router();

router.post('/create', createHouse);
router.get('/all', getHouses);

module.exports = router;
