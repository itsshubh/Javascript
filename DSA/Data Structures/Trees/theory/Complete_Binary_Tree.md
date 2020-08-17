## Complete Binary Tree

A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left.

A complete binary tree is just like a full binary tree, but with two major differences-
1. All the leaf elements must lean towards the left.
2. The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.

                1
               / \
              2   3
             / \ / 
            4  5 6


__How a Complete Binary Tree is Created?__

[11,12,13,14,15,16]
1. Select the first element(11) of the list to be the root node. (no. of elements on level-I: 1)
2. Put the second element(12) as a left child of the root node and the third element(13) as the right child. (no. of elements on level-II: 2)
3. Put the next two elements(14,15) as children of the left node of the second level. Again, put the next two elements(16) as children of the right node of the second level (no. of elements on level-III: 4) elements).
4. Keep repeating until you reach the last element(16).

__Relationship between array indexes and tree element__
A complete binary tree has an interesting property that we can use to find the children and parents of any node.

If the index of any element in the array is __i__, the element in the __index 2i+1__ will become the left child and element in __2i+2 index__ will become the right child. Also, the parent of any element at __index i__ is given by the __lower bound of (i-1)/2.__

Complete Binary Tree Applications
- Heap-based data structures
- Heap sort [Heap Sort](../../../Algorithms/Sorting/Heap_Sort/readme.md)