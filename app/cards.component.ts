import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';


@Component({
  selector: 'card',
  template: `
    <h4>Data from JSON file</h4>

      <div class="card clearfix" *ngFor="#data of ('cards.json' | fetch) ">
        <strong>Category: {{data.card.cat}}</strong>
        <h3>{{data.card.header}}</h3>
        <p>Date: {{data.card.date}}</p>
        <p><i>{{data.card.text}}</i></p>
        <p>Author: {{data.card.author}} </p>
        <a href="{{data.card.link}}">Read this Article</a>
      </div>

    `,
    pipes: [FetchJsonPipe]
})

export class CardsComponent {

}
