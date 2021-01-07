const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");


const paycheckController = require('../../controllers/paycheckController');

const next = sinon.spy();

describe("Paycheck get home", function () {
    it("Should render", function () {
        const req = {};

        const res = {
            render: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };


        paycheckController.index(req, res, next)
        expect(res.render.calledOnce).to.be.true;
    });
});

describe("paycheck_create_post", function () {
    it("should render result", function () {
        const req = {
            body: { name: 'Employee Name', dependants: ['Dependant'] }
        };

        const res = {
            render: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };

        paycheckController.paycheck_create_post(req, res, next)
        expect(res.json.calledOnce).to.be.true;
    });
});

describe("paycheck_create_post_render", function () {
    it("should render result", function () {
        const req = {
            body: { name: 'Employee Name', dependants: ['Dependant'] }
        };

        const res = {
            render: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };

        paycheckController.paycheck_create_post_render(req, res, next)
        expect(res.render.calledOnce).to.be.true;
    });
});
