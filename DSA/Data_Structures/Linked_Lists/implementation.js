var LinkedList = require('./Linked List');

var ll = new LinkedList();
ll.push(10);

ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);

// ll.inorder(function (data) {
//     console.log(data);
// })

ll.remove(10);

ll.unshift(0);
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.shift());
ll.unshift(100);
ll.push(200);

ll.inorder(function (data) {
    console.log(data);
})

ll.reverseIteratively();
ll.reverseRecursively();