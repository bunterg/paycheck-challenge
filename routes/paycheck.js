var express = require('express');
var router = express.Router();

const paycheckController = require('../controllers/paycheckController');

/* GET paycheck home page. */
router.get('/', paycheckController.index);

/* POST request to calculate paycheck */
router.post('/', paycheckController.paycheck_create_post_render);

module.exports = router;
