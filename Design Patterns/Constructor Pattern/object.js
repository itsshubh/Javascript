// Create a new empty object:
var newObj = {};

var newObj = Object.create(Object.prototype);

// Creates an object wrapper for a specific value, or where no value is passed, it will create an empty object and return it.
var newObj = new Object();


// Assigning Keys And Values to an Object.

// 1. Dot Syntax
newObj.someKey = "Some Value";
var value = newObj.someKey;


// 2. Square Bracket Synatx
newObj["someKey"] = "Some Value";
var value = newObj["someKey"];


// 3. Object.defineProperty

Object.defineProperty(newObj, "someKey", {
    value: "For more control of the property's behaviour",
    writable: true,
    enumerable: true,
    configurable: true
})

// If the above feels a little difficult to read, a short-hand could
// be written as follows: 
var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};

// To use, we then create a new empty "person" object
var person = Object.create(Object.prototype);

// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

console.log(person);  // Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}


// 4. Object.defineProperties

Object.defineProperties(newObj, {
    "someKey": {
        value: "Some Value",
        writable: true
    },
    "anotherKey": {
        value: "Another Value",
        writable: true
    }
});


// These methods can be used for Inheritance too
var driver = Object.create(person);
defineProp(driver, "topSpeed", "100mph");
console.log(driver.dateOfBirth);                     // 1981
console.log(driver.topSpeed);                        // 100mph