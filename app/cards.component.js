System.register(['angular2/core', './fetch-json.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, fetch_json_pipe_1;
    var CardsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fetch_json_pipe_1_1) {
                fetch_json_pipe_1 = fetch_json_pipe_1_1;
            }],
        execute: function() {
            CardsComponent = (function () {
                function CardsComponent() {
                }
                CardsComponent = __decorate([
                    core_1.Component({
                        selector: 'card',
                        template: "\n      <div class=\"card clearfix\" *ngFor=\"#data of ('cards.json' | fetch) \">\n\n        <div *ngIf=data.card.article>\n          <h2>Articles:</h2>\n          <strong>Category: {{data.card.category}}</strong>\n          <h3>{{data.card.header}}</h3>\n          <p>Date: {{data.card.date}}</p>\n          <p><i>{{data.card.text}}</i></p>\n          <p>Author: {{data.card.author}} </p>\n          <a href=\"{{data.card.link}}\">Read this Article</a>\n        </div>\n\n        <div *ngIf=data.card.tutorial>\n          <h2>Tutorials:</h2>\n          <strong>Category: {{data.card.category}}</strong>\n          <h3>{{data.card.header}}</h3>\n          <p>Date: {{data.card.date}}</p>\n          <p><i>{{data.card.text}}</i></p>\n          <p>Author: {{data.card.author}} </p>\n          <a href=\"{{data.card.link}}\">Read this Article</a>\n        </div>\n\n      </div>\n    ",
                        pipes: [fetch_json_pipe_1.FetchJsonPipe]
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