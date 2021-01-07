const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const should = chai.should();
const expect = chai.expect;

// request mocks
const mock = require('./mock.json');
var server;

describe('GET /', () => {
    beforeEach(function () {
        server = require('../../app');
    });
    it('should return home site', done => {
        chai
            .request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
describe('POST /paycheck', () => {
    beforeEach(function () {
        server = require('../../app');
    });
    it('should return to result', done => {
        chai
            .request(server)
            .post('/paycheck')
            .type('form')
            .send(mock.req)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it('should return to result', done => {
        chai
            .request(server)
            .post('/paycheck')
            .type('form')
            .send({
                name: 'employee'
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it('should return some error', done => {
        chai
            .request(server)
            .post('/paycheck')
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});
describe('POST /api/v1/paycheck_calculate', () => {
    beforeEach(function () {
        server = require('../../app');
    });
    it('should calculate take home pay', done => {
        chai
            .request(server)
            .post('/api/v1/paycheck_calculate')
            .type('form')
            .send(mock.req)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.deep.equal(mock.res);
                done();
            });
    });
    it('should calculate take home pay', done => {
        chai
            .request(server)
            .post('/paycheck')
            .type('form')
            .send({
                name: 'employee'
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it('should throw error', done => {
        chai
            .request(server)
            .post('/paycheck')
            .type('form')
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});