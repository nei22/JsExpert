const EntityBase = require("./entityBase");
const Util = require("./util");

class Employee extends EntityBase{
    static #taxes_percentual = 0.2
    #grossPay = 5000.50

    get grossPay(){
        return Util.formatCurrency(this.#grossPay)
    }

    get netPay() {
        const result = this.#grossPay - (this.#grossPay * Employee.#taxes_percentual)
        return Util.formatCurrency(result)
    }
    
}
module.exports = Employee 
