import {Component} from 'angular2/core';

@Component({
  selector: 'card',
  template: `
      <div class="card col-md-3" *ngIf=data.card.article>
        <img src="{{data.card.images}}">
        <h3>{{data.card.header}}</h3>
        <p class="hide">Date: {{data.card.date}}</p>
        <p><i>{{data.card.text}}</i></p>
        <p class="hide">Author: {{data.card.author}} </p>
        <footer>
          <h4 class="category {{data.card.category[0]}}">{{data.card.category[0]}}</h4>
          <strong class="hide">Category: {{data.card.category}}</strong>
          <button class="read-btn">Read more</button>
        </footer>
        <a href="{{data.card.link}}" class="hide">Read this Article</a>
      </div>

      <div class="card col-md-3"*ngIf=data.card.tutorial>
        <img src="{{data.card.images}}">
        <h3>{{data.card.header}}</h3>
        <p class="hide">Date: {{data.card.date}}</p>
        <p><i>{{data.card.text}}</i></p>
        <p class="hide">Author: {{data.card.author}} </p>
        <footer>
          <h4 class="category {{data.card.category[0]}}">{{data.card.category[0]}}</h4>
          <strong class="hide">Category: {{data.card.category}}</strong>
          <button class="read-btn">Read more</button>
        </footer>
        <a href="{{data.card.link}}" class="hide">Read this Article</a>
      </div>
    `,
    inputs: ['data']
})

export class CardsComponent {

}
