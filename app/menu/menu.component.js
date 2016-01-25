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
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                    this.cat = 1;
                }
                MenuComponent.prototype.setCat = function (catId) {
                    this.cat = catId;
                    console.log(this.cat);
                };
                MenuComponent.prototype.about = function () {
                    console.log("click");
                    //show and hide about
                    if ($("#open").hasClass("hidden")) {
                        console.log("has hidden");
                        $("#open").removeClass("hidden");
                        $("#open").addClass("visible");
                    }
                    else if ($("#open").hasClass("visible")) {
                        $("#open").removeClass("visible");
                        $("#open").addClass("hidden");
                    }
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        // styleUrls: ['app/css/style.css'],
                        template: "\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <input type='checkbox' id='toggle'>\n            <label for='toggle' onclick class='menu-holder'>\n\n                <div class='line'></div>\n                <div class='line'></div>\n                <div class='line'></div>\n\n            </label>\n        <nav class=\"menu main\">\n          <ul>\n            <li><h3>Category</h3></li>\n            <li (click)=\"setCat(1)\"><a>CSS</a></li>\n            <li (click)=\"setCat(2)\"><a>HTML</a></li>\n            <li (click)=\"setCat(3)\"><a>JavaScript</a></li>\n            <li (click)=\"setCat(4)\"><a>PHP</a></li>\n            <li (click)=\"setCat(5)\"><a>Design</a></li>\n\n            <li><h3>Omg Src</h3></li>\n            <li id=\"about-link\" (click)=\"about()\"><a href=\"#about-page\">About</a></li>\n            <li><a href=\"#\">What is Frontend?</a></li>\n            <li><a href=\"#\">FaQ</a></li>\n          </ul>\n        </nav>\n      </div>\n      <div class=\"col-md-4 logo\">\n        <h1><a href=\"index.html\">Omg=<span>Src!</span></a></h1>\n        <p>The modern front end wiki</p>\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"search\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n      </div>\n\n    </div>\n    ",
                        inputs: ['data']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map