import {Component} from 'angular2/core';
import {CardsComponent} from './cards.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Login} from './login/login.component';

// var template = `
// <h1>Angular app</h1>
//   <nav>
//     <a [routerLink]="['Login']">Login</a>
//   </nav>
// <router-outlet></router-outlet>
// `;

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      CardsComponent
    ]
})

@RouteConfig([
  {path:'/login', name: 'Login', component: Login},
])

export class AppComponent { }
