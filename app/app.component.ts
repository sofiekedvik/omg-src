import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Login} from './login/login.component';

var template = `
<h1>Angular app</h1>
  <nav>
    <a [routerLink]="['Login']">Login</a>
  </nav>
<router-outlet></router-outlet>
`;

@Component({
    selector: 'app',
    template:  template,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/login', name: 'Login', component: Login},
])

export class AppComponent { }
