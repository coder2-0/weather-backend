const express = require('express')
const router = express.Router()
const calculateFee = require('../controllers/calculateFee')

// route
router.post('/fee',calculateFee)

module.exports = router;