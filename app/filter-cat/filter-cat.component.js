System.register(['angular2/core', '../cards.component', '../menu.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cards_component_1, menu_component_1;
    var FilterCatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cards_component_1_1) {
                cards_component_1 = cards_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            }],
        execute: function() {
            FilterCatComponent = (function () {
                function FilterCatComponent() {
                }
                FilterCatComponent = __decorate([
                    core_1.Component({
                        selector: 'filter-cat',
                        template: "\n    <div *ngIf=\"data.cat == 1\">\n      <h1>Hej</h1>\n        {{data.card[0]}}\n    </div>\n    ",
                        inputs: ['data'],
                        directives: [menu_component_1.MenuComponent, cards_component_1.CardsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterCatComponent);
                return FilterCatComponent;
            })();
            exports_1("FilterCatComponent", FilterCatComponent);
        }
    }
});
//# sourceMappingURL=filter-cat.component.js.map