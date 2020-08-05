var myModule = {
    myProperty: "someValue",
    myConfig: {
        useCaching: true,
        language: "en"
    },
    basicMethod: function () {
        console.log("A Very Basic Method");
    },
    reportMyConfig: function () {
        console.log(`Caching is: ${(this.myConfig.useCaching ? "enabled" : "disabled")}`);
    },
    updateMyConfig: function (newConfig) {
        // override the current configuration
        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.basicMethod();
myModule.reportMyConfig();  // Outputs: Caching is: enabled
myModule.updateMyConfig({
    language: "fr",
    useCaching: false
});                         // Outputs: fr
myModule.reportMyConfig();  // Outputs: Caching is: disabled