
var Queue = require("./queues");
var queue = new Queue();

console.log(queue.dequeue());
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.printQueue());

console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.printQueue());

console.log(queue.front());
console.log(queue.dequeue());
queue.enqueue(70);
console.log(queue.printQueue()); 