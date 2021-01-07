const { Paycheck } = require('../models/paycheck')

function calculatePaycheck(req) {
    let employeeName = req.body.name;
    let dependants = req.body.dependants;
    
    let paycheck = new Paycheck(employeeName, dependants);

    return paycheck.toOBJ();
}

exports.index = function (req, res, next) {
    res.render('paycheck/paycheck_create');
}

exports.paycheck_create_post = function (req, res, next) {
    res.json(calculatePaycheck(req));
}

exports.paycheck_create_post_render = function (req, res, next) {
    res.render('paycheck/paycheck_result', calculatePaycheck(req));
}