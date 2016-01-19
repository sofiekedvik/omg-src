import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';


@Component({
  selector: 'card',
  template: `
      <div class="card clearfix" *ngFor="#data of ('cards.json' | fetch) ">

        <div *ngIf=data.card.article>
          <h2>Articles:</h2>
          <strong>Category: {{data.card.category}}</strong>
          <h3>{{data.card.header}}</h3>
          <p>Date: {{data.card.date}}</p>
          <p><i>{{data.card.text}}</i></p>
          <p>Author: {{data.card.author}} </p>
          <a href="{{data.card.link}}">Read this Article</a>
        </div>

        <div *ngIf=data.card.tutorial>
          <h2>Tutorials:</h2>
          <strong>Category: {{data.card.category}}</strong>
          <h3>{{data.card.header}}</h3>
          <p>Date: {{data.card.date}}</p>
          <p><i>{{data.card.text}}</i></p>
          <p>Author: {{data.card.author}} </p>
          <a href="{{data.card.link}}">Read this Article</a>
        </div>

      </div>
    `,
    pipes: [FetchJsonPipe]
})

export class CardsComponent {

}
