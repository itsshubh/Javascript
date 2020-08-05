var counterModule = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log(`Counter value prior to reset: ${counter}`);
            counter = 0;
        }
    };
})();

// Increment our counter
counterModule.incrementCounter();

// Check the counter value and reset
counterModule.resetCounter();              // Outputs: counter value prior to reset: 1

/* Here, other parts of the code are unable to directly read the value of our incrementCounter() or resetCounter(). The counter variable is
 actually fully shielded from our global scope so it acts just like a private variable would - its existence is limited to within the
 module's closure so that the only code able to access its scope are our two functions. Our methods are effectively namespaced so in the
 counterModule section of our code, we need to prefix any calls with the name of the module (e.g. "counterModule"). */


