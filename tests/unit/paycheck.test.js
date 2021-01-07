const assert = require('assert');

const { Paycheck } = require('../../models/paycheck');

describe('Paycheck', function () {
    const paycheckNoDependant = new Paycheck('employee name', []);
    const paycheckDiscount = new Paycheck('Aemployee name', []);
    const paycheck1Dependant = new Paycheck('employee name', ['dependant name']);
    const paycheck2 = new Paycheck('Aemployee name', ['dependant name']);
    const paycheck3 = new Paycheck('employee name', ['Adependant name', 'dependant name']);
    const paycheck4 = new Paycheck('Aemployee name', ['Adependant name', 'dependant name', 'dependant name']);

    console.log(Object.getOwnPropertyNames(paycheckNoDependant))
    describe('Should have a discount', function () {
        it(`should not have a discount anyone whose name doesn't start with ‘A’`, function () {
            assert.strictEqual(paycheckNoDependant.haveDiscount(), false);
            assert.strictEqual(paycheck1Dependant.haveDiscount(), false);
        });
        it('Should have a discount anyone whose name starts with ‘A’', function () {
            assert.strictEqual(paycheck2.haveDiscount(), true);
            assert.strictEqual(paycheck3.haveDiscount(), true);
            assert.strictEqual(paycheck4.haveDiscount(), true);
        });
    });

    describe('Dependant cost', function () {
        it(`Should return dependant cost before deductions`, function () {
            assert.strictEqual(paycheckNoDependant.dependantsCost(), 0);
            assert.strictEqual(paycheck1Dependant.dependantsCost(), 500);
            assert.strictEqual(paycheck2.dependantsCost(), 500);
            assert.strictEqual(paycheck3.dependantsCost(), 1000);
            assert.strictEqual(paycheck4.dependantsCost(), 1500);
        });
    });

    describe('Discount cost', function () {
        it('Should return discount amount', function () {
            assert.strictEqual(paycheckNoDependant.discount(), 0);
            assert.strictEqual(paycheckDiscount.discount(), 100);
            assert.strictEqual(paycheck1Dependant.discount(), 0);
            assert.strictEqual(paycheck2.discount(), 150);
            assert.strictEqual(paycheck3.discount(), 200);
            assert.strictEqual(paycheck4.discount(), 250);
        });
    });
    describe('Take home pay', function () {
        let total = 26 * 2000;
        let benefits = 1000;
        let dependantCost = 500;
        let takeHomeSingle = total - benefits;
        let takeHomeDiscount = takeHomeSingle + (benefits * 0.1);
        let takeHomeDiscount2 = takeHomeSingle - dependantCost + ((benefits + dependantCost) * 0.1);
        let takeHomeDiscount3 = takeHomeSingle - dependantCost * 2 + ((benefits + dependantCost * 2) * 0.1);
        let takeHomeDiscount4 = takeHomeSingle - dependantCost * 3 + ((benefits + dependantCost * 3) * 0.1);

        it('Should compute take home pay', function () {
            assert.strictEqual(paycheckNoDependant.takeHomePay(), takeHomeSingle);
            assert.strictEqual(paycheckDiscount.takeHomePay(), takeHomeDiscount);
            assert.strictEqual(paycheck1Dependant.takeHomePay(), takeHomeSingle - dependantCost);
            assert.strictEqual(paycheck2.takeHomePay(), takeHomeDiscount2);
            assert.strictEqual(paycheck3.takeHomePay(), takeHomeDiscount3);
            assert.strictEqual(paycheck4.takeHomePay(), takeHomeDiscount4);
        });
    });
});