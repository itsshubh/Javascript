// By simply prefixing a call to a constructor function with the keyword "new", we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object with the members defined by that function.

// Inside a constructor, the keyword this references the new object that's being created. Revisiting object creation, a basic constructor may look as follows:

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return `${this.model} has done ${this.miles} miles.`;
    }
}

// Creating instances of a Car.
var civic = new Car("Honda Civic", 2019, 12000);
var innova = new Car("Toyota Innova", 2010, 100000);

console.log(civic.toString());
console.log(innova.toString());

// Here we have some problems
// 1) It makes inheritance difficult,
// 2) The other is that functions such as toString() are redefined for each of the new objects created using the Car constructor. This isn't very optimal as the function should ideally be shared between all of the instances of the Car type.

// Therefore we use Constructors with prototypes.
// Functions, like almost all objects in JavaScript, contain a "prototype" object. 
// When we call a JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object. In this fashion, multiple Car objects can be created which access the same prototype. We can thus extend the original example as follows:

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// A single instance of toString() will now be shared between all of the Car objects.
Car.prototype.toString = function () {
    return `${this.model} has done ${this.miles} miles.`;
}

// Creating instances of a Car.
var civic = new Car("Honda Civic", 2019, 12000);
var innova = new Car("Toyota Innova", 2010, 100000);

console.log(civic.toString());
console.log(innova.toString());
