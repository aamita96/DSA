// 1)  Object literal (most common)
const car = {
  name: 'Venue',
  brand: 'Hyundai',
  model: 2020
}
console.log(car.name); // Venue

// You can also add properties later:
car.built = 2019; // or car['built'] = 2019;

// 2) Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Amit", 30);
console.log(person1.name + " " + person1.age);

// 3) Using class
// Classes are a common way to define properties for objects.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new User('John', 20);
console.log(user.name + " - " + user.age);

// 4) Using Object.assign
const mario = Object.assign({}, { name: 'Mario', age: 999999 });
console.log(mario.name);

// 5) Using Object.create
const sport = Object.create({}, {
  name: {
    value: 'cricket',
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log(sport)

// 6) Using Object.defineProperty
// This lets you control how a property behaves, including whether it can be changed, enumerated, or deleted.
const ball = {};

Object.defineProperty(ball, "name", {
  value: 'Football',
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(ball);

/**
 * 1. enumerable: Should the property show up when listing properties?
 * - Imagine you want to list all the properties of an object.
 * - with enumerable: true:
 * - console.log(Object.keys(user));
 * - // ["name"]
 * - The name property appears because it is enumerable.
 * 
 * Now let's make it false
 * 
 * Object.defineProperty(user, "secret", {
 *    value: "12345",
 *    enumerable: false
 *  });
 * console.log(Object.keys(user));
 * // ["name"]
 * Notice that secret doesn't appear.
 * 
 * However, you can still access it:
 * 
 * console.log(user.secret);
 * // "12345"
 * 
 * 2. configurable: Can you remove or reconfigure the property?
 * if we do - 
 *  configurable: false
 * 
 * This means you cannot delete name or change its property descriptor in ways that require configurability.
 * 
 * For example:
 *  console.log(delete user.name);
 * // false (in non-strict mode)
 * Because the property is non-configurable, it cannot be deleted using delete.
 * You also cannot change writable from false to true afterward:
 * Object.defineProperty(user, "name", {
 *   writable: true
 * });
 * 
 * 3. writable — Can you change the value?
 */