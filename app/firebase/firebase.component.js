System.register([], function(exports_1) {
    var Firebase, db_Firebase;
    return {
        setters:[],
        execute: function() {
            Firebase = (function () {
                function Firebase() {
                }
                return Firebase;
            })();
            exports_1("Firebase", Firebase);
            // Create a callback to handle the result of the authentication'
            db_Firebase = new Firebase("https://omgsrc.firebaseio.com/");
        }
    }
});
//# sourceMappingURL=firebase.component.js.map