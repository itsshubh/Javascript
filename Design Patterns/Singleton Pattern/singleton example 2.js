// This ex shows, When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.
var mySingleton = (function () {
    var instance; // Instance stores a reference to the Singleton
    function init() {   // Singleton
        function privateMethod() {
            console.log("I am private");
        }
        var privateRandomNumber = Math.random();
        return {
            config: "Some Configuration",
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };
    return {
        getInstance: function () {
            // Get the Singleton instance if one exists or create one if it doesn't
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

mySingleton.getInstance = function () {
    if (this._instance == null) {
        if (isFoo()) {
            this._instance = new FooSingleton();
        } else {
            this._instance = new BasicSingleton();
        }
    }
    return this._instance;
};
// FooSingleton above would be a subclass of BasicSingleton and implement the same interface.