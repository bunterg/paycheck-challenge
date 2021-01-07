const express = require('express');
const router = express.Router();
const paycheckController = require('../../../controllers/paycheckController');

/* POST request to calculate paycheck */
router.post('/paycheck_calculate', paycheckController.paycheck_create_post);

module.exports = router;
