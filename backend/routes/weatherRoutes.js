const express = require('express');

const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/:id', weatherController.getOne);

module.exports = router;
