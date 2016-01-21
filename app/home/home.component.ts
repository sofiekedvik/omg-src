import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FetchJsonPipe} from '../pipes/fetch-json.pipe';

import { ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig,RouterLink,
    Location} from 'angular2/router';

@Component({
  selector:'home',
  templateUrl:'./app/templates/home.html',
  directives: [CORE_DIRECTIVES, RouterLink],
  pipes:[FetchJsonPipe]
})
export class Home{

}
