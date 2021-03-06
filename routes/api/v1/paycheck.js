const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const paycheckController = require('../../../controllers/paycheckController');

/* POST request to calculate paycheck */
router.post(
    '/paycheck_calculate',
    body('name').notEmpty().isString(),
    body('dependants').toArray(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    paycheckController.paycheck_create_post);

module.exports = router;
