## Tree Traversal - inorder, preorder and postorder

Traversing a tree means visiting every node in the tree. Linear data structures like arrays, stacks, queues, and linked list have only one way to read the data. But a hierarchical data structure like a tree can be traversed in different ways.

__Inorder traversal__
1. First, visit all the nodes in the left subtree
2. Then the root node
3. Visit all the nodes in the right subtree

    inorder(root->left)
    display(root->data)
    inorder(root->right)

__Preorder traversal__
1. Visit root node
2. Visit all the nodes in the left subtree
3. Visit all the nodes in the right subtree

    display(root->data)
    preorder(root->left)
    preorder(root->right)

__Postorder traversal__
1. Visit all the nodes in the left subtree
2. Visit all the nodes in the right subtree
3. Visit the root node

    postorder(root->left)
    postorder(root->right)
    display(root->data)

