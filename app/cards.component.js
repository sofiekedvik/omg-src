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
    var CardsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CardsComponent = (function () {
                function CardsComponent() {
                }
                CardsComponent = __decorate([
                    core_1.Component({
                        selector: 'card',
                        template: "\n      <div class=\"card col-md-3\" *ngIf=data.card.article>\n        <img src=\"{{data.card.images}}\">\n        <h3>{{data.card.header}}</h3>\n        <p class=\"hide\">Date: {{data.card.date}}</p>\n        <p><i>{{data.card.text}}</i></p>\n        <p class=\"hide\">Author: {{data.card.author}} </p>\n        <footer>\n          <h4 class=\"category {{data.card.category[0]}}\">{{data.card.category[0]}}</h4>\n          <strong class=\"hide\">Category: {{data.card.category}}</strong>\n          <button class=\"read-btn\">Read more</button>\n        </footer>\n        <a href=\"{{data.card.link}}\" class=\"hide\">Read this Article</a>\n      </div>\n\n      <div class=\"card col-md-3\"*ngIf=data.card.tutorial>\n        <img src=\"{{data.card.images}}\">\n        <h3>{{data.card.header}}</h3>\n        <p class=\"hide\">Date: {{data.card.date}}</p>\n        <p><i>{{data.card.text}}</i></p>\n        <p class=\"hide\">Author: {{data.card.author}} </p>\n        <footer>\n          <h4 class=\"category {{data.card.category[0]}}\">{{data.card.category[0]}}</h4>\n          <strong class=\"hide\">Category: {{data.card.category}}</strong>\n          <button class=\"read-btn\">Read more</button>\n        </footer>\n        <a href=\"{{data.card.link}}\" class=\"hide\">Read this Article</a>\n      </div>\n    ",
                        inputs: ['data']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardsComponent);
                return CardsComponent;
            })();
            exports_1("CardsComponent", CardsComponent);
        }
    }
});
//# sourceMappingURL=cards.component.js.map