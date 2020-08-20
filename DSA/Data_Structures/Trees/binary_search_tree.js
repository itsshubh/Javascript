class Node {
    constructor(value, left, right, parent) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class BST {
    constructor(root) {
        this.root = root;
    }

    insert(value, current) {
        if (this.root == null) {
            this.root = new Node(value, null, null, null);
            return;
        }
        var insertKey;
        current = current || this.root;

        if (current.value > value) {
            insertKey = 'left';
        } else {
            insertKey = 'right';
        }

        if (!current[insertKey]) {
            current[insertKey] = new Node(value, null, null, current);
        } else {
            this.insert(value, current[insertKey]);
        }
    }

    // In-order traversal from the given node.
    // Callback which will be called for each traversed node.
    _inorder(current, callback) {
        if (!current) {
            return;
        }
        this._inorder(current.left, callback);
        if (typeof callback === 'function') {
            callback(current);
        }
        this._inorder(current.right, callback);
    }

    // In-order traversal of the whole binary search tree.
    // Callback which will be called for each traversed node
    inorder(callback) {
        return this._inorder(this.root, callback);
    }

    // Post-order traversal from given node.
    // Callback which will be called for each traversed node
    _postorder(current, callback) {
        if (!current) {
            return;
        }
        this._postorder(current.left, callback);
        this._postorder(current.right, callback);
        if (typeof (callback) === 'function') {
            callback(current);
        }
    }

    // Post-order traversal of the whole tree.
    // Callback which will be called for each traversed node
    postorder(callback) {
        return this._postorder(this.root, callback);
    }


    // Pre-order traversal of the tree from given node.
    // Callback which will be called for each traversed node
    _preorder(current, callback) {
        if (!current) {
            return;
        }
        if (typeof (callback) === 'function') {
            callback(current);
        }
        this._preorder(current.left, callback);
        this._preorder(current.right, callback);
    }

    // Pre-order traversal of the whole tree.
    // Callback which will be called for each traversed node
    preorder(callback) {
        return this._preorder(this.root, callback);
    }

    _levelOrder(current, callback) {
        if (!current) {
            return;
        }
        var height = this._getHeight(current);
        for (var i = 1; i <= height; i++) {
            this.givenLevel(current, i, callback);
        }
    }

    givenLevel(node, level, callback) {
        if (node == null) {
            return;
        }
        if (level == 1) {
            if (typeof callback == "function") {
                callback(node)
            }
        }
        else if (level > 1) {
            this.givenLevel(node.left, level - 1, callback);
            this.givenLevel(node.right, level - 1, callback);
        }
    }

    levelOrder(callback) {
        return this._levelOrder(this.root, callback);
    }
    // Find a node by its value in a given sub tree
    find(value, current) {
        if (!current) {
            return null;
        }

        if (current.value === value) {
            return current;
        }

        if (value < current.value) {
            this.find(value, current.left);
        }

        if (value > current.right) {
            this.find(value, current.right);
        }
    }

    // Finds a node by it's value.
    find(value) {
        return this.find(value, this.root);
    }


    // Replaces given child with new one, for given parent
    replaceChild(parent, oldChild, newChild) {
        if (!parent) {
            // make newChild as Root and its parent as null
            this.root = newChild;
            if (this.root != null) {
                this.root.parent = null;
            }
        } else {
            if (parent.left === oldChild) {
                parent.left = newChild;
            } else {
                parent.right = newChild
            }
            if (newChild) {
                newChild.parent = parent;
            }
        }
    }

    remove(node) {
        if (!node) {
            return false;
        }
        if (node.left && node.right) {
            // node has both the children
            // therefore find a inorder successor and replace it with the node you want to delete
            // remove the node.
            var min = this.findMin(node.right);
            var temp = min.value;
            node.value = min.value
            min.value = temp;
            return this.remove(min);
        }
        else {
            if (node.left) {
                this.replaceChild(node.parent, node, node.left);
            } else if (node.right) {
                this.replaceChild(node.parent, node, node.right)
            } else {
                this.replaceChild(node.parent, node, null)
            }
        }
    }

    findMin(node, current) {
        current = current || { value: -Infinity };
        if (!node) {
            return current;
        }
        if (current.value > node.value) {
            current = node;
        }
        return this.findMin(node.left, current);
    }

    findMin() {
        return this.findMin(this.root);
    }

    findMax(node, current) {
        current = current || { value: -Infinity };
        if (!node) {
            return current;
        }
        if (current.value < node.value) {
            current = node;
        }
        return this.findMax(node.right, current);
    }

    findMax() {
        return this.findMax(this.root);
    }


    isBalanced(current) {
        if (!current) return true;
        return this.isBalanced(current.left) &&
            this.isBalanced(current.right) &&
            (Math.abs(this.getHeight(current.left) - this.getHeight(current.right)) <= 1);
    }
    isBalanced() {
        return this.isBalanced(this.root);
    }

    _getHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    }
    getHeight() {
        return this.getHeight(this.root);
    }


    lowestCommonAncestor(firstNode, secondNode) {
        this.lowestCommonAncestor(firstNode, secondNode, this.root);
    }
    lowestCommonAncestor(firstNode, secondNode, current) {
        var firstNodeInLeft = this.existsInSubtree(firstNode, current.left);
        var secondNodeInLeft = this.existsInSubtree(secondNode, current.left);
        var firstNodeInRight = this.existsInSubtree(firstNode, current.right);
        var secondNodeInRight = this.existsInSubtree(firstNode, current.right);
        if (firstNodeInLeft && secondNodeInRight || firstNodeInRight && secondNodeInLeft) {
            return current;
        }
        if (firstNodeInLeft && secondNodeInLeft) {
            this.lowestCommonAncestor(firstNode, secondNode, current.left);
        }
        if (firstNodeInRight && secondNodeInRight) {
            this.lowestCommonAncestor()
        }
    }

    existsInSubtree(node, root) {
        if (!root) return false;
        if (node == root.value) return true;
        return this.existsInSubtree(node, root.left) || this.existsInSubtree(node, root.right);
    }

}

module.exports = BST;