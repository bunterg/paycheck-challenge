var express = require('express');
var router = express.Router();

var paycheckRouter = require('./paycheck');

router.use(paycheckRouter);

module.exports = router;