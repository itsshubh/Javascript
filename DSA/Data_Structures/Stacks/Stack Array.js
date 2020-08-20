class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length == 0) {
            return -1; // Underflow, Stack is empty
        }
        var element = this.items[this.items.length - 1];
        this.items.length = this.items.length - 1;
        return element;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0
    }
    printStack() {
        var stackStr = "Top -> ";
        for (var i = this.items.length - 1; i >= 0; i--) {
            stackStr += this.items[i] + " "
        }
        return stackStr;
    }

    // Stack Reverse
    reverseStack = '';
    reverse() {
        this.reverseHelper(this.items.length - 1);
        this.reverseStack += " <- Top"
        return this.reverseStack;
    }
    reverseHelper(index) {
        if (index != 0) {
            this.reverseHelper(index - 1);
        }
        this.reverseStack += this.items[index] + " ";
    }
}

module.exports = Stack;