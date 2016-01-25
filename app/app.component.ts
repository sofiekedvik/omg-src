import {Component} from 'angular2/core';
import {CardsComponent} from './cards/cards.component';
import {MenuComponent} from './menu/menu.component';
import {FilterCatComponent} from './filter-cat/filter-cat.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Login} from './login/login.component';
import {Admin} from './admin/admin.component';
import {FetchJsonPipe} from './pipes/fetch-json.pipe';


@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      Admin,
      CardsComponent,
      MenuComponent,
      FilterCatComponent
    ],
    pipes: [FetchJsonPipe]
})

@RouteConfig([
  {path:'/login', name: 'Login', component: Login},
  {path:'/admin', name: 'Admin', component: Admin}
])

export class AppComponent {

 }
