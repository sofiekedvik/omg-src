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
                        template: "\n  <main>\n    <div class=\"banner\">\n      <h1>What is Front End Development?</h1>\n      <p>A front-end developer architects and develops websites and applications using web technologies (i.e. HTML, CSS, and JavaScript) which run natively in a web browser or act as compilation input for non-web browser environments (e.g. PhoneGap or Tidesdk). <a href=\"http://frontenddeveloperjob.com/what-is-a-front-end-developer\">Src: frontenddeveloperjob.com</a></p>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"row mark2\">  \n          <div *ngFor=\"#data of ('cards.json' | fetch) \">\n\n            <div class=\"card col-md-3\" *ngIf=data.card.article>\n            <img src=\"{{data.card.images}}\">\n              <h3>{{data.card.header}}</h3>\n              <p class=\"hide\">Date: {{data.card.date}}</p>\n              <p><i>{{data.card.text}}</i></p>\n              <p class=\"hide\">Author: {{data.card.author}} </p>\n              <footer>\n                <h4 class=\"sign\">{{data.card.category[0]}}</h4>\n                <strong class=\"hide\">Category: {{data.card.category}}</strong>\n                <button class=\"read-btn\">Read more</button>  \n              </footer>\n              <a href=\"{{data.card.link}}\" class=\"hide\">Read this Article</a>\n            </div>\n\n            <div class=\"card col-md-3\"*ngIf=data.card.tutorial>\n            <img src=\"{{data.card.images}}\">\n              <h3>{{data.card.header}}</h3>\n              <p class=\"hide\">Date: {{data.card.date}}</p>\n              <p><i>{{data.card.text}}</i></p>\n              <p class=\"hide\">Author: {{data.card.author}} </p>\n              <footer>\n                <h4 class=\"sign\">{{data.card.category[0]}}</h4>\n                <strong class=\"hide\">Category: {{data.card.category}}</strong>\n                <button class=\"read-btn\">Read more</button>  \n              </footer>\n              <a href=\"{{data.card.link}}\" class=\"hide\">Read this Article</a>\n            </div>\n\n          </div>\n         </div>\n     \n    </div>\n  </main>\n    ",
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