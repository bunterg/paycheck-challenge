exports.Paycheck = class Paycheck {
    dependantsIndividualCost = 500;

    constructor(
        employeeName,
        dependantNames,
        paycheckAmount = 2000,
        paycheckCount = 26,
        benefits = 1000,
        dependantsIndividualCost = 500,
        discountRate = 0.1,
        ) {
        this.employeeName = employeeName;
        this.dependantNames = dependantNames;
        this.paycheckCount = paycheckCount;
        this.paycheckAmount = paycheckAmount;
        this.benefits = benefits;
        this.dependantsIndividualCost = dependantsIndividualCost;
        this.discountRate = discountRate;
    }

    haveDiscount() {
        return [this.employeeName, ...this.dependantNames].some(name => {
            return name && (typeof name === 'string' || name instanceof String) && name.toLowerCase().startsWith("a")
        })
    }

    dependantsCost() {
        return this.dependantNames.length * this.dependantsIndividualCost;
    }

    discount() {
        let costs = this.dependantsCost() + this.benefits;
        return this.haveDiscount() ? costs * this.discountRate : 0;
    }

    takeHomePay() {
        let sum = this.paycheckAmount * this.paycheckCount;
        let dependantCost = this.dependantsCost();
        let discount = this.discount();

        return sum - dependantCost - this.benefits + discount;
    }

    toOBJ() {
        return {
            paycheckCount: this.paycheckCount,
            paycheckAmount: this.paycheckAmount,
            paycheckSum: this.paycheckCount * this.paycheckAmount,
            dependantsCount: this.dependantNames.length || 0,
            dependantsIndividualCost: this.dependantsIndividualCost,
            dependantsCost: this.dependantsCost(),
            benefitsCost: this.benefits,
            haveDiscount: this.haveDiscount(),
            discount: this.discount(),
            computedValue: this.takeHomePay()
        }
    }
}
