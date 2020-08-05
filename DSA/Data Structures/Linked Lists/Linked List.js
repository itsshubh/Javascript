class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // add a node
    add(data) {
        var node = new Node(data);
        var current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert node at a given location
    insertAt(data, location) {
        if (location < 0) { return false; }
        if (location > 0 && location > this.size) {
            return false;
        } else {
            var node = new Node(data);
            var current, previous;
            current = this.head;
            if (location == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                var iterator = 0;
                while (iterator < location) {
                    iterator++;
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }
        }
        this.size++;
    }

    // remove node from a given location
    removeFrom(location) {
        if (location < 0) { return false; }
        if (location > 0 && location > this.size) {
            return false;
        } else {
            var current, previous, iterator = 0;
            current = this.head;
            previous = current;

            if (location == 0) {
                this.head = current.next;
            } else {
                while (iterator < location) {
                    previous = current;
                    current = current.next;
                    iterator++;
                }
                previous.next = current.next;
            }
        }
        this.size--;
        return current.data
    }

    // remove a node of which a value is given
    removeNode(data) {
        var previous = null, current = this.head;
        while (current != null) {
            if (current.data == data) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data
            }
            previous = current;
            current = current.next;
        }
        return "Node not found.";
    }

    // Helpers

    // index of a particular node
    indexOf(value) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.data == value) {
                return count;
            }
            current = current.next;
            count++;
        }
        return "Node not found";
    }

    // is linked list empty
    isEmpty() {
        if (this.head == null) {
            return true;
        } else {
            return false;
        }
    }

    // print linked list
    printList() {
        var current = this.head;
        var linkedListString = '';
        while (current != null) {
            linkedListString += current.data + "->"
            current = current.next;
        }
        linkedListString += 'null'
        console.log(linkedListString);
    }
}

module.exports = LinkedList;