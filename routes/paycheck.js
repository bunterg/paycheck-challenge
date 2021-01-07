var express = require('express');
const { body, validationResult } = require('express-validator');

var router = express.Router();

const paycheckController = require('../controllers/paycheckController');

/* GET paycheck home page. */
router.get('/', paycheckController.index);

/* POST request to calculate paycheck */
router.post('/',
    body('name').notEmpty().isString(),
    body('dependants').toArray(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    paycheckController.paycheck_create_post_render);

module.exports = router;
