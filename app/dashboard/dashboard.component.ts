import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';


@Component({
  selector:'dashboard',
  templateUrl:'./app/templates/dashboard.html',
  directives:[RouterLink]
})
export class Dashboard{

}
