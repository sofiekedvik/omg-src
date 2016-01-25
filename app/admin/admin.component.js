System.register(['angular2/core', '../firebase/firebase.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_service_1;
    var Admin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            Admin = (function () {
                function Admin(_firebaseService) {
                    this._firebaseService = _firebaseService;
                    this.card = {
                        header: '',
                        // date: Date,
                        images: [
                            "app/images/angular.jpg"
                        ],
                        link: '',
                        text: '',
                        author: '',
                        category: [
                            "JavaScript",
                            "Framework",
                            "MVC"
                        ],
                        tags: ['HTML', 'JS']
                    };
                }
                ;
                Admin.prototype.ngOnInit = function () {
                    this.firebaseRef = this._firebaseService.getFirebaseRef();
                };
                Admin.prototype.createCard = function () {
                    // console.log(this.firebaseRef);
                    this.firebaseRef.child("cards").push(this.card);
                };
                Admin = __decorate([
                    core_1.Component({
                        selector: 'admin',
                        templateUrl: './app/templates/admin.html',
                        providers: [firebase_service_1.FirebaseService]
                    }), 
                    __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
                ], Admin);
                return Admin;
            })();
            exports_1("Admin", Admin);
        }
    }
});
//# sourceMappingURL=admin.component.js.map