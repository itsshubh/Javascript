// Import mixins
// Global module
var myModule = (function (jQ, _) {
    function privateMethod1() {
        jQ(".container").html("test");
    }
    function privateMethod2() {
        console.log(_.min([10, 5, 100, 2, 1000]));
    }
    return {
        publicMethod: function () {
            privateMethod1();
        }
    };
    // Pull in jQuery and Underscore
})(jQuery, _);
myModule.publicMethod();


// Exports
// Global module
var myModule = (function () {
    var module = {},
        privateVariable = "Hello World";
    function privateMethod() {
        // ...
    }
    module.publicProperty = "Foobar";
    module.publicMethod = function () {
        console.log(privateVariable);
    };
    return module;
})();