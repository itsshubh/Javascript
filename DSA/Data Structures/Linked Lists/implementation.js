var LinkedList = require('./Linked List');

var ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(10);
ll.printList();

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("is node removed ? " + ll.removeNode(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

ll.insertAt(60, 2);
ll.printList();

console.log("is List Empty ? " + ll.isEmpty());
console.log(ll.removeFrom(3));

ll.printList();
