import {Component} from 'angular2/core';
import {CardsComponent} from '../cards/cards.component';
import {MenuComponent} from '../menu/menu.component';


@Component({
  selector: 'filter-cat',
  template: `
    <div *ngIf="data.cat == 1">
      <h1>Hej</h1>
        {{data.card[0]}}
    </div>
    `,
  inputs: ['data'],
  directives: [MenuComponent, CardsComponent]
})

export class FilterCatComponent{

}
