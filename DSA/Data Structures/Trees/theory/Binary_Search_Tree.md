## Binary Search Tree

Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers.

- It is called a binary tree because each tree node has a maximum of two children.
- It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time.

The properties that separate a binary search tree from a regular binary tree is
- All nodes of left subtree are less than the root node.
- All nodes of right subtree are more than the root node.
- Both subtrees of each node are also BSTs i.e. they have the above two properties.

There are 3 basic operations that you can perform on a binary search tree:

__1. Search Operation__    
The algorithm depends on the property of BST that if each left subtree has values below root and each right subtree has values above the root.
If the value is below the root, we can say for sure that the value is not in the right subtree; we need to only search in the left subtree and if the value is above the root, we can say for sure that the value is not in the left subtree; we need to only search in the right subtree.

__Algorithm:__  

    If root == NULL 
        return NULL;
    If number == root->data 
        return root->data;
    If number < root->data 
        return search(root->left)
    If number > root->data 
        return search(root->right)


__2. Insert Operation__
Inserting a value in the correct position is similar to searching because we try to maintain the rule that the left subtree is lesser than root and the right subtree is larger than root.
We keep going to either right subtree or left subtree depending on the value and when we reach a point left or right subtree is null, we put the new node there.

__Algorithm:__  

    If node == NULL  
        return createNode(data)  
    if (data < node->data)  
        node->left  = insert(node->left, data);  
    else if (data > node->data)  
        node->right = insert(node->right, data);    
    return node;  


__3. Deletion Operation__
There are three cases for deleting a node from a binary search tree.

__Case I__
The node to be deleted is the leaf node. In such a case, simply delete the node from the tree.

__Case II__
The node to be deleted lies has a single child node. In such a case follow the steps below:

1. Replace that node with its child node.
2. Remove the child node from its original position.

__Case III__
The node to be deleted has two children. In such a case follow the steps below:

1. Get the inorder successor of that node.
2. Replace the node with the inorder successor.
3. Remove the inorder successor from its original position.

__Delete 3__

                    - 3 to be Deleted                        
                            8
                          /   \
                         3     10
                       /   \     \
                      1     6    14
                           / \
                          4   7


                - Copy the value of the 
            inorder successor (4) to the node.
                            8
                          /   \
                         3     10
                       /   \     \
                      1     6    14
                           / \
                          4   7


              - Delete the inorder successor
                            8
                          /   \
                         4     10
                       /   \     \
                      1     6    14
                             \
                              7


### Binary Search Tree Complexities
__Time Complexity__

Operation	Best Case Complexity	Average Case Complexity	    Worst Case Complexity
Search	        O(log n)	            O(log n)	                    O(n)
Insertion	    O(log n)	            O(log n)	                    O(n)
Deletion	    O(log n)	            O(log n)	                    O(n)
Here, n is the number of nodes in the tree.

__Space Complexity__ 

The space complexity for all the operations is O(n).

__Binary Search Tree Applications__
- In multilevel indexing in the database
- For dynamic sorting
- For managing virtual memory areas in Unix kernel
