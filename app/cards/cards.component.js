System.register(['angular2/core', '../firebase/firebase.service', '../pipes/shortText.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_service_1, shortText_pipe_1;
    var CardsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            },
            function (shortText_pipe_1_1) {
                shortText_pipe_1 = shortText_pipe_1_1;
            }],
        execute: function() {
            CardsComponent = (function () {
                function CardsComponent(_firebaseService) {
                    this._firebaseService = _firebaseService;
                }
                ;
                CardsComponent.prototype.ngOnInit = function () {
                    this.firebaseRef = this._firebaseService.getFirebaseRef();
                    this.getCard();
                };
                CardsComponent.prototype.getCard = function () {
                    var self = this; // här blir this appen
                    this.firebaseRef.once("value", function (snapshot) {
                        self.articles = snapshot.val().cards;
                        var articleObject = self.articles;
                        console.log(articleObject);
                        for (var item in articleObject) {
                        }
                    });
                };
                CardsComponent = __decorate([
                    core_1.Component({
                        selector: 'card',
                        templateUrl: "./app/templates/cards.html",
                        pipes: [shortText_pipe_1.ShortText],
                        providers: [firebase_service_1.FirebaseService]
                    }), 
                    __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
                ], CardsComponent);
                return CardsComponent;
            })();
            exports_1("CardsComponent", CardsComponent);
        }
    }
});
//# sourceMappingURL=cards.component.js.map