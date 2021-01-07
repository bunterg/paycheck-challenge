var express = require('express');
var router = express.Router();

/* GET paycheck home page. */
router.get('/', function (req, res) {
    res.redirect('/paycheck');
});

module.exports = router;
