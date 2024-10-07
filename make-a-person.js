/**
 * Fill in the object constructor with the following methods below:
 * 
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(first, last)
 * 
 * Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. 
 * Each test will declare a new Person instance as new Person('Bob', 'Ross').
 */


const Person = function (first, last) {
    let firstname = first;
    let lastname = last;

    this.getFirstName = function () {
        return firstname;
    };

    this.setFirstName = function (value) {
        firstname = value;
    };

    this.getLastName = function () {
        return lastname;
    };

    this.setLastName = function (value) {
        lastname = value;
    };

    this.getFullName = function () {
        return this.getFirstName() + ' ' + this.getLastName();
    };
    this.setFullName = function (first, last) {
        this.setFirstName(first);
        this.setLastName(last);
    };
};

const person = new Person();
person.setFullName('Haskell', 'Curry');
console.log(person.getFullName())