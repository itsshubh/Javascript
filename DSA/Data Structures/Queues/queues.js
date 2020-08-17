class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() {
        // returns the Front element of  
        // the queue without removing it. 
        if (this.isEmpty()) {
            return -1; // Empty Queue.
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        var queueStr = 'Front';
        for (var i = 0; i < this.items.length; i++) {
            queueStr += "<-" + this.items[i];
        }
        queueStr += "<-rear"
        return queueStr;
    }
}

module.exports = Queue;