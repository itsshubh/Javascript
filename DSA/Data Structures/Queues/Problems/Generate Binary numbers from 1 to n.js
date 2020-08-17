var Queue = require("../queues");

var generate = function (n) {
    var binaries = new Queue;
    binaries.enqueue("1");
    if (n == 0) return "0";
    if (n == 1) return console.log(binaries.dequeue())
    else {
        while (n-- >= 1) {
            var x = binaries.dequeue();
            console.log(x);
            binaries.enqueue(x + '0');
            binaries.enqueue(x + '1');
        }
    }
    console.log(binaries.printQueue())
}

generate(15);