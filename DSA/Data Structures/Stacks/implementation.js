var Stack = require('./Stack Array');

var myStack = new Stack();

console.log(myStack.isEmpty());
console.log(myStack.pop());

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.reverse())
console.log(myStack.printStack());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.printStack());  