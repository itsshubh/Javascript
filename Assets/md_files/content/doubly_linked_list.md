## Doubly Linked List

A Doubly Linked List(DLL) contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list. Thus, we can go in either direction: forward or backward.

![DLL](../../Images/DLL1.png)

### Advantages over singly linked list
1. A DLL can be traversed in both forward and backward direction.
2. The delete operation in DLL is more efficient if pointer to the node to be deleted is given.
3. We can quickly insert a new node before a given node.
In singly linked list, to delete a node, pointer to the previous node is needed. To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using previous pointer.


### Disadvantages over singly linked list
1) Every node of DLL Require extra space for an previous pointer. 
2) All operations require an extra pointer previous to be maintained. For example, in insertion, we need to modify previous pointers together with next pointers. 

