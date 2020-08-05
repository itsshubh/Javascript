Constructor Design Pattern 

A constructor is a special method used to initialize a newly created object once memory has been allocated for it.

Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

Basic Constructors
By simply prefixing a call to a constructor function with the keyword "new", we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object with the members defined by that function.
Inside a constructor, the keyword this references the new object that's being created.

Constructors With Prototypes
Functions, like almost all objects in JavaScript, contain a "prototype" object. When we call a JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object. In this fashion, multiple objects can be created which access the same prototype.