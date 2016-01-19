import {Component} from 'angular2/core';
import {CardsComponent} from './cards.component';
import {MenuComponent} from './menu.component';
import {FilterCatComponent} from './filter-cat/filter-cat.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Login} from './login/login.component';
import {FetchJsonPipe} from './fetch-json.pipe';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      CardsComponent,
      MenuComponent,
      FilterCatComponent
    ],
    pipes: [FetchJsonPipe]
})

@RouteConfig([
  {path:'/login', name: 'Login', component: Login},
])

export class AppComponent {
  public data = {
    cat: 1
  }
 }
