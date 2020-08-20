## Arrays

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array.

They are used to store ordered collections.


### Declaration
There are two syntaxes for creating an empty array:

    let arr = new Array();
    let arr = [];

    let x = ['Angular','Vue','React'];
    
    console.log(x[0]);  // Angular

An array can store elements of any type.
For instance:

    // mix of values
    let arr = [ 'Angular', { version: 5 }, true, function() { console.log('Angular'); } ];

    console.log( arr[1].version ); 5
    arr[3](); // Angular


### Methods pop/push, shift/unshift

A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

- __push__ appends an element to the end.
- __shift__ get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

There’s another use case for arrays – the data structure named stack. It supports two operations:

- __push__ adds an element to the end.
- __pop__ takes an element from the end.

JS Arrays support all these operations.

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both to/from the beginning or the end.

In computer science the data structure that allows this, is called __deque__.


Array Methods:
- __pop()__ - Extracts the last element of the array and returns it:
- __push()__ - Append the element to the end of the array:
- __shift()__ - Extracts the first element of the array and returns it:
- __unshift()__ - Add the element to the beginning of the array:


### Loops (Iteration)

1. __for loop:__

    let arr = ["Apple", "Orange", "Pear"];

    for (let i = 0; i < arr.length; i++) {
        alert( arr[i] );
    }

2. __for..of:__

    let fruits = ["Apple", "Orange", "Plum"];

    // iterates over array elements
    for (let fruit of fruits) {
        alert( fruit );
    }

The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

3. __for..in:__ (Because, arrays are objects)

    let arr = ["Apple", "Orange", "Pear"];

    for (let key in arr) {
    alert( arr[key] ); // Apple, Orange, Pear
    }