## Linked List

A linked list is a linear data structure which includes a series of connected nodes. Here, each node store the data and the address of the next node. In linked list, elements are not stored at a contiguous location; the elements are linked using pointers.


### Representation:
A linked list is represented by a pointer to the first node of the linked list. The first node is called the head. If the linked list is empty, then the value of the head is NULL.
Each node in a list consists of at least two parts:
1. Data
2. Pointer (Or Reference) to the next node

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)


### Types of Linked List 
1. Singly Linked List 
2. [Doubly Linked List](..\..\..\Assets\md_files\topics\doubly_linked_list.md)
3. [Circular Linked List](..\..\..\Assets\md_files\topics\circular_linked_list.md)


### Why Linked List?
Arrays can be used to store linear data of similar types, but arrays have the following limitations.

1. The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2. Inserting a new element in an array of elements is expensive because the room has to be created for the new elements and to create room existing elements have to be shifted.


### Advantages over arrays
1. Dynamic size
2. Ease of insertion/deletion


### Drawbacks:
1. Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation.
2. Extra memory space for a pointer is required with each element of the list.
3. Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.


### Linked List Applications

- Dynamic memory allocation
- Implemented in stack and queue
- In undo functionality of softwares
- Hash tables, Graphs

