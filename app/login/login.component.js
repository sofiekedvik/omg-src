///<reference path='../firebase.d.ts'/>
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var template, Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            template = "\n  <login>\n  <h2>Sign in</h2>\n  <input id=\"username\" #username name=\"username\" [(ngModel)]='user.name' type=\"text\">\n  <input id=\"password\" #password name=\"password\" [(ngModel)]='user.password' type=\"text\">\n  <button (click)=\"logInputData(username.value)\">Add Todo</button>\n  </login>\n";
            Login = (function () {
                function Login(firebase, username, password, text) {
                    this.firebase = firebase;
                    this.username = username;
                    this.password = password;
                    this.text = text;
                }
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: template
                    }), 
                    __metadata('design:paramtypes', [String, String, String, String])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.component.js.map