## Circular Linked List

A circular linked list is a variation of a linked list in which the last element is linked to the first element. This forms a circular loop. There is no NULL at the end. 

![Circular Linked List](../../Images/CircularLinkedList.png)

A circular linked list can be either singly linked or doubly linked.
- for singly linked list, next pointer of last item points to the first item
- In the doubly linked list, prev pointer of the first item points to the last item as well.


### Advantages of Circular Linked Lists:
1. Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again.

2. Useful for implementation of queue. We don’t need to maintain two pointers for front and rear if we use circular linked list. We can maintain a pointer to the last inserted node and front can always be obtained as next of last.

3. Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.

4. Circular Doubly Linked Lists are used for implementation of advanced data structures like Fibonacci Heap.