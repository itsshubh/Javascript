var BST = require("./binary_search_tree");

var bst = new BST();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(15);
bst.insert(40);
bst.insert(60);
bst.insert(80);
bst.insert(45);
bst.insert(85);

bst.inorder(function (node) {
    console.log("in", node.value);
});

bst.preorder(function (node) {
    console.log("pre", node.value);
});

bst.postorder(function (node) {
    console.log("post", node.value);
});

bst.levelOrder(function (node) {
    console.log("level", node.value);
})