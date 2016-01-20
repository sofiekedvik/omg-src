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
                        "header": "",
                        "images": [],
                        "date": "",
                        "link": "",
                        "text": "",
                        "author": "",
                        "category": [],
                        "type": {
                            article: true,
                            tutorial: false
                        }
                    };
                }
                ;
                // ngOnInit() {
                //   this.firebaseRef = this._firebaseService.getFirebaseRef();
                //   var self = this;
                // }
                Admin.prototype.ngOnInit = function () {
                    this.firebaseRef = this._firebaseService.getFirebaseRef();
                    // var self = this;
                    // this.firebaseRef.child("cards").set(
                    //   {
                    //     "header": "Pipes in Angular 2",
                    //     "date": "2016-01-13",
                    //     "images": [
                    //       "app/images/angular.jpg"
                    //     ],
                    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
                    //     "text": "In most applications, users navigate from one view to the next as they perform application tasks.",
                    //     "author": "Angular",
                    //     "category": [
                    //       "JavaScript",
                    //       "Framework",
                    //       "MVC"
                    //     ],
                    //     "article": true,
                    //     "tutorial": false
                    //   },
                    //   {
                    //     "header": "Pipes in React",
                    //     "date": "2016-01-12",
                    //     "images": [
                    //       "app/images/wordpress.jpg"
                    //     ],
                    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
                    //     "text": "The browser is a familiar model of application navigation. We enter a URL in the address bar and the browser navigates to a corresponding page. We click links on the page and the browser navigates to a new page. ",
                    //     "author": "React",
                    //
                    //     "category": [
                    //       "JavaScript",
                    //       "Framework",
                    //       "MVC"
                    //     ],
                    //     "article": true,
                    //     "tutorial": false
                    //   }
                    // )
                    this.createCard();
                };
                Admin.prototype.createCard = function () {
                    this.firebaseRef = this._firebaseService.getFirebaseRef();
                    this.firebaseRef.child('cards').once("value", function (snapshot) {
                        console.log(snapshot.val());
                        // chatRef.child("messages").push({
                        //     username: username,
                        //     message: message
                        // })
                    });
                    // this.firebaseRef = this._firebaseService.getFirebaseRef();
                    // var self = this;
                    // var usersRef = this.firebaseRef.child("cards");
                    // usersRef.set(
                    //   {
                    //     "header": "Pipes in Angular 2",
                    //     "date": "2016-01-13",
                    //     "images": [
                    //       "app/images/angular.jpg"
                    //     ],
                    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
                    //     "text": "In most applications, users navigate from one view to the next as they perform application tasks.",
                    //     "author": "Angular",
                    //     "category": [
                    //       "JavaScript",
                    //       "Framework",
                    //       "MVC"
                    //     ],
                    //     "article": true,
                    //     "tutorial": false
                    //   },
                    //   {
                    //     "header": "Pipes in React",
                    //     "date": "2016-01-12",
                    //     "images": [
                    //       "app/images/wordpress.jpg"
                    //     ],
                    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
                    //     "text": "The browser is a familiar model of application navigation. We enter a URL in the address bar and the browser navigates to a corresponding page. We click links on the page and the browser navigates to a new page. ",
                    //     "author": "React",
                    //
                    //     "category": [
                    //       "JavaScript",
                    //       "Framework",
                    //       "MVC"
                    //     ],
                    //     "article": true,
                    //     "tutorial": false
                    //   }
                    //   );
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