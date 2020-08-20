class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    // Add data to the end of linked list.
    push(data) {
        var node = new Node(data);
        if (this.first === null) {
            this.first = this.last = node;
        } else {
            var temp = this.last;
            this.last = node;
            node.prev = temp;
            temp.next = node;
        }
    }

    // Add data to the beginning of linked list.
    unshift(data) {
        var node = new Node(data);
        if (this.first === null) {
            this.first = this.last = node;
        } else {
            var temp = this.first;
            this.first = node;
            node.next = temp;
            temp.prev = node;
        }
    }

    // In order traversal of the linked list.
    inorder(callback) {
        if (this.first === null) {
            return -1;
        }
        var temp = this.first;
        while (temp) {
            callback(temp.data);
            temp = temp.next;
        }
    }

    // Remove data from the linked list. 
    remove(data) {
        if (this.first === null) {
            return false;
        }
        var temp = this.first;
        var next, prev;
        while (temp) {
            if (temp.data === data) {
                next = temp.next;
                prev = temp.prev;
                if (next) {
                    next.prev = prev;
                }
                if (prev) {
                    prev.next = next;
                }
                if (temp === this.first) {
                    this.first = next;
                }
                if (temp === this.last) {
                    this.last = prev;
                }
                return true;
            }
            temp = temp.next
        }
    }

    // Check if linked list contains cycle.
    hasCycle() {
        var fast = this.first;
        var slow = this.first;
        while (true) {
            if (fast === null) {
                return false;
            }
            fast = fast.next;
            if (fast === null) {
                return false;
            }
            fast = fast.next;
            slow = slow.next;
            if (fast === slow) {
                return true;
            }
        }
    }

    // Return last node from the linked list.
    pop() {
        if (this.last === null) {
            return null;
        }
        var temp = this.last;
        this.last = this.last.prev;
        return temp;
    }

    // Return first node from the linked list.
    shift() {
        if (this.first === null) {
            return null;
        }
        var temp = this.first;
        this.first = this.first.next;
        return temp;
    }

    // Reverses the linked list recursively
    reverseRecursively() {
        function inverse(current, next) {
            if (!next) return;
            inverse(next, next.next);
            next.next = current;
        }

        if (!this.first) {
            return;
        }
        inverse(this.first, this.first.next);
        var temp = this.first;
        this.first.next = null;
        this.first = this.last;
        this.last = temp;
    }

    // Reverses the linked list iteratively
    reverseIteratively() {
        if (!this.first || !this.first.next) {
            return;
        }
        var current = this.first;
        var next;
        do {
            next = current.next
            current.next = current.prev
            current.prev = next
            current = next
        } while (next)
        var temp = this.first
        this.first = this.last
        this.last = temp
    }
}

module.exports = LinkedList;