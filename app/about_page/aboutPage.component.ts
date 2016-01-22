import {Component} from 'angular2/core';
import {MenuComponent} from "../menu.component";

@Component({
  selector: 'about-page',
  template: `
    <div id="about-page" class="hidden">
      <h2 (click)="about()">About Omg Src Lorem Ipsum Dolor</h2>
    </div>
  `
})

export class AboutPageComponent{
  about(){

  }
}

//AboutPageComponent.about();
