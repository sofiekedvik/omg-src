import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';


@Component({
  selector: 'card',
  template: `
  <main>
    <div class="banner">
      <h1>What is Front End Development?</h1>
      <p>A front-end developer architects and develops websites and applications using web technologies (i.e. HTML, CSS, and JavaScript) which run natively in a web browser or act as compilation input for non-web browser environments (e.g. PhoneGap or Tidesdk). <a href="http://frontenddeveloperjob.com/what-is-a-front-end-developer">Src: frontenddeveloperjob.com</a></p>
    </div>
    <div class="container-fluid">
      <div class="row mark2">  
          <div *ngFor="#data of ('cards.json' | fetch) ">

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

          </div>
         </div>
     
    </div>
  </main>
    `,
    pipes: [FetchJsonPipe]
})

export class CardsComponent {

}
