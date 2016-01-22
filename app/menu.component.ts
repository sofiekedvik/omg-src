import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';
import {CardsComponent} from './cards.component';


@Component({
  selector: 'header',
  styleUrls: ['app/css/style.css'],
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
            <li (click)="setCat(3)"><a>JavaScript</a></li>
            <li (click)="setCat(4)"><a>PHP</a></li>
            <li (click)="setCat(5)"><a>Design</a></li>

            <li><h3>Omg Src</h3></li>
            <li id="about-link" (click)="about()"><a href="#about-page">About</a></li>
            <li><a href="#">What is Frontend?</a></li>
            <li><a href="#">FaQ</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-md-4 logo">
        <h1><a href="index.html">Omg=<span>Src!</span></a></h1>
        <p>The modern front end wiki</p>
      </div>
      <div class="col-md-4">
        <button class="search"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
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

  about(){
    console.log("click");

    //show and hide about
    if($("#about-page").hasClass("hidden")){
      $('html, body').animate({
        scrollTop: $("#about-page").offset().top
      }, 2000);

      $("#about-page").removeClass("hidden");
      $("#about-page").addClass("show");
    }
    else if($("#about-page").hasClass("show")) {
      $("#about-page").removeClass("show");
      $("#about-page").addClass("hidden");
    }
  }

}
