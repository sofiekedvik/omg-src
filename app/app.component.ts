import {Component} from 'angular2/core';
import {CardsComponent} from './cards.component';
import {MenuComponent} from './menu.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Login} from './login/login.component';
import {Admin} from './admin/admin.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      Admin,
      CardsComponent,
      MenuComponent
    ]
})

@RouteConfig([
  {path:'/login', name: 'Login', component: Login},
  {path:'/admin', name: 'Admin', component: Admin}
])

export class AppComponent { }
