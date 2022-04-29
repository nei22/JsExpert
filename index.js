// const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//     name: "Ednei R Louback",
//     gender: "male"
// }).gender);

// console.log(new EntityBase({
//     name: "Xuxa da silva",
//     gender: "female"
// }).name);

const assert = require('assert')
const Employee = require('./Employee')
const Manager = require('./manager')
const Util = require('./util')
const GENDER ={
    male: 'male',
    female: 'female'
}


{
    const employee = new Employee({
        name: 'Xuxa Da Silva Memo',
        gender: GENDER.female   
    })
    
    assert.throws(() => employee.birthYear, {message: 'You , must define age first Peew!!'})
}
const current_year = 2022
Date.prototype.getFullYear = () => current_year
{
    const employee = new Employee({
        name: 'Mariazinha',
        age: 18,
        gender: GENDER.female
    })

    assert.deepStrictEqual(employee.name, "Ms. Mariazinha")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.50))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.40))

    const expectedBirthYear = 2004
    assert
    .deepStrictEqual(employee.birthYear, expectedBirthYear)


    // noSet noChanges cuz Age has one set
    employee.birthYear = new Date().getFullYear() - 80
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1942)
    
    console.log('------Employee--------')

    console.log('employee name', employee.name)    
    console.log('employee age', employee.age)
    console.log('employee gender', employee.gender)
    console.log('employee grossPay', employee.grossPay)
    console.log('employee netPay', employee.netPay)


}

{
    const manager = new Manager({
        name: 'Joaozinho',
        age: 20,
        gender: GENDER.male
    })
    assert.deepStrictEqual(manager.name, "Mr. Joaozinho")
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.birthYear, 2002)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.50))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.40))
    console.log('\n ------Manager--------')
    console.log('manager.name', manager.name);
    console.log('manager.age', manager.age);
    console.log('manager.gender', manager.gender);
    console.log('manager.birthYear', manager.birthYear);
    console.log('manager.grossPay', manager.grossPay);
    console.log('manager.bonuses', manager.bonuses);
    console.log('manager.netPay', manager.netPay);    
}



