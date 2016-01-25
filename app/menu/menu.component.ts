import {Component} from 'angular2/core';
import {FetchJsonPipe} from '../pipes/fetch-json.pipe';
import {CardsComponent} from '../cards/cards.component';


@Component({
  selector: 'header',
  template: `
    <div class="row">
      <div class="col-md-4">
        <input type='checkbox' id='toggle'>
            <label for='toggle' onclick class='menu-holder'>

                <div class='line'></div>
                <div class='line'></div>
                <div class='line'></div>

            </label>
        <nav class="menu main">
          <ul>
            <li><h3>Category</h3></li>
            <li (click)="setCat(1)"><a>CSS</a></li>
            <li (click)="setCat(2)"><a>HTML</a></li>
            <li (click)="setCat(3)"><a href="#">JavaScript</a></li>
            <li (click)="setCat(4)"><a href="#">PHP</a></li>
            <li (click)="setCat(5)"><a href="#">Design</a></li>

            <li><h3>Omg Src</h3></li>
            <li id="about-link" (click)="about()"><a>About</a></li>
            <li><a href="#">What is Frontend?</a></li>
            <li><a href="#">FaQ</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-md-4 logo">
        <h1><a href="index.html">Omg=<span>Src!</span></a></h1>
        <p>The modern front end wiki</p>
      </div>
      <div class="search col-md-4">
        <button id="search-btn" (click)="toggleInput()"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        <input id="searchField" class="hide" type="text" placeholder="Search...">
      </div>

    </div>
    `,
    inputs: ['data']
})

export class MenuComponent {
  public data;
  public cat = 1;

  setCat(catId){
    this.cat = catId;
    console.log(this.cat);
  }

  toggleInput(){
    document.getElementById("searchField").classList.toggle('hide');
  }

  about(){
    //show and hide about
    if($("#open").hasClass("hidden")){
      $("#open").removeClass("hidden");
      console.log("hej hej");
      $("#open").addClass("visible");

    }
    else if($("#open").hasClass("visible")) {
      $("#open").removeClass("visible");
      $("#open").addClass("hidden");
    }
  }


}
