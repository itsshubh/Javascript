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

var myBadSingleton = (function () {
    var instance;
    function init() {
        var privateRandomNumber = Math.random();
        return {
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };
    return {
        getInstance: function () {
            instance = init();   // Always create a new Singleton instance
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber()); // false
