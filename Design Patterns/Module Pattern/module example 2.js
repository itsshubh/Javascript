var basketModule = (function () {
    var basket = [];
    function doSomethingPrivate() {
        //...
    }
    function doSomethingElsePrivate() {
        //...
    }
    return {
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        getTotalPrice: function () {
            var q = this.getItemCount(),
                p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    };
})();

basketModule.addItem({
    item: "bread",
    price: 24
});
basketModule.addItem({
    item: "butter",
    price: 76
});
console.log(basketModule.getItemCount());               // Outputs: 2
console.log(basketModule.getTotal());                   // Outputs: 100

// However, the following will not work:
// This is because the basket itself is not exposed as a part of our public API
console.log(basketModule.basket);                       // Outputs: undefined
// This also won't work as it only exists within the scope of our basketModule closure, but not in the returned public object
console.log(basket);                                    // Outputs: undefined