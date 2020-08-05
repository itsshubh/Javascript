var SingletonTester = (function () {
    // options: an object containing configuration options for the singleton
    function Singleton(options) {
        options = options || {};
        this.name = "SingletonTester";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    var instance;
    var _static = {
        name: "SingletonTester",
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX: 5
});
console.log(singletonTest.pointX);      // Outputs: 5