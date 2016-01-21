import {Component,provide,View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CardsComponent} from './cards/cards.component';
import {MenuComponent} from './menu/menu.component';
import {FilterCatComponent} from './filter-cat/filter-cat.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Login} from './login/login.component';
import {Admin} from './admin/admin.component';
import {FetchJsonPipe} from './pipes/fetch-json.pipe';
import {Home} from './home/home.component';
import {Dashboard} from './dashboard/dashboard.component';
import {CanActivate, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy,RouterLink, RouterOutlet} from 'angular2/router';
import {Navigation} from './navigation/navigation.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
      Navigation,
      Admin,
      Login,
      Dashboard,
      CardsComponent,
      MenuComponent,
      FilterCatComponent,
      ROUTER_DIRECTIVES,
      RouterLink,
      RouterOutlet
    ],
    pipes: [FetchJsonPipe]
})

@RouteConfig([
  {path:'/', name: 'Home', component: Home},
  {path:'/Login', name: 'Login', component: Login},
  {path:'/Dashboard', name: 'Dashboard', component: Dashboard},
  {path:'/Admin', name: 'Admin', component: Admin}
])

export class AppComponent {
  public data = {
    cat: 1
  }
 }
 bootstrap(AppComponent,  [
     ROUTER_PROVIDERS,
     provide(LocationStrategy, {useClass: HashLocationStrategy})
 ]);
