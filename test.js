class A {
    root = 5
    fun(callback) {
        return this.fun(this.root, callback);
    }
    fun(root, callback) {
        if (typeof (callback) === 'function') {
            callback(root);
        }
    }

    getHeight(node, callback) {
        if (!node) return;
        while (node != 0) {
            node--;
            callback(node, callback);
            this.getHeight(node);
        }
        // return 1 + Math.max(this.getHeight1(node--), this.getHeight1(node--));
    }
    getHeight(callback) {
        return this.getHeight(this.root, callback);
    }
}

var a = new A();
a.getHeight(function(a){
    console.log(a);
})
