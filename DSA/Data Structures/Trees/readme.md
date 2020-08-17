### Trees

A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges.


## Why Trees?
1. One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer:

### File system

        /    <-- root
      /      \
    ...       home
          /          \
      ugrad        course
        /       /      |     \
      ...      cs101  cs112  cs113  

2. Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays). 
3. Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists). 
4. Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers. 

__Main applications of trees include:__
- Manipulate hierarchical data.
- Manipulate sorted lists of data.
- Form of a multi-stage decision-making.
- Binary Search Trees(BSTs) are used to quickly check whether an element is present in a set or not.
- Heap is a kind of tree that is used for heap sort.
- A modified version of a tree called Tries is used in modern routers to store routing information.
- Most popular databases use B-Trees and T-Trees, which are variants of the tree structure we learned above to store their data.
- Compilers use a syntax tree to validate the syntax of every program you write.

## Tree Terminologies
__Node__
- A node is an entity that contains a key or value and pointers to its child nodes.
- The last nodes of each path are called __leaf nodes or external nodes__ that do not contain a link/pointer to child nodes.
- The node having at least a child node is called an __internal node__.

__Edge__
It is the link between any two nodes.

__Root__
It is the topmost node of a tree.

__Height of a Node__
The height of a node is the number of edges from the node to the deepest leaf (ie. the longest path from the node to a leaf node).

__Depth of a Node__
The depth of a node is the number of edges from the root to the node.

__Height of a Tree__
The height of a Tree is the height of the root node or the depth of the deepest node.

__Degree of a Node__
The degree of a node is the total number of branches of that node.

__Forest__
- A collection of disjoint trees is called a forest.
- You can create a forest by cutting the root of a tree.


## Types of Tree
1. Binary Tree  [Binary Tree](./theory/Binary_Tree.md)
2. Binary Search Tree [Binary Search Tree](./theory/Binary_Search_Tree.md)
3. AVL Tree [AVL Tree](./theory/AVL_Tree.md)
4. B-Tree [B-Tree](./theory/B_Tree.md)

## Tree Traversal [Tree Traversal](./theory/Tree_Traversal.md)
In order to perform any operation on a tree, you need to reach to the specific node. The tree traversal algorithm helps in visiting a required node in the tree. 
